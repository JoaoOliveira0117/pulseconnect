import { useEffect } from "react";

const useAutosizeTextArea = (
  ref: HTMLTextAreaElement | null,
  value: string
) => {
  useEffect(() => {
    if (ref) {
      ref.style.height = "auto";
      ref.style.height = ref.scrollHeight + "px";
    }
  }, [ref, value]);
};

export default useAutosizeTextArea;
