import { Oval } from "react-loader-spinner";
import styled from "styled-components";

const Loading = () => {
  return (
    <Container>
      <Oval />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
