import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

const SubscribeButton = () => {
  return (
    <button className={`btn ${styles.subscribe_button}`} type={"button"}>
      <span>Subscribe now</span>
    </button>
  );
};

export { SubscribeButton };