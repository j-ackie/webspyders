import { FC, ReactNode } from "react";
import styled from "styled-components";

interface ModalProps {
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <Container>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
`;
