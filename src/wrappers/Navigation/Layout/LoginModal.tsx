import Modal from "@/components/Modal";
import { auth } from "@/firebase/utils";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

const LoginModal = () => {
  const onPress = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <Modal>
      <div>Welcome to Web Spyders' DND!</div>
      <button onClick={onPress}>wow</button>
    </Modal>
  );
};

export default LoginModal;
