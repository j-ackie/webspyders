import Loading from "@/components/Loading";
import { UserContext } from "@/contexts/UserContext";
import { auth, getData, setData } from "@/firebase/utils";
import { User } from "@/types";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const Listeners = () => {
  const [loading, setLoading] = useState(true);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setUser(null);
        setLoading(false);
        return;
      }

      const userSnapshot = await getData(`users/${user.uid}`);

      if (!userSnapshot.exists()) {
        await setData(`users/${user.uid}`, {
          name: user.displayName,
          email: user.email,
          profilePictureUrl: user.photoURL,
          isGameMaster: false,
          isChronicler: false,
        });

        setUser({
          id: user.uid,
          name: user.displayName,
          alias: null,
          email: user.email,
          profilePictureUrl: user.photoURL,
          isGameMaster: false,
          isChronicler: false,
        });
      } else {
        const userSnapshotVal: User = userSnapshot.val();

        setUser({
          id: user.uid,
          name: userSnapshotVal.name,
          alias: userSnapshotVal.alias,
          email: userSnapshotVal.email,
          profilePictureUrl: userSnapshotVal.profilePictureUrl,
          isGameMaster: userSnapshotVal.isGameMaster,
          isChronicler: userSnapshotVal.isChronicler,
        });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setUser]);

  if (!loading) return null;

  return (
    <Container>
      <Loading />
    </Container>
  );
};

export default Listeners;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;
