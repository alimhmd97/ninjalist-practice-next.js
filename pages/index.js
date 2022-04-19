import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";
export default function Home() {
  return (
    <>
      {" "}
      <Head>
        <title>home</title>
        <meta name='keywords' content='home' />
      </Head>
      <div>
        {" "}
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          adipisci dicta voluptates reiciendis repellat esse harum nemo
          inventore libero accusantium provident fugiat voluptate possimus et
          maxime laboriosam temporibus iusto dolor!
        </p>{" "}
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          adipisci dicta voluptates reiciendis repellat esse harum nemo
          inventore libero accusantium provident fugiat voluptate possimus et
          maxime laboriosam temporibus iusto dolor!
        </p>
        <Link href='/ninjas'>
          <a>see ninjas list</a>
        </Link>
      </div>
    </>
  );
}
