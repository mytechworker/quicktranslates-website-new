import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import "@/styles/common.scss";
import "@/styles/utilities.scss";
import "@/styles/typography.scss";
import styles from "./home.module.scss";

import Nav from "@/components/nav/nav";
import Footer from "@/components/footer/footer";

import Chevron from "@/images/chevron.svg";
import Arrow_Black from "@/images/arrow-black.svg";
import Arrow_White from "@/images/arrow-white.svg";
import LEFT_ARROW_ICON from "@/images/left-arrow.svg";
import RIGHT_ARROW_ICON from "@/images/right-arrow.svg";

import { HomePage as Content } from "@/content";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [animationDirection, setAnimationDirection] = useState("none");

  const handleNext = () => {
    console.log("Next clicked");
    setActiveIndex((prevIndex) => (prevIndex + 1) % Content.aboutus.steps.length);
  };

  const handlePrev = () => {
    console.log("Prev clicked");
    setActiveIndex((prevIndex) =>
      (prevIndex - 1 + Content.aboutus.steps.length) % Content.aboutus.steps.length
    );
  };
  console.log(Content.aboutus.steps.length);

  return (
    <>
      <Head>
        <meta name="description" content={"Quicktranslates | Home"} />
        <title>
          {`${
            process.env.NEXT_PUBLIC_ENV_NAME === "development" ? "Test -" : ""
          } Home`}
        </title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Nav />

      <section id={styles.hero} className="grid-layout container-global">
        <div className={styles.left}>
          <h1
            className="heading h1-semi-bold"
            dangerouslySetInnerHTML={{ __html: Content.hero.heading }}
          ></h1>

          <p className="paragraph-regular">{Content.hero.description1}</p>
          <div className={styles["cta-container"]}>
            <Link
              type="button"
              href={Content.hero.primaryCtaLink}
              className="btn btn-primary paragraph-bold mr-16"
            >
              {Content.hero.primaryCtaText}
            </Link>
          </div>

          <Image
            alt="Hero"
            src={Content.hero.image[1]}
            className={styles["signup-today-hero-image"]}
          />
        </div>

        <div className={styles.right}>
          <Image
            alt="Hero"
            src={Content.hero.image[0]}
            className={styles["hero-image"]}
          />
        </div>
      </section>

      <div className="separator"></div>

      <section id={styles.transcriptionProcess} className="grid-layout container-global-bg-color">
        <p className={`tag tag-blue paragraph-3-bold`}>{Content.process.tag}</p>
        <h2 className="h2-bold text-center"
            dangerouslySetInnerHTML={{ __html: Content.process.heading }}></h2>
        <div className="language-section">
          <Image
            alt="Language"
            src={Content.process.images[0].icon}
            className={styles["language-img"]}
          />
          <Image
            alt="Spanish"
            src={Content.process.images[1].icon}
            className={styles["spanish-img"]}
          />
          <Image
            alt="Italian"
            src={Content.process.images[2].icon}
            className={styles["italian-img"]}
          />
          <Image
            alt="German"
            src={Content.process.images[3].icon}
            className={styles["german-img"]}
          />
          <Image
            alt="Portuguese"
            src={Content.process.images[4].icon}
            className={styles["portuguese-img"]}
          />
          <Image
            alt="Japanese"
            src={Content.process.images[5].icon}
            className={styles["japanese-img"]}
          />
          <Image
            alt="Korean"
            src={Content.process.images[6].icon}
            className={styles["korean-img"]}
          />
          <Image
            alt="French"
            src={Content.process.images[7].icon}
            className={styles["french-img"]}
          />
        </div>
      </section>

      <div className="separator"></div>

      <section className={`${styles["pricing-section"]} grid-layout container-global-bg-color`}>
        <p className={`tag tag-blue paragraph-3-bold`}>{Content.pricing.tag}</p>
        <h2 className="h2-bold text-center"
            dangerouslySetInnerHTML={{ __html: Content.pricing.heading }}></h2>
        <Image
          alt="Hero"
          src={Content.pricing.image}
          className={styles["video-audio-img"]}
        />
      </section>

      <div className="separator"></div>

      <section className={`${styles["featureMediaSection"]} grid-layout container-global-bg-color`}>
        <p className={`tag tag-blue paragraph-3-bold`}>{Content.accuracyFeatureMedia.tag}</p>
        <h2 className="h2-bold text-center"
            dangerouslySetInnerHTML={{ __html: Content.accuracyFeatureMedia.heading }}></h2>
        <Image
          alt="Hero"
          src={Content.accuracyFeatureMedia.image}
          className={styles["captions-img"]}
        />
      </section>

      <div className="separator"></div>

      <section className={`${styles["recordYourOwnVoiceSection"]} grid-layout container-global-bg-color`}>
        <p className={`tag tag-blue paragraph-3-bold`}>{Content.recordYourOwnVoice.tag}</p>
        <h2 className="h2-bold text-center"
            dangerouslySetInnerHTML={{ __html: Content.recordYourOwnVoice.heading }}></h2>
        <Image
          alt="Hero"
          src={Content.recordYourOwnVoice.image}
          className={styles["record-img"]}
        />
      </section>

      <div className="separator"></div>
     
      {/* <section className={`${styles["aboutusSection"]} grid-layout container-global-bg-color`}>
        <p className={`tag tag-blue paragraph-3-bold`}>{Content.aboutus.tag}</p>
        <h2 className="h2-bold text-center"
            dangerouslySetInnerHTML={{ __html: Content.aboutus.heading }}></h2>
        <ul className={`mt-44 ${styles["steps-container"]}`}>
          {Content.aboutus.steps.map((step, index) => {
            return (
              <li className={`${styles["step-container"]} flex-col-center-start`}
                key={`${step.name}-${index}`}>
                <Image
                  src={step.icon}
                  alt="user-profile"
                  className={styles["step-icon"]}
                />
                <p className={`${styles["step-count-desktop"]} h4-bold flex-center`}></p>
                <h4 className={`h3-bold`}>{step.name}</h4>
                <p className={`paragraph-regular`}>{step.owner}</p>
                <p className={`${styles["step-description"]} paragraph-regular`}>
                  {step.description}
                </p>
              </li>
            );
          })}
        </ul>
      </section> */}
     

      <section className={`${styles["aboutusSection"]} grid-layout container-global-bg-color`}>
        <p className={`tag tag-blue paragraph-3-bold`}>
          {Content.aboutus.tag}
        </p>
        <h2 className="h2-bold text-center" dangerouslySetInnerHTML={{ __html: Content.aboutus.heading }}></h2>

        <div className={styles["carousel-container"]}>
          <Swiper
              // slidesPerView={3}
              centeredSlides={true}
              spaceBetween={30}
              navigation={true}
              // autoplay={{
              //   delay: 3000, // Time in ms between slide transitions
              //   disableOnInteraction: false, // Autoplay will not be disabled after user interactions
              // }}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              breakpoints={{
              // Responsive settings
              640: {
                slidesPerView: 1, // Show 1 slide on mobile
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2, // Show 2 slides on tablet
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3, // Show 3 slides on desktop
              },
            }}
          >
            {Content.aboutus.steps.map((step, index) => (
              <SwiperSlide key={index}>
                <ul className={`mt-44 ${styles["steps-container"]}`}>
                  <li className={`${styles["step-container"]} flex-col-center-start`}>
                    <Image
                      src={step.icon}
                      alt="user-profile"
                      className={styles["step-icon"]}
                    />
                    <h4 className={`h3-bold`}>{step.name}</h4>
                    <p className={`paragraph-regular`}>{step.owner}</p>
                    <p className={`${styles["step-description"]} paragraph-regular`}>{step.description}</p>
                  </li>
                </ul>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          {/* <button className={styles["prev-button"]} onClick={handlePrev}>
            <Image
              alt="Hero"
              src={LEFT_ARROW_ICON}
            />
          </button>
          <button className={styles["next-button"]} onClick={handleNext}>
            <Image
              alt="Hero"
              src={RIGHT_ARROW_ICON}
            />
          </button> */}
        </div>
      </section>

      <div className="separator"></div>
      
      <Footer />
    </>
  );
}
