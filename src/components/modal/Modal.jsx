import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function ({ children }, ref) {
  const modalRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modalRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={modalRef}
      className="backdrop:bg-zinc-800/90 bg-zinc-200 rounded-md shadow-md p-4"
    >
      {children}
      <form method="dialog">
        <button className="p-2 m-2 bg-stone-400 rounded-sm text-stone-100 font-bold">Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
