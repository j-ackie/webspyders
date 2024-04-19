import styled from "styled-components";
import UserList from "./UserList";
import Chronicle from "./Chronicle";

const Home = () => {
  return (
    <Container>
      <div>HELLO</div>
      <Chronicle />
      <UserList />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
