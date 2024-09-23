export interface ITitleDescription {
  title: string;
  description: string;
}

export interface ISocial {
  imgSrc: any;
  link: string;
  altText: string;
}

export interface IValueProposition {
  imgSrc: any;
  altText: string;
  description: string;
}
export interface IUserInfo {
  email: string;
  lastName: string;
  password?: string;
  firstName: string;
  displayName: string;
  trialExpiryDate: any;
  isSubscribed: boolean;
  isTrialExpired: boolean;
  isTrialActivated: boolean;
  termsAndConditions: boolean;
  subscriptionExpiryDate: any;
  accountCreationDate: string;
}

export interface IPricingModal {
  icon: any;
  title: string;
  pricing: string;
  ctaText: string;
  ctaLink: string;
  benefits: string[];
  description: string;
  isBestDeal: boolean;
  competitorPrice: string;
}

export interface IPricingPlan {
  heading: string;
  tabTitle: string;
  pricingModals: IPricingModal[];
}
