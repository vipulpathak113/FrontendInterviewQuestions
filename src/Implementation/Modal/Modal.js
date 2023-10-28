import ModelComp from "./ModalComp";
import { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <ModelComp show={showModal} handleClose={handleClose} title={"New title"}>
        This is the modal bodyyyyy
      </ModelComp>
      <button style={{padding: "10px", margin: "10px"}} onClick={handleShow}>Open Modal</button> 
    </>
  );
}
