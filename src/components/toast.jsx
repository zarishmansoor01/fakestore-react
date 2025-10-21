import { useEffect } from "react";

export default function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const t = setTimeout(onClose, 2000);
      return () => clearTimeout(t);
    }
  }, [show, onClose]);

  return (
    <div id="toast" className={show ? "show" : ""}>
      {message}
    </div>
  );
}
