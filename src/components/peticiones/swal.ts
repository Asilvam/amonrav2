import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

/** Shared classMap applying the amonra-swal-* theme already defined in global.css. */
export const amonraSwalClasses = {
  popup: "amonra-swal-popup",
  title: "amonra-swal-title",
  htmlContainer: "amonra-swal-content",
  confirmButton: "amonra-swal-confirm",
};

/**
 * Opens a non-dismissable loading modal using the Eye of Horus as the
 * spinner instead of SweetAlert2's default loader.
 */
export function showAmonraLoading(message: string): void {
  void Swal.fire({
    title: "Procesando",
    html: `<img src="/ojo-de-horus.png" alt="" class="amonra-swal-spinner" /><p class="mt-4">${message}</p>`,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    showCloseButton: false,
    customClass: amonraSwalClasses,
  });
}

export interface AmonraAlertOptions {
  icon: "success" | "warning" | "error";
  title: string;
  text?: string;
  html?: string | HTMLElement;
  confirmButtonText?: string;
}

/** Shows a themed success/warning/error alert. */
export function showAmonraAlert(options: AmonraAlertOptions) {
  return Swal.fire({
    icon: options.icon,
    title: options.title,
    text: options.text,
    html: options.html,
    confirmButtonText: options.confirmButtonText ?? "Entendido",
    customClass: amonraSwalClasses,
  });
}

export interface AmonraSelectOption<T extends string> {
  value: T;
  label: string;
}

/**
 * Opens a themed option-picker modal, replacing the previous `.site-select`
 * custom dropdown + mobile bottom-sheet dialog. Resolves with the chosen
 * value, or `null` if the modal is dismissed without a selection.
 */
export function pickAmonraOption<T extends string>(
  title: string,
  options: Array<AmonraSelectOption<T>>,
  current: T,
): Promise<T | null> {
  return new Promise((resolve) => {
    let resolved = false;
    const optionsHtml = options
      .map(
        (option) =>
          `<button type="button" class="amonra-swal-option${
            option.value === current ? " is-selected" : ""
          }" data-value="${option.value}">${option.label}</button>`,
      )
      .join("");

    void Swal.fire({
      title,
      html: `<div class="amonra-swal-options">${optionsHtml}</div>`,
      showConfirmButton: false,
      showCloseButton: true,
      customClass: amonraSwalClasses,
      didOpen: (popup) => {
        const buttons = popup.querySelectorAll<HTMLButtonElement>(
          ".amonra-swal-option",
        );
        for (const button of buttons) {
          button.addEventListener("click", () => {
            resolved = true;
            resolve((button.dataset.value as T) ?? null);
            Swal.close();
          });
        }
      },
      willClose: () => {
        if (!resolved) resolve(null);
      },
    });
  });
}

export { Swal };
