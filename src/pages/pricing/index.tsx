import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Nav from "@/components/nav/nav";

import { IPricingPlan, IPricingModal } from "../../app/interfaces";

import { Pricing as Content } from "@/content";

import ICON_BLUE_CHECK from "@/images/icon-blue-check.svg";

import "@/styles/common.scss";
import "@/styles/utilities.scss";
import "@/styles/typography.scss";
import styles from "./pricing.module.scss";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing</title>
        <meta name="description" content={Content.tabTitle} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Nav />

      <section
        id="pricingPage"
        className={`grid-layout container-global mt-42 ${styles["pricing-page"]}`}
      >
        <h1 className="h2-bold">{Content.heading}</h1>

        <ul className={`${styles["pricing-list"]} mt-42`}>
          {Content.pricingModals.map((plan: IPricingModal) => {
            return (
              <li className={styles["list-item"]} key={plan.title}>
                <Image
                  className={styles["tier-icon"]}
                  src={plan.icon}
                  alt={plan.title}
                />
                <h3 className="h3-bold">{plan.title}</h3>
                <p className={`${styles["pricing"]}`}>{plan.pricing}</p>
                <p className={`${styles["pricing-description"]}`}>
                  {plan.description}
                </p>

                <ol className="p-0">
                  {plan.benefits.map((benefit: string) => {
                    return (
                      <li className="flex-xleft-ycenter" key={benefit}>
                        <Image
                          className={styles["list-icon"]}
                          src={ICON_BLUE_CHECK}
                          alt=">"
                        />
                        <p className="paragraph-semi-bold">{benefit}</p>
                      </li>
                    );
                  })}
                </ol>

                <Link
                  href={plan.ctaLink}
                  className="btn btn-primary d-inline-block w-auto"
                >
                  {plan.ctaText}
                </Link>
                <p className={styles["competitor-price"]}>
                  {plan.competitorPrice}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
