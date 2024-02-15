import React, { useRef, useState } from "react";
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalWrapper,
} from "./Styled-elements";

export default function Modal({ visible, setVisible, children, title }) {
  const modalRef = useRef(null);

  return (
    <>
      {visible ? (
        <ModalWrapper
          onClick={(e) => {
            if (modalRef.current.contains(e.target)) {
              return;
            }
            setVisible(false);
          }}
        >
          <ModalContainer ref={modalRef}>
            <ModalHeader>
              {title && <h3>{title}</h3>}
              <button onClick={() => setVisible(false)}>X</button>
            </ModalHeader>
            <ModalContent>{children}</ModalContent>
          </ModalContainer>
        </ModalWrapper>
      ) : (
        <></>
      )}
    </>
  );
}
