import Tiptap from "@/components/Tiptap";
import { database, setData } from "@/firebase/utils";
import { onValue, ref } from "firebase/database";
import { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";

const Chronicle = () => {
  const [chronicle, setChronicle] = useState("");

  useEffect(() => {
    const unsubscribe = onValue(ref(database, "chronicle"), (snapshot) => {
      if (!snapshot.exists()) {
        setChronicle("");
        return;
      }
      console.log(snapshot.val());
      const data = snapshot.val();

      setChronicle(data);
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e: FormEvent<HTMLDivElement>) => {
    setData("chronicle", e.currentTarget.innerText);
  };

  return (
    <Container>
      <div>Chronicle</div>

      {/* <div
        suppressContentEditableWarning
        contentEditable
        onInput={handleChange}
      >
        {chronicle}
      </div> */}
      <Tiptap />
    </Container>
  );
};

export default Chronicle;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  outline: 1px solid black;
`;
