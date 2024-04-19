import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <Title>Web Spyders DND</Title>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #333;
  padding: 0.5em;
  /* top: 0; */
`;

const Title = styled.div`
  color: white;
  font-size: 2rem;
`;
