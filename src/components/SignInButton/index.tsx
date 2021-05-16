import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

const SignInButton = () => {
  const isUserLoggedIn = false;
  return isUserLoggedIn ? (
    <button className={`btn ${styles.sign_in_button}`} type={"button"}>
      <FaGithub color={"#04d361"} />
      <span>Sing in with GitHub</span>
      <FiX color={"#737380"} />
    </button>
  ) : (
    <button className={`btn ${styles.sign_in_button}`} type={"button"}>
      <FaGithub color={"#eba417"} />
      <span>Sing in with GitHub</span>
    </button>
  );
}

export { SignInButton };