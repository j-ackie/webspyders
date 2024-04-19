import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { database } from "@/firebase/utils";
import { User } from "@/types";
import { useDatabaseSnapshot } from "@react-query-firebase/database";
import { onValue, ref } from "firebase/database";
import styled from "styled-components";
import UserItem from "./UserItem";
import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const unsubscribe = onValue(ref(database, "users"), (snapshot) => {
      if (!snapshot.exists()) {
        setUsers([]);
        return;
      }

      const data = snapshot.val();

      const users: User[] = Object.keys(data).map((id) => ({
        id: id,
        ...data[id],
      }));

      setUsers(users);
    });

    return () => unsubscribe();
  }, []);

  // if (isLoading) return <Loading />;

  // if (isError) return <Error message={error?.message} />;

  // if (!data) return <Error message="No data found" />;
  console.log(users);
  return (
    <Container>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </Container>
  );
};

export default UserList;

const Container = styled.div`
  height: 100%;
`;
