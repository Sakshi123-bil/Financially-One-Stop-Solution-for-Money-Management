import React from "react";

const Modal = ({
  children,
  isOpen,
  onClose,
  title
}) => {
  return (
    <div className="">
      {/* Modal content */}
      <div className="">
        {/* Modal header */}
        <div className="">
          <h3 className="">{title}</h3>
          <button type="button" className="" onClick={onClose}>
            X
          </button>
        </div>

        {/* Modal body */}
        <div className="">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Modal;