import Link from "next/link";
import Image from "next/image";

import "@/styles/common.scss";
import "@/styles/utilities.scss";
import "@/styles/typography.scss";
import styles from "./footer.module.scss";
import { Footer as Content } from "@/content";

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div className="grid-layout container-global-bg-color">
        <div className={`${styles.logo}`}>
          <Link
            href="/"
            className={`${styles["logo-container"]} flex-xleft-ycenter no-text-decoration`}
          >
            <Image
              width={50}
              height={50}
              className="mr-12"
              src={Content.companyLogo}
              alt={Content.companyName}
            />
            <h4 className={`${styles.mb0} h4-bold`}>{Content.companyName}</h4>
          </Link>
          <p className="paragraph-regular"
              dangerouslySetInnerHTML={{ __html: Content.companyDescription }}
          ></p>
        </div>

        <div className={styles.company}>
          <h4 className={`h4-regular`}>{Content.company.title}</h4>
          <ul>
            {Content.company.links.map((item, index) => {
              return (
                <li key={`${item.title}_${index}`}>
                  <Link href={item.link} className={styles.link}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.pricing}>
          <h4 className={`h4-regular`}>{Content.pricing.title}</h4>
          <ul>
            {Content.pricing.links.map((item, index) => {
              return (
                <li key={`${item.title}_${index}`}>
                  <Link href={item.link} className={styles.link}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.help}>
          <h4 className={`h4-regular`}>{Content.help.title}</h4>
          <ul>
            {Content.help.links.map((item, index) => {
              return (
                <li key={`${item.title}_${index}`}>
                  <Link href={item.link} className={styles.link}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={`${styles.copyrightSection} container-global-bg-color`}>
        <div className={`${styles.copyright}`}>
          <Image
            className="mr-12"
            src={Content.copyrightSection.copyright.image}
            alt="Copyright img"
          />
          <h4 className={`paragraph-small`}>{Content.copyrightSection.copyright.title}</h4>
        </div>
        <div className={`${styles.socialIcons}`}>
            <Image
              alt="Facebook"
              src={Content.copyrightSection.socialIcons.images[0].icon}
            />
            <Image
              alt="Twitter"
              src={Content.copyrightSection.socialIcons.images[1].icon}
            />
            <Image
              alt="Youtube"
              src={Content.copyrightSection.socialIcons.images[2].icon}
            />
            <Image
              alt="Linkdin"
              src={Content.copyrightSection.socialIcons.images[3].icon}
            />
        </div>
      </div>
    </footer>
  );
}
