import { Theme, ToastPosition, toast as toastify } from "react-toastify";

type ToastMessage = string | string[]
type ToastType = "success" | "error" | "info" | "warning"

const toastDefaults = {
  position: "bottom-left" as ToastPosition,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark" as Theme,
}

const toastSuccessStyle = {
  progressStyle: {
    backgroundColor: "var(--success)",
  }
}

const toastErrorStyle = {
  progressStyle: {
    backgroundColor: "var(--error)",
  }
}

const toastInfoStyle = {
  progressStyle: {
    backgroundColor: "var(--info)",
  }
}

const toastWarningStyle = {
  progressStyle: {
    backgroundColor: "var(--warning)",
  }
}

const toastComponent = (message: ToastMessage, type: ToastType = 'success') => {
  const toast = {
    success: () => toastify.success(message, { ...toastDefaults, ...toastSuccessStyle }),
    error: () => toastify.error(message, { ...toastDefaults, ...toastErrorStyle }),
    info: () => toastify.info(message, { ...toastDefaults, ...toastInfoStyle }),
    warning: () => toastify.warning(message, { ...toastDefaults, ...toastWarningStyle }),
  }
  return toast[type]();
}

const toast = (message: ToastMessage, type: ToastType = 'success') => {
  if (Array.isArray(message)) {
    return message.map((msg) => toastComponent(msg, type))
  } 
  
  return toastComponent(message, type)
}

export default function useToast() {
  return toast
}