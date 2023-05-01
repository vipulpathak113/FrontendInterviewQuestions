import React from "react";
import "./modal.css";

export default function ModelComp({ show, handleClose, title, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <h2>{title}</h2>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
