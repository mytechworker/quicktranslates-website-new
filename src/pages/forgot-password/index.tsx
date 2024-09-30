import Head from "next/head";
import styles from "./forgot-password.module.scss";

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
        <meta name="description" content="Quicktranslates - Forgot Password" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <h1 className={styles.fff}>Forgot password page here</h1>
    </>
  );
}
