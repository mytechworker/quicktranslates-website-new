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

import { HomePage as Content } from "@/content";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';


export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

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

      <section className={`${styles["aboutusSection"]} grid-layout container-global-bg-color`}>
        <p className={`tag tag-blue paragraph-3-bold`}>
          {Content.aboutus.tag}
        </p>
        <h2 className="h2-bold text-center" dangerouslySetInnerHTML={{ __html: Content.aboutus.heading }}></h2>

        <div className={styles["carousel-container"]}>
          <Swiper
              initialSlide={1}
              centeredSlides={true}
              spaceBetween={50}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              breakpoints={{
              // Responsive settings
              1280: { slidesPerView: 3 },
              768: { slidesPerView: 2, spaceBetween: 40 },
              640: { slidesPerView: 1, spaceBetween: 20 },
            }}
          >
            {Content.aboutus.steps.map((step, index) => {
            // Determine if slide should be clear, blurred (prev/next)
            const isPrev = index === (activeIndex === 0 ? Content.aboutus.steps.length - 1 : activeIndex - 1);
            const isNext = index === (activeIndex === Content.aboutus.steps.length - 1 ? 0 : activeIndex + 1);
            const isActive = index === activeIndex;

            // Assign classes dynamically
            const slideClass = isActive
              ? styles.clear
              : isPrev || isNext
              ? styles.blurred
              : '';

            return (
              <SwiperSlide key={index} className={slideClass} style={{display: "flex", alignItems: "center"}}>
                <ul className={`mt-44 ${styles["steps-container"]}`}>
                  <li className={`${styles["step-container"]} flex-col-center-start`}>
                    <Image src={step.icon} alt="user-profile" className={styles["step-icon"]} />
                    <h4 className={`h3-bold`}>{step.name}</h4>
                    <h6 className={`paragraph-regular`}>{step.owner}</h6>
                    <p className={`${styles["step-description"]} paragraph-regular`}>{step.description}</p>
                  </li>
                </ul>
              </SwiperSlide>
            );
          })}
          </Swiper>

          <button 
            className="swiper-button-prev" 
            style={{ 
              backgroundColor: '#5E85ED', 
              color: '#FBFCFD', 
              padding: '8px', 
              border: '4px solid #BED0FF', 
              borderRadius: '16px', 
              cursor: 'pointer',
              position: 'absolute',
              bottom: '6%', 
              transform: 'translateY(-50%)',
              zIndex: 1,
              outline: 'none',
              right: '51%'
            }}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button 
            className="swiper-button-next" 
            style={{ 
              backgroundColor: '#5E85ED', 
              color: '#FBFCFD', 
              padding: '8px', 
              border: '4px solid #BED0FF', 
              borderRadius: '16px', 
              cursor: 'pointer',
              position: 'absolute',
              bottom: '6%', 
              transform: 'translateY(-50%)',
              zIndex: 1,
              outline: 'none',
              left: '51%'
            }}>  
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
