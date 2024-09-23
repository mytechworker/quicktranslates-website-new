import ICON_DOLLAR from "@/images/icon-dollar.svg";
import ICON_BULLS_EYE from "@/images/icon-bulls-eye.svg";
import ICON_ANALOG_CLOCK from "@/images/icon-analog-clock.svg";
import ICON_MULTI_LINGUAL from "@/images/icon-multi-lingual.svg";

import LOGO_QT from "@/images/logo-qt.svg";
import LOGO_HUB_SPOT from "@/images/logo-hubspot.svg";
import LOGO_AWWWARDS from "@/images/logo-awwwards.svg";
import LOGO_TECH_RADAR from "@/images/logo-techradar.svg";
import LOGO_PRODUCT_HUNT from "@/images/logo-product-hunt.svg";

import ICON_PROCESS_STEP_1 from "@/images/icon-process-step-1.svg";
import ICON_PROCESS_STEP_2 from "@/images/icon-process-step-2.svg";
import ICON_PROCESS_STEP_3 from "@/images/icon-process-step-3.svg";
import ICON_HUMAN_TRANSCRIPTION from "@/images/human-transcription.svg";
import ICON_MONTHLY_SUBSCRIPTION from "@/images/monthly-subscription.svg";
import ICON_AUTOMATE_TRANSCRIPTION from "@/images/automated-transcription.svg";

import IMG_HERO from "@/images/hero.png";
import IMG_SHOWCASE from "@/images/showcase.jpg";
import IMG_SUPPORT_TEAM from "@/images/support-team-copy.jpg";
import IMG_FAZAL_SHARIF from "@/images/fazal-sharif.png";
import IMG_ALEX_PLAIN from "@/images/alex-plain.png";
import IMG_ACCURACY_SECTION from "@/images/accuracy-section.png";
import IMG_HUMAN_TRANSCRIPTION from "@/images/human-transcription.svg";
import IMG_MONTHLY_SUBSCRIPTION from "@/images/monthly-subscription.svg";
import IMG_AUTOMATED_TRANSCRIPTION from "@/images/automated-transcription.svg";

import FLAG_INDIA from "@/images/flag-india.jpg";
import FLAG_SAUDI_ARABIA from "@/images/flag-saudi-arabia.jpg";
import SIGNUP_TODAY_IMG from "@/images/signup-today.png";
import LANGUAGE_IMG from "@/images/language.png";
import SPANISH_IMG from "@/images/spanish.png";
import ITALIAN_IMG from "@/images/italian.png";
import GERMAN_IMG from "@/images/german.png";
import PORTUGUESE_IMG from "@/images/portuguese.png";
import JAPANESE_IMG from "@/images/japanese.png";
import KOREAN_IMG from "@/images/korean.png";
import FRENCH_IMG from "@/images/french.png";
import VIDEO_AUDIO_IMG from "@/images/video-audio-file-img.png";
import EDIT_CAPTIONS_SRT_FILES_IMG from "@/images/edit_captions_and_srt_files.png";
import RECORD_YOUR_OWN_VOICE_IMG from "@/images/record_your_own_voice.png";
import ABOUT_US_IMG from "@/images/aboutus.png";
import LOGO_QT_UPDATE from "@/images/logo-qt-update.svg";
import C_LOGO_IMG from "@/images/c_vector.svg";
import FACEBOOK_ICON from "@/images/facebook.png";
import TWITTER_ICON from "@/images/twitter.png";
import YOUTUBE_ICON from "@/images/youtube.png";
import LINKDIN_ICON from "@/images/linkdin.png";
import PEOPLE_PROFILE_1 from "@/images/people-profile.png"

import { ITitleDescription, IPricingPlan } from "./interfaces";
import { title } from "process";

export const COMMON = {
  companyName: "Quicktranslates",
  companyLogo: LOGO_QT_UPDATE,
};

export const PageLinks = {
  default: "/",
  home: "/home",
  signUp: "https://app.quicktranslates.com/sign-up",
  logIn: "https://app.quicktranslates.com/log-in",
  payment: "/payment",
  pricing: "/pricing",
  cancellation: "/cancellation",
  privacyPolicy: "/privacy-policy",
  pricingHome: "/home#pricingSection",
  getTranscription: "/get-transcription",
  termsAndConditions: "/terms-and-conditions",
  reactivateMembership: "/reactivate-membership",
};

export const Nav = {
  companyName: COMMON.companyName,
  navigationItems: "Navigation",
  servicesTitle: "Services",
  services: [
    {
      title: "Automated Transcription",
      link: PageLinks.logIn,
    },
    {
      title: "Human Transcription",
      link: PageLinks.logIn,
    },
  ],
  pricing: {
    title: "Pricing",
    link: PageLinks.pricing,
  },
  login: {
    title: "Log in",
    link: PageLinks.logIn,
  },
  signup: {
    title: "Sign up",
    link: PageLinks.signUp,
  },
};

export const Pricing: IPricingPlan = {
  heading: "Our pricing",
  tabTitle: "Quicktranslates | Pricing",
  pricingModals: [
    {
      icon: ICON_AUTOMATE_TRANSCRIPTION,
      title: "Automated Transcription",
      pricing: "$0.10 per minute of video",
      description:
        "Let our AI model transcribe your vid/audio and pay  by the minute . Guaranteed up to 97% accuracy ",
      benefits: [
        "1-10 min delivery time ",
        "No commitment, pay as you go",
        "Up to 97% accuracy",
        "24/7 customer support",
      ],
      ctaText: "Try Free now",
      isBestDeal: false,
      ctaLink: PageLinks.logIn,
      competitorPrice: "Competitor average price - $0.25 / minute of video",
    },
    {
      icon: ICON_MONTHLY_SUBSCRIPTION,
      title: "Unlimited transcription",
      pricing: "$9.99 per month",
      description:
        "Auto Transcribe your content as much as you want, anytime and anywhere. Recieve 10% discount on human transcription ",
      benefits: [
        "14 Day free trial",
        "Unlimited auto transcription",
        "10% discount on all transcriptions",
        "24/7 customer support",
      ],
      ctaText: "Try Free now",
      isBestDeal: true,
      ctaLink: PageLinks.logIn,
      competitorPrice: "Competitor average price - $29.99 / month",
    },
    {
      icon: ICON_HUMAN_TRANSCRIPTION,
      title: "Human Transcription",
      pricing: "$0.80 per minute",
      description:
        "Our accredited and tested transcriptionists will create professional transcripts for you with unparalleled accuracy. ",
      benefits: [
        "Proof checked",
        "1-2 day delivery time ",
        "No commitment, pay as you go",
        "99% accuracy Guaranteed",
      ],
      ctaText: "Get Started Now",
      isBestDeal: false,
      ctaLink: PageLinks.logIn,
      competitorPrice: "Competitor average price - $1.50 / minute of video",
    },
  ],
};

export const Footer = {
  companyName: COMMON.companyName,
  companyLogo: COMMON.companyLogo,
  companyDescription:
    `Get your audio and video files <br>transcribed by the largest marketplace <br>of experienced transcribers.`,
  company: {
   title: "Services",
    links: [
      {
        title: "Transcribe",
        link: "/about-us",
      },
      {
        title: "Auto Caption",
        link: "/about-us",
      },
      {
        title: "Voice to text",
        link: "/about-us",
      },
    ],
  },
  pricing: {
   title: "Pricing",
    links: [
      {
        title: "Pricing",
        link: "/about-us",
      },
    ],
  },
  help: {
    title: "Help",
    links: [
      {
        title: "Terms & Conditions",
        link: PageLinks.termsAndConditions,
      },
      {
        title: "Privacy Policy",
        link: PageLinks.privacyPolicy,
      },
    ],
  },
  copyrightSection: {
    copyright: {
      image: C_LOGO_IMG,
      title: "2024 Quicktranslates. All rights reserved.",
    },
    socialIcons: {
      images: [
        {
          icon: FACEBOOK_ICON,
        },
        {
          icon: TWITTER_ICON,
        },
        {
          icon: YOUTUBE_ICON,
        },
        {
          icon: LINKDIN_ICON,
        },
      ]
    }
  }
};

export const HomePage = {
  companyName: COMMON.companyName,
  companyLogo: LOGO_QT,
  hero: {
    // heading: `Get <span style="color: var(--blue);">Transcripts and Subtitles </span> In Minutes!`,
    heading: `Translation, Transcription and Captioning by <span style="color: var(--pink);">AI</span>`,
    description1:
      "Just upload video/audio file and create captions and transcripts in any language.",
    description2Heading: "Files accepted for transcription:",
    description2Description:
      "AAC, MP3, M4A, WAV, WMA, MOV, MPEG, MP4, WMV and Youtube URL",
    primaryCtaText: "Try Free Now",
    primaryCtaLink: PageLinks.signUp,
    image: [IMG_HERO, SIGNUP_TODAY_IMG],
  },

  process: {
    tag: "115+ languages",
    heading: `Translate videos and audio files <br> in virtually <span style="color: var(--pink);">any language</span>`,
    description:
      "Start creating your transcription in 3 easy steps. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non blandit tellus. Aenean fermentum pulvinar lorem sit amet tempor. Aenean vitae vulputate erat.",
    images:[
      {
        icon: LANGUAGE_IMG,
      },
      {
        icon: SPANISH_IMG,
      },
      {
        icon: ITALIAN_IMG,
      },
      {
        icon: GERMAN_IMG,
      },
      {
        icon: PORTUGUESE_IMG,
      },
      {
        icon: JAPANESE_IMG,
      },
      {
        icon: KOREAN_IMG,
      },
      {
        icon: FRENCH_IMG,
      },
    ],    
  },

  pricing: {
    tag: "Videos & Audios",
    heading: `Transcribe <span style="color: var(--pink);">videos</span><br> and <span style="color: var(--pink);">audio</span> file`,
    image: VIDEO_AUDIO_IMG,
  },

  accuracyFeatureMedia: {
    tag: "Ability to edit",
    heading: `<span style="color: var(--pink);">Edit</span>your captions <br>and srt files`,
    image: EDIT_CAPTIONS_SRT_FILES_IMG,
  },

  recordYourOwnVoice: {
    tag: "Voice recording",
    heading: `Record your own voice and get <br>a transcript on the spot!`,
    image: RECORD_YOUR_OWN_VOICE_IMG,
  },
  
  aboutus: {
    tag: "Testimonial",
    heading: `What people say <br>about us`,
    steps: [
      {
        icon: PEOPLE_PROFILE_1,
        name: "Fazal sharif ",
        owner: "Small Business Owner",
        description:
          'Amazing accuracy and speed! I use this platform for my podcast, and it’s a real time-saver. The transcriptions are nearly perfect, and the subtitle feature makes my content accessible to a wider audience. Highly recommend!',
      },
      {
        icon: PEOPLE_PROFILE_1,
        name: "Fazal 1 ",
        owner: "Small Business Owner",
        description:
          'Amazing accuracy and speed! I use this platform for my podcast, and it’s a real time-saver. The transcriptions are nearly perfect, and the subtitle feature makes my content accessible to a wider audience. Highly recommend!',
      },
      {
        icon: PEOPLE_PROFILE_1,
        name: "Fazal 2 ",
        owner: "Small Business Owner",
        description:
          'Amazing accuracy and speed! I use this platform for my podcast, and it’s a real time-saver. The transcriptions are nearly perfect, and the subtitle feature makes my content accessible to a wider audience. Highly recommend!',
      },
      {
        icon: PEOPLE_PROFILE_1,
        name: "Fazal 3 ",
        owner: "Small Business Owner",
        description:
          'Amazing accuracy and speed! I use this platform for my podcast, and it’s a real time-saver. The transcriptions are nearly perfect, and the subtitle feature makes my content accessible to a wider audience. Highly recommend!',
      },
    ],
  },
};

export const TermsAndConditions: ITitleDescription[] = [
  {
    title: "Introduction",
    description:
      "Welcome to our Quicktranslates. By accessing or using our services, you agree to be bound by these Terms and Conditions (“Terms”) and our Privacy Policy. If you do not agree to these Terms, you may not use our services.",
  },
  {
    title: "Description of Services",
    description:
      "Quicktranslates provides software-as-a-service (“SaaS”) products that enable users to perform certain functions. The specific features and functionality of our products may change from time to time, and we reserve the right to modify or discontinue any part of our services at any time without notice.",
  },
  {
    title: "User Accounts",
    description:
      "To use our services, you must create an account with us. You are responsible for maintaining the confidentiality of your account login credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other breach of security. We reserve the right to suspend or terminate your account at any time for any reason.",
  },
  {
    title: "Fees and Payments",
    description:
      "We may charge fees for the use of our services. All fees are non-refundable and subject to change at any time. You agree to pay all fees and charges associated with your use of our services in a timely manner.",
  },
  {
    title: "Intellectual Property",
    description:
      "Our services and all content and materials available through our services are protected by intellectual property laws. You may not use our services or any content or materials available through our services except as expressly authorized by us. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any content or materials available through our services.",
  },
  {
    title: "User Content",
    description:
      "Our services may allow you to upload, publish, or otherwise share content (“User Content”). You retain all rights in, and are solely responsible for, the User Content you upload, publish, or share. By uploading, publishing, or sharing User Content, you grant us a worldwide, non-exclusive, royalty-free, fully paid-up, transferable, sublicensable, perpetual, and irrevocable license to use, copy, modify, create derivative works from, distribute, display, and perform your User Content in any form or medium.",
  },
  {
    title: "Prohibited Conduct",
    description: `You may not use our services to:
    <br>- Violate any applicable laws, regulations, or third-party rights;
    <br>- Engage in any activity that is harmful, fraudulent, deceptive, or offensive
    <br>- Introduce any viruses, worms, or other harmful code;
    <br>- Interfere with the operation of our services or any user's enjoyment of our services;
    <br>- Attempt to gain unauthorized access to our services or any user's account; or
    <br>- Use our services for any purpose other than their intended purpose.`,
  },
  {
    title: "Disclaimer of Warranties",
    description:
      "Our services are provided “as is” and “as available” without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or free of viruses or other harmful code.",
  },
  {
    title: "Limitation of Liability",
    description:
      "To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use of our services or these Terms, even if we have been advised of the possibility of such damages.",
  },
  {
    title: "Indemnification",
    description: `You agree to indemnify and hold us and our affiliates, officers, directors, employees, and agents harmless from any and all claims, demands, losses, liabilities, and expenses (including attorneys' fees) arising out of or in connection with your use of our services, your User Content, or your violation of these Terms.',`,
  },
  {
    title: "Termination",
    description:
      "We may terminate these Terms and your access to our services at any time",
  },
];

export const PrivacyPolicy: ITitleDescription[] = [
  {
    title: "Collection of Personal Information",
    description:
      "We collect personal information when you create an account with us, use our services, or communicate with us. This information may include your name, email address, phone number, payment information, and other information that you provide to us.",
  },
  {
    title: "Use of Personal Information",
    description:
      "We use your personal information to provide and improve our services, to communicate with you, and to process your payments. We may also use your personal information for marketing purposes, such as sending you newsletters and promotional offers. You may opt out of receiving marketing emails at any time.",
  },
  {
    title: "Disclosure of Personal Information",
    description:
      "We may disclose your personal information to our third-party service providers, such as payment processors and hosting providers, who assist us in providing our services. We may also disclose your personal information if required by law or if we believe that such disclosure is necessary to protect our rights or to comply with a judicial proceeding or court order.",
  },
  {
    title: "Security of Personal Information",
    description:
      "We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee the absolute security of your personal information.",
  },
  {
    title: "Retention of Personal Information",
    description:
      "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required by law.",
  },
  {
    title: `Children's Privacy`,
    description:
      "Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13. If you are under the age of 13, please do not use our services or provide any personal information to us.",
  },
  {
    title: "Changes to this Privacy Policy",
    description:
      "We may update this Privacy Policy from time to time by posting a new version on our website. We will notify you of any material changes to this Privacy Policy by email or by posting a notice on our website.",
  },
  {
    title: "Contact Us",
    description:
      "If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at [insert contact information].",
  },
];
