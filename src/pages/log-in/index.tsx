import Head from "next/head";
import styles from "./log-in.module.scss";

export default function Login() {
  return (
    <>
      <Head>
        <title>Log-in</title>
        <meta name="description" content="Quicktranslates | Log-in" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <h1 className={styles.fff}>Login page here</h1>
    </>
  );
}
