import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import "@/styles/utilities.scss";
import "@/styles/typography.scss";
import styles from "./terms-and-conditions.module.scss";

import { TermsAndConditions as Content, COMMON } from "../../app/content";
import { ITitleDescription } from "../../app/interfaces";

import LOGO_QT from "@/images/logo-qt.svg";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Quicktranslates | Privacy Policy" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <Link
        href="/"
        className={`flex-xleft-ycenter no-text-decoration px-22 mt-24 ${styles["logo-container"]}`}
      >
        <Image
          src={LOGO_QT}
          alt={COMMON.companyName}
          width={50}
          height={50}
          className="mr-12"
        />
        <h4 className={`h4-bold ${styles["company-name"]}`}>
          {COMMON.companyName}
        </h4>
      </Link>
      <ol className={styles["privacy-policy-container"]}>
        <h1 className="heading">Terms and Conditions</h1>
        <li className="description" key="policy-description">
          At Quicktranslates, we are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, and disclose your
          personal information in connection with our services.
        </li>
        {Content.map((privacyPolicy: ITitleDescription, index: number) => {
          return (
            <li key={`policy-${index}`}>
              <h4 className="title">
                {index + 1}. {privacyPolicy.title}
              </h4>
              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: privacyPolicy.description }}
              ></p>
            </li>
          );
        })}
        <br />
        <li className="description">
          By using our services, you consent to the collection, use, and
          disclosure of your personal information as described in this Privacy
          Policy.
        </li>
        {/* <p
          className="contact-us"
          dangerouslySetInnerHTML={{ __html: ContactTextCommon }}
        ></p> */}
      </ol>
    </>
  );
}
