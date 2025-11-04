export enum ClientType {
  SELLER = 'Seller',
  BUYER = 'Buyer',
  BOTH = 'Both',
}

export enum CommunicationMethod {
  EMAIL = 'Email',
  PHONE_CALL = 'Phone Call',
  TEXT = 'Text',
}

export enum LeadSourceType {
  SPHERE = 'Sphere',
  REFERRAL = 'Referral',
  ONLINE_LEAD = 'Online Lead',
  OPEN_HOUSE = 'Open House',
  SOCIAL_MEDIA = 'Social Media',
  OTHER = 'Other',
}

export enum SellerTimeFrame {
  UNDER_30_DAYS = '< 30 Days',
  ONE_TO_THREE_MONTHS = '1-3 Months',
  THREE_TO_SIX_MONTHS = '3-6 Months',
  OVER_SIX_MONTHS = '6+ Months',
  JUST_CURIOUS = 'Just Curious',
}

export enum StagingStatus {
  OCCUPIED = 'Occupied',
  VACANT = 'Vacant',
  NEEDS_CONSULTATION = 'Needs Consultation',
  NONE = 'None',
}

export enum PhotographyStatus {
  TO_BE_SCHEDULED = 'To Be Scheduled',
  SCHEDULED = 'Scheduled',
  USING_CLIENT_PHOTOS = 'Using Client Photos',
  NONE = 'None',
}

export enum BuyerTimeFrame {
  PRE_APPROVED = 'Pre-approved & Ready',
  ACTIVELY_LOOKING = 'Actively Looking (1-3 Mo)',
  CASUALLY_LOOKING = 'Casually Looking (3-6+ Mo)',
  JUST_STARTING = 'Just Starting',
}

export enum LocationType {
  LOCAL = 'Local',
  RELOCATING = 'Relocating',
}

export interface ClientInfo {
  name: string;
  email: string;
  phone: string;
  preferredMethod: CommunicationMethod | '';
}

export interface FormData {
  clientType: ClientType | '';
  client: ClientInfo;
  addCoClient: boolean;
  coClient: ClientInfo;
  leadSource: {
    sourceType: LeadSourceType | '';
    referringIndividual: string;
    referringBrokerage: string;
    referralFeePercentage: string;
    sendGift: boolean;
    referralGiftType: string;
  };
  sellerInfo: {
    timeFrame: SellerTimeFrame | '';
    stagingStatus: StagingStatus | '';
    estLiveDate: string;
    photography: string[];
    scheduledPhotographyDate: string;
    keyHomeFeatures: string;
    sqFt: string;
    propertyDocs: string[];
    propertyDocsOther: string;
    showingInstructions: string;
    rbfcuRebate: boolean;
    preferredTitleTeam: string;
    notes: string;
  };
  buyerInfo: {
    timeFrame: BuyerTimeFrame | '';
    locationType: LocationType | '';
    pricePoint: string;
    preferredArea: string;
    preferredCloseDate: string;
    lender: string;
    notes: string;
  };
}

export const PropertyDocsOptions = [
  "Seller's Disclosure",
  "Survey",
  "T-47",
  "HOA Docs",
  "MUD Info",
  "Septic Info",
  "Other",
];