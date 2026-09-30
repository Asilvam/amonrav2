# Plan de pruebas QA — Peticiones Amonra

**Fecha:** 30-09-2026
**Alcance:** formulario público de peticiones, API NestJS, persistencia MongoDB Atlas, correo de confirmación y administración.
**Objetivo:** verificar el recorrido de extremo a extremo antes de desplegar cambios en el flujo de peticiones.

## 1. Resumen del flujo que se valida

1. La persona completa una petición, acepta el consentimiento y la envía.
2. Astro bloquea envíos duplicados, muestra el indicador de procesamiento y presenta el aviso para revisar el correo.
3. El backend guarda la petición en estado `pending_confirmation` y solicita al microservicio el envío del enlace de confirmación.
4. Al abrir el enlace, la página confirma el correo automáticamente. Si el token es válido, el backend cambia el estado a `received` y la página comunica que la petición quedó validada.
5. El administrador inicia sesión, consulta las peticiones confirmadas, edita el mensaje, cambia el estado o elimina una petición después de confirmarlo.

El flujo actual **no incluye reenvío del enlace**. Un enlace ausente, vencido o ya utilizado debe mostrar el error y ofrecer volver a Peticiones, sin mostrar un formulario de reenvío.

## 2. Ambientes y controles de prueba

| Ambiente | Componentes | Uso |
| --- | --- | --- |
| Local | Astro `localhost:4321`, API NestJS `localhost:3500`, microservicio de correo local | Pruebas funcionales y de integración |
| Staging | Frontend, API y base de datos aislados | Regresión previa a producción |
| Producción | Sitio y servicios reales | Smoke test de solo lectura y envío controlado autorizado |

Reglas para los datos:

- Usar una base de datos de pruebas separada de producción y cuentas de correo controladas por QA.
- No incluir nombres, correos, teléfonos, intenciones ni tokens reales en capturas o informes.
- Identificar los datos de prueba con una marca como `QA-20260930` en el mensaje.
- Borrar los registros de prueba desde el administrador solo en local/staging; nunca probar borrado permanente sobre datos reales.
- No publicar secretos de `.env`, cookies, tokens de confirmación ni claves de seguimiento en evidencias.

## 3. Prioridad y severidad

| Prioridad | Criterio |
| --- | --- |
| P0 | Bloquea la creación, confirmación o administración segura de peticiones; impide validar el build o causa pérdida de datos. |
| P1 | Rompe una función principal, provoca duplicados, expone información privada o hace imposible completar una tarea importante. |
| P2 | Defecto de interacción, contenido, accesibilidad o diseño con una alternativa razonable. |
| P3 | Ajuste menor o mejora no bloqueante. |

## 4. Casos funcionales — formulario público

| ID | Pri. | Escenario y pasos | Resultado esperado |
| --- | --- | --- | --- |
| PUB-001 | P0 | Abrir `/peticiones/` en escritorio y móvil. | Formulario completo, sin errores visibles ni desbordamiento horizontal. |
| PUB-002 | P1 | Enviar vacío. | El navegador identifica los campos requeridos; no se llama a la API. |
| PUB-003 | P1 | Ingresar nombre, correo válido, intención de 5 y 600 caracteres y consentimiento. | La petición puede enviarse. |
| PUB-004 | P1 | Probar intención de 4 caracteres, 601 caracteres, nombre vacío, correo inválido y consentimiento sin marcar. | Cada valor inválido se rechaza antes de crear el registro. |
| PUB-005 | P1 | Cambiar entre cadena, vela y otra petición; cambiar sus opciones y pulsar fuera del selector. | Se guarda la opción visible; los selectores se cierran correctamente y el foco queda usable. |
| PUB-006 | P1 | Dejar celular vacío y enviar. | El celular es opcional y se guarda como ausente, no como prefijo incompleto. |
| PUB-007 | P1 | Escribir los 8 dígitos del celular chileno, con espacios, pegado o borrado. | El campo conserva `+56 9`, formatea los ocho dígitos y envía un solo número normalizado. |
| PUB-008 | P1 | Probar celular con menos de 8 dígitos y completar luego el dato. | No se acepta un número incompleto; al corregirlo sí puede enviarse. |
| PUB-009 | P1 | Marcar y desmarcar “compartir” y revisar el consentimiento. | `share` refleja la selección; no compartir queda como opción predeterminada. |
| PUB-010 | P0 | Enviar una petición válida y hacer doble clic rápidamente. | Se crea una sola petición; botón bloqueado, spinner de página visible y una sola llamada POST. |
| PUB-011 | P1 | Envío exitoso: pulsar “Entendido”. | El aviso indica revisar correo y, al cerrarlo, navega a Inicio. No muestra clave de seguimiento. |
| PUB-012 | P1 | Simular microservicio de correo caído o con HTTP 5xx. | Se muestra aviso de fallo claro; no se presenta como correo enviado ni ofrece reenvío. El registro queda con el comportamiento documentado por el backend. |
| PUB-013 | P1 | Simular API 429 en producción. | Se explica que hay demasiados intentos; no se muestra un error técnico en inglés. |
| PUB-014 | P2 | Activar el campo honeypot `website` mediante una petición automatizada. | No se envía correo ni se crea una petición legítima. |

## 5. Casos funcionales — API, correo y persistencia

| ID | Pri. | Escenario | Resultado esperado |
| --- | --- | --- | --- |
| API-001 | P0 | POST válido a `/api/peticiones` con datos de QA. | Respuesta `201`; referencia con formato `AM-` más 12 caracteres hexadecimales; sin claves privadas en la respuesta de creación. |
| API-002 | P0 | Leer el registro recién creado en la base de pruebas. | Estado `pending_confirmation`; nombre, correo normalizado, tipo, opciones condicionales, intención, consentimiento y celular opcional persistidos correctamente. |
| API-003 | P1 | Omitir celular o enviar un celular válido. | MongoDB omite el campo cuando no se entrega y persiste `phone` cuando existe. El administrador muestra el valor guardado. |
| API-004 | P1 | Enviar campos desconocidos o DTO inválido. | La validación global rechaza la petición y no la persiste. |
| API-005 | P1 | Crear petición en desarrollo con varios intentos. | El límite de creación definido para desarrollo no bloquea las pruebas locales. |
| API-006 | P1 | Superar 5 solicitudes por hora/IP en producción/staging configurado como producción. | API devuelve `429`; no persiste solicitudes posteriores al límite. |
| MAIL-001 | P0 | Capturar el correo de confirmación en el microservicio de pruebas. | Destinatario correcto, enlace con token, caducidad indicada de 24 horas; sin clave de seguimiento ni datos de la intención. |
| MAIL-002 | P1 | Simular timeout, rechazo HTTP y microservicio inaccesible. | Backend registra el resultado sin guardar tokens en logs; frontend informa correctamente. |
| API-007 | P1 | Revisar logs con peticiones válidas e inválidas. | Hay correlación por `X-Request-Id`; no se imprimen correo, celular, mensaje, token ni contraseña. |

## 6. Casos funcionales — confirmación de correo

| ID | Pri. | Escenario y pasos | Resultado esperado |
| --- | --- | --- | --- |
| CONF-001 | P0 | Abrir el enlace completo recibido en el correo. | La página inicia automáticamente un único POST a `/api/peticiones/confirmar`; no requiere pulsar otro botón. |
| CONF-002 | P0 | Confirmación válida. | MongoDB cambia de `pending_confirmation` a `received`, fija `confirmedAt` y consume el token. La página muestra “Petición validada” y estado “Recibida”. |
| CONF-003 | P1 | Revisar la ventana luego de validar. | No aparecen referencia, código de seguimiento, enlace para consultar estado ni formulario de reenvío; se ve el estado y la salida indicada a Inicio. |
| CONF-004 | P1 | Abrir un enlace vencido o ya usado. | No cambia la petición; se explica que no se pudo validar y se ofrece volver a Peticiones. No aparece acción de reenvío. |
| CONF-005 | P1 | Abrir `/peticiones/confirmar/` sin `token`. | Mensaje de enlace incompleto y navegación a Peticiones; no se intenta llamar al endpoint ni se muestra formulario de reenvío. |
| CONF-006 | P1 | Simular fallo de red/HTTP 5xx al confirmar. | La página explica el fallo temporal y permite reintentar la validación sin crear otra petición. |
| CONF-007 | P1 | Revisar URL después de una confirmación exitosa. | El token desaparece de la barra de direcciones y no queda en enlaces de navegación. |
| CONF-008 | P1 | Enviar POST a `/api/peticiones/reenviar`. | La ruta ya no existe y no envía correo. El frontend tampoco contiene una llamada ni formulario para reenvío. |

## 7. Casos funcionales — estado público y privacidad

| ID | Pri. | Escenario | Resultado esperado |
| --- | --- | --- | --- |
| EST-001 | P0 | Consultar estado con referencia y clave válida en fixture de QA. | Devuelve referencia, estado y fechas; no devuelve nombre, correo, teléfono ni intención. |
| EST-002 | P1 | Clave incorrecta, referencia inexistente y exceso de intentos. | Error controlado; no revela qué dato fue el incorrecto; límite aplicado. |
| EST-003 | P1 | Seguir el recorrido normal desde crear hasta consultar estado. | Validar dónde recibe la persona la clave necesaria. **Bloqueo conocido:** correo, respuesta de creación y pantalla de confirmación actualmente no presentan la clave; hasta definir el canal, la consulta pública no puede ser completada por una persona sin datos de fixture. |
| EST-004 | P1 | Solicitar borrado de una petición de QA. | No aparecen tokens, cookie de administración ni datos privados en la URL. |

## 8. Casos funcionales — administrador

| ID | Pri. | Escenario y pasos | Resultado esperado |
| --- | --- | --- | --- |
| ADM-001 | P0 | Abrir `/admin/peticiones/` sin sesión. | Se muestra acceso de administración; el listado y sus datos no se exponen. |
| ADM-002 | P0 | Iniciar sesión con contraseña válida. | API entrega cookie `HttpOnly`; se carga el listado; spinner junto al botón, botón desactivado y doble envío bloqueado. |
| ADM-003 | P1 | Contraseña incorrecta y 5 intentos fallidos dentro de 15 min. | Mensaje comprensible; acceso rechazado; se limita el siguiente intento según política. |
| ADM-004 | P0 | Llamar a GET/PATCH/DELETE de administración sin cookie o con cookie alterada/vencida. | API responde `401`; no filtra ni modifica datos. |
| ADM-005 | P1 | Cerrar sesión y reutilizar la cookie eliminada en el navegador. | Cookie limpiada y endpoint protegido vuelve a responder `401`. |
| ADM-006 | P1 | Actualizar lista, cambiar filtros por todos los estados y volver a “Todas”. | Spinner pequeño dentro de “Actualizar”; listado correcto para cada filtro, sin spinner junto al cursor ni peticiones duplicadas por clic. |
| ADM-007 | P1 | Abrir petición confirmada y comprobar datos personales. | Nombre, correo y celular persistido visibles; ausente se muestra como “No informado”. |
| ADM-008 | P0 | Cambiar estado entre recibida, aceptada, en proceso, realizada y anulada; guardar. | API persiste el estado; tarjeta se actualiza y filtros reflejan el cambio. |
| ADM-009 | P1 | Intentar modificar petición pendiente de confirmación directamente por API. | El backend rechaza el cambio; sólo el administrador autenticado puede modificar estados válidos. |
| ADM-010 | P1 | Editar mensaje con 5, 600, 4 y 601 caracteres; guardar/cancelar. | Valores válidos persisten; inválidos no cambian MongoDB; cancelar descarta la edición. |
| ADM-011 | P0 | Pulsar eliminar y cancelar el diálogo. | La petición permanece intacta. |
| ADM-012 | P0 | Eliminar y confirmar sobre fixture descartable. | Borrado permanente en MongoDB y tarjeta retirada del listado; toast confirma resultado. |
| ADM-013 | P1 | Forzar 401, 500 y pérdida de red durante guardar, editar o eliminar. | Mensaje de error; no se muestra éxito falso; se conserva estado previo y sesión se cierra visualmente si recibe 401. |
| ADM-014 | P2 | Navegar formularios, filtros, diálogo y acciones sólo con teclado. | Foco visible, orden lógico, selector operable, diálogo cancelable y botones con nombres accesibles. |

## 9. Matriz de compatibilidad y accesibilidad

Ejecutar los casos P0 y P1 del frontend en:

- Desktop: Chrome/Brave y Safari actuales; Firefox como cobertura adicional.
- Mobile: Safari iOS y Chrome Android.
- Viewports: `320×568`, `390×844`, `768×1024` y `1440×900`.

Comprobar además:

- zoom al 200% sin pérdida de acciones;
- etiquetas asociadas a cada campo, errores anunciados y estados `aria-live` pertinentes;
- contraste de texto, foco visible y controles táctiles cómodos;
- SweetAlert bloquea la interacción durante el envío y devuelve el foco de forma razonable;
- spinner tiene nombre/estado accesible y no depende del cursor para comunicar carga;
- mensajes y tarjetas no se solapan con textos largos o un celular presente.

## 10. Pruebas automatizadas y comandos

### Frontend Astro

```bash
npm run check
npm run build
```

### Backend NestJS

```bash
npm run build
npm run test:unit
```

Las pruebas unitarias existentes se ejecutan con Node Test. Antes de usarlas como criterio de aprobación, actualizar las expectativas que ya no coinciden con el contrato actual; en particular, el test de creación todavía espera `result.trackingToken`, mientras la respuesta actual no debe exponer esa clave.

Automatizar primero validación DTO, persistencia del teléfono, límites de intentos, consumo único/expiración del token y autorización de endpoints admin. Mantener correo, Mongo Atlas y navegación de navegador como integración o E2E con servicios de QA aislados; no depender de la cuenta real de correo ni de la base de producción.

## 11. Preparación, ejecución y salida

### Antes de ejecutar

1. Confirmar ramas/commit de frontend y backend que se validan.
2. Preparar MongoDB y microservicio de correo de QA con datos descartables.
3. Configurar variables en gestores locales seguros, nunca copiarlas al informe.
4. Limpiar rate limits y preparar una dirección de correo controlada.
5. Actualizar pruebas unitarias obsoletas señaladas en la sección 10.

### Criterios de salida

- Todos los casos P0 aprobados.
- Ningún defecto crítico o alto abierto sin decisión documentada.
- `npm run check`, `npm run build` y `npm run test:unit` pasan en los proyectos correspondientes.
- Se confirma persistencia y lectura administrativa de campos, incluido el celular.
- Se demuestra un único envío por doble clic y una confirmación por token válido.
- No se envían correos de prueba a destinatarios reales no autorizados ni se alteran datos de producción.
- Se resuelve el bloqueo EST-003 o se acepta explícitamente que la consulta pública de estado no estará disponible para clientes en esta versión.

### Registro por ejecución

Guardar fecha, ambiente, commit, navegador/dispositivo, IDs ejecutados, resultado (`PASS`/`FAIL`/`BLOCKED`), evidencia anonimizada, referencia de defecto, severidad, responsable y decisión de salida.
No guardar tokens, contraseñas, mensajes privados ni PII.
