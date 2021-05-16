import Head from "next/head";

import styles from "./home.module.scss";
import { SubscribeButton } from "../components/SubscribeButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={`container ${styles.home}`}>
        <div className={"content"}>
          <div className={"grid-2"}>
            <section>
              <span>👏 Hey, welcome</span>
              <h1>
                News about <br /> the <strong>React</strong> world
              </h1>
              <p>
                Get acess to all the publications <br />
                <strong>for $9,90 month</strong>
              </p>
              <SubscribeButton />
            </section>
            <section className={"all-center flex-end"}>
              <img src={"/images/avatar.svg"} alt={"Girl coding"} />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
