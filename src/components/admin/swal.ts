import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export const amonraAdminSwalClasses = {
  popup: "amonra-swal-popup",
  title: "amonra-swal-title",
  htmlContainer: "amonra-swal-content",
  confirmButton: "amonra-swal-confirm",
};

export function showAdminLoading(message: string) {
  void Swal.fire({
    title: "Procesando",
    html: `<img src="/ojo-de-horus.png" alt="" class="amonra-swal-spinner" /><p class="mt-4">${message}</p>`,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    showCloseButton: false,
    customClass: amonraAdminSwalClasses,
  });
}

export function showAdminAlert(
  icon: "success" | "warning" | "error",
  title: string,
  text?: string,
) {
  return Swal.fire({
    icon,
    title,
    text,
    confirmButtonText: "Entendido",
    customClass: amonraAdminSwalClasses,
  });
}

export async function confirmAdminDeletion(reference: string) {
  const result = await Swal.fire({
    icon: "warning",
    title: "¿Eliminar esta petición?",
    text: `La petición ${reference} y sus datos se borrarán de forma definitiva y no se podrán recuperar.`,
    showCancelButton: true,
    confirmButtonText: "Eliminar definitivamente",
    cancelButtonText: "Cancelar",
    reverseButtons: true,
    customClass: {
      ...amonraAdminSwalClasses,
      cancelButton: "amonra-swal-cancel",
    },
  });
  return result.isConfirmed;
}

export async function confirmAdminBlock(
  type: "email" | "phone",
  value: string,
) {
  const label = type === "email" ? "correo" : "WhatsApp";
  const result = await Swal.fire({
    icon: "warning",
    title: `¿Bloquear este ${label}?`,
    text: `Las futuras peticiones con ${value} serán rechazadas. Las peticiones existentes no se eliminarán.`,
    showCancelButton: true,
    confirmButtonText: `Bloquear ${label}`,
    cancelButtonText: "Cancelar",
    reverseButtons: true,
    customClass: {
      ...amonraAdminSwalClasses,
      cancelButton: "amonra-swal-cancel",
    },
  });
  return result.isConfirmed;
}

export async function confirmAdminUnblock(value: string) {
  const result = await Swal.fire({
    icon: "warning",
    title: "¿Desbloquear este contacto?",
    text: `Las futuras peticiones con ${value} volverán a ser aceptadas.`,
    showCancelButton: true,
    confirmButtonText: "Desbloquear contacto",
    cancelButtonText: "Cancelar",
    reverseButtons: true,
    customClass: {
      ...amonraAdminSwalClasses,
      cancelButton: "amonra-swal-cancel",
    },
  });
  return result.isConfirmed;
}

export { Swal };
