import styles from "./styles.module.scss";
import { SignInButton } from "../../components/SignInButton";

const Header = () => {
  return (
    <>
      <header className={"container"} id={styles.header}>
        <div className={"content"}>
          <div className={"grid-3"}>
            <div>
              <a href={"/"}>
                <img src={"/images/logo.svg"} alt={"ig.news"} />
              </a>
            </div>
            <div>
              <nav className={"navbar"}>
                <ul>
                  <li>
                    <a className={"active"} href="http://">Home</a>
                  </li>
                  <li>
                    <a href="http://">Posts</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={"flex-end"}>
              <SignInButton />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
