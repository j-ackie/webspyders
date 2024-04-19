import { EditorProvider, BubbleMenu, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import * as Y from "yjs";
import Collaboration from "@tiptap/extension-collaboration";
import { TiptapCollabProvider } from "@hocuspocus/provider";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import Loading from "./Loading";

// define your extension array
const extensions = [StarterKit];

const A = () => {
  const { editor } = useCurrentEditor();
  console.log(editor?.storage.collaborationCursor.users);
  return null;
};

const ydoc = new Y.Doc();

const provider = new TiptapCollabProvider({
  name: "poop",
  appId: import.meta.env.VITE_TIPTAP_APP_ID as string,
  token: import.meta.env.VITE_TIPTAP_TOKEN as string,
  document: ydoc,
});

console.log(import.meta.env.TIPTAP_APP_ID);

const Tiptap = () => {
  const { user } = useContext(UserContext);

  if (!user) return <Loading />;

  return (
    <EditorProvider
      extensions={[
        ...extensions,
        Collaboration.configure({
          document: ydoc,
        }),
        CollaborationCursor.configure({
          provider,
          user: {
            name: user?.name,
            color:
              "#" +
              (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0"),
          },
        }),
      ]}
    >
      {/* <BubbleMenu>This is the bubble menu</BubbleMenu> */}
      <A />
    </EditorProvider>
  );
};

export default Tiptap;
