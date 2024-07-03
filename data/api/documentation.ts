export type GetLoungesParams = {
  /**
   * Sort by attributes ascending (asc) or descending (desc)
   */
  sort?: string;
  /**
   * Return page/pageSize (default: true)
   */
  "pagination[withCount]"?: boolean;
  /**
   * Page number (default: 0)
   */
  "pagination[page]"?: number;
  /**
   * Page size (default: 25)
   */
  "pagination[pageSize]"?: number;
  /**
   * Offset value (default: 0)
   */
  "pagination[start]"?: number;
  /**
   * Number of entities to return (default: 25)
   */
  "pagination[limit]"?: number;
  /**
   * Fields to return (ex: title,author)
   */
  fields?: string;
  /**
   * Relations to return
   */
  populate?: string;
  /**
   * Filters to apply
   */
  filters?: { [key: string]: any };
  /**
   * Locale to apply
   */
  locale?: string;
};

export type GetDetrimentsParams = {
  /**
   * Sort by attributes ascending (asc) or descending (desc)
   */
  sort?: string;
  /**
   * Return page/pageSize (default: true)
   */
  "pagination[withCount]"?: boolean;
  /**
   * Page number (default: 0)
   */
  "pagination[page]"?: number;
  /**
   * Page size (default: 25)
   */
  "pagination[pageSize]"?: number;
  /**
   * Offset value (default: 0)
   */
  "pagination[start]"?: number;
  /**
   * Number of entities to return (default: 25)
   */
  "pagination[limit]"?: number;
  /**
   * Fields to return (ex: title,author)
   */
  fields?: string;
  /**
   * Relations to return
   */
  populate?: string;
  /**
   * Filters to apply
   */
  filters?: { [key: string]: any };
  /**
   * Locale to apply
   */
  locale?: string;
};

export type GetCardsParams = {
  /**
   * Sort by attributes ascending (asc) or descending (desc)
   */
  sort?: string;
  /**
   * Return page/pageSize (default: true)
   */
  "pagination[withCount]"?: boolean;
  /**
   * Page number (default: 0)
   */
  "pagination[page]"?: number;
  /**
   * Page size (default: 25)
   */
  "pagination[pageSize]"?: number;
  /**
   * Offset value (default: 0)
   */
  "pagination[start]"?: number;
  /**
   * Number of entities to return (default: 25)
   */
  "pagination[limit]"?: number;
  /**
   * Fields to return (ex: title,author)
   */
  fields?: string;
  /**
   * Relations to return
   */
  populate?: string;
  /**
   * Filters to apply
   */
  filters?: { [key: string]: any };
  /**
   * Locale to apply
   */
  locale?: string;
};

export type GetAmenitiesParams = {
  /**
   * Sort by attributes ascending (asc) or descending (desc)
   */
  sort?: string;
  /**
   * Return page/pageSize (default: true)
   */
  "pagination[withCount]"?: boolean;
  /**
   * Page number (default: 0)
   */
  "pagination[page]"?: number;
  /**
   * Page size (default: 25)
   */
  "pagination[pageSize]"?: number;
  /**
   * Offset value (default: 0)
   */
  "pagination[start]"?: number;
  /**
   * Number of entities to return (default: 25)
   */
  "pagination[limit]"?: number;
  /**
   * Fields to return (ex: title,author)
   */
  fields?: string;
  /**
   * Relations to return
   */
  populate?: string;
  /**
   * Filters to apply
   */
  filters?: { [key: string]: any };
  /**
   * Locale to apply
   */
  locale?: string;
};

export type GetAirportsParams = {
  /**
   * Sort by attributes ascending (asc) or descending (desc)
   */
  sort?: string;
  /**
   * Return page/pageSize (default: true)
   */
  "pagination[withCount]"?: boolean;
  /**
   * Page number (default: 0)
   */
  "pagination[page]"?: number;
  /**
   * Page size (default: 25)
   */
  "pagination[pageSize]"?: number;
  /**
   * Offset value (default: 0)
   */
  "pagination[start]"?: number;
  /**
   * Number of entities to return (default: 25)
   */
  "pagination[limit]"?: number;
  /**
   * Fields to return (ex: title,author)
   */
  fields?: string;
  /**
   * Relations to return
   */
  populate?: string;
  /**
   * Filters to apply
   */
  filters?: { [key: string]: any };
  /**
   * Locale to apply
   */
  locale?: string;
};

export type LoungeResponseMeta = { [key: string]: any };

export interface LoungeResponseDataObject {
  attributes?: Lounge;
  id?: number;
}

export interface LoungeResponse {
  data?: LoungeResponseDataObject;
  meta?: LoungeResponseMeta;
}

export type LoungeUpdatedByDataAttributes = { [key: string]: any };

export type LoungeUpdatedByData = {
  attributes?: LoungeUpdatedByDataAttributes;
  id?: number;
};

export type LoungeUpdatedBy = {
  data?: LoungeUpdatedByData;
};

export type LoungeLocalizations = {
  data?: LoungeListResponseDataItemLocalized[];
};

export type LoungeDetrimentsDataItemAttributes = { [key: string]: any };

export type LoungeDetrimentsDataItem = {
  attributes?: LoungeDetrimentsDataItemAttributes;
  id?: number;
};

export type LoungeDetriments = {
  data?: LoungeDetrimentsDataItem[];
};

export type LoungeCreatedByDataAttributes = { [key: string]: any };

export type LoungeCreatedByData = {
  attributes?: LoungeCreatedByDataAttributes;
  id?: number;
};

export type LoungeCreatedBy = {
  data?: LoungeCreatedByData;
};

export type LoungeCardDataAttributes = { [key: string]: any };

export type LoungeCardData = {
  attributes?: LoungeCardDataAttributes;
  id?: number;
};

export type LoungeCard = {
  data?: LoungeCardData;
};

export interface Lounge {
  airport?: LoungeAirport;
  amenities?: LoungeAmenities;
  card?: LoungeCard;
  createdAt?: string;
  createdBy?: LoungeCreatedBy;
  description: string;
  detriments?: LoungeDetriments;
  directions?: string;
  featured?: boolean;
  googlePlaceId: string;
  guest?: string;
  locale?: string;
  localizations?: LoungeLocalizations;
  location?: string;
  moreInfo?: string;
  name?: string;
  notes?: string;
  priorityPass?: boolean;
  slug?: string;
  updatedAt?: string;
  updatedBy?: LoungeUpdatedBy;
}

export type LoungeAmenitiesDataItemAttributes = { [key: string]: any };

export type LoungeAmenitiesDataItem = {
  attributes?: LoungeAmenitiesDataItemAttributes;
  id?: number;
};

export type LoungeAmenities = {
  data?: LoungeAmenitiesDataItem[];
};

export type LoungeAirport = {
  data?: LoungeAirportData;
};

export type LoungeAirportDataAttributesUpdatedByDataAttributes = {
  [key: string]: any;
};

export type LoungeAirportDataAttributesUpdatedByData = {
  attributes?: LoungeAirportDataAttributesUpdatedByDataAttributes;
  id?: number;
};

export type LoungeAirportDataAttributesUpdatedBy = {
  data?: LoungeAirportDataAttributesUpdatedByData;
};

export type LoungeAirportDataAttributesState =
  (typeof LoungeAirportDataAttributesState)[keyof typeof LoungeAirportDataAttributesState];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LoungeAirportDataAttributesState = {
  AL: "AL",
  AK: "AK",
  AZ: "AZ",
  AR: "AR",
  CA: "CA",
  CO: "CO",
  CT: "CT",
  DE: "DE",
  FL: "FL",
  GA: "GA",
  HI: "HI",
  ID: "ID",
  IL: "IL",
  IN: "IN",
  IA: "IA",
  KS: "KS",
  KY: "KY",
  LA: "LA",
  ME: "ME",
  MD: "MD",
  MA: "MA",
  MI: "MI",
  MN: "MN",
  MS: "MS",
  MO: "MO",
  MT: "MT",
  NE: "NE",
  NV: "NV",
  NH: "NH",
  NJ: "NJ",
  NM: "NM",
  NY: "NY",
  NC: "NC",
  ND: "ND",
  OH: "OH",
  OK: "OK",
  OR: "OR",
  PA: "PA",
  RI: "RI",
  SC: "SC",
  SD: "SD",
  TN: "TN",
  TX: "TX",
  UT: "UT",
  VT: "VT",
  VA: "VA",
  WA: "WA",
  WV: "WV",
  WI: "WI",
  WY: "WY",
} as const;

export type LoungeAirportDataAttributesLounges = {
  data?: LoungeAirportDataAttributesLoungesDataItem[];
};

export type LoungeAirportDataAttributes = {
  accessDetails?: string;
  city?: string;
  code?: string;
  country?: LoungeAirportDataAttributesCountry;
  createdAt?: string;
  createdBy?: LoungeAirportDataAttributesCreatedBy;
  dayPass?: string;
  lounges?: LoungeAirportDataAttributesLounges;
  name?: string;
  state?: LoungeAirportDataAttributesState;
  updatedAt?: string;
  updatedBy?: LoungeAirportDataAttributesUpdatedBy;
};

export type LoungeAirportData = {
  attributes?: LoungeAirportDataAttributes;
  id?: number;
};

export type LoungeAirportDataAttributesLoungesDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesUpdatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesUpdatedBy = {
  data?: LoungeAirportDataAttributesLoungesDataItemAttributesUpdatedByData;
};

export type LoungeAirportDataAttributesLoungesDataItemAttributesLocalizations =
  {
    data?: unknown[];
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributes =
  {
    createdAt?: string;
    createdBy?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesCreatedBy;
    icon?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIcon;
    name?: string;
    updatedAt?: string;
    updatedBy?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesUpdatedBy;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItem =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetriments = {
  data?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItem[];
};

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenities = {
  data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItem[];
};

export type LoungeAirportDataAttributesLoungesDataItemAttributes = {
  airport?: LoungeAirportDataAttributesLoungesDataItemAttributesAirport;
  amenities?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenities;
  card?: LoungeAirportDataAttributesLoungesDataItemAttributesCard;
  createdAt?: string;
  createdBy?: LoungeAirportDataAttributesLoungesDataItemAttributesCreatedBy;
  description?: string;
  detriments?: LoungeAirportDataAttributesLoungesDataItemAttributesDetriments;
  directions?: string;
  featured?: boolean;
  googlePlaceId?: string;
  guest?: string;
  locale?: string;
  localizations?: LoungeAirportDataAttributesLoungesDataItemAttributesLocalizations;
  location?: string;
  moreInfo?: string;
  name?: string;
  notes?: string;
  priorityPass?: boolean;
  slug?: string;
  updatedAt?: string;
  updatedBy?: LoungeAirportDataAttributesLoungesDataItemAttributesUpdatedBy;
};

export type LoungeAirportDataAttributesLoungesDataItem = {
  attributes?: LoungeAirportDataAttributesLoungesDataItemAttributes;
  id?: number;
};

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesUpdatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesUpdatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesUpdatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributes =
  {
    alternativeText?: string;
    caption?: string;
    createdAt?: string;
    createdBy?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesCreatedBy;
    ext?: string;
    folder?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesFolder;
    folderPath?: string;
    formats?: unknown;
    hash?: string;
    height?: number;
    mime?: string;
    name?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: unknown;
    related?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesRelated;
    size?: number;
    updatedAt?: string;
    updatedBy?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesUpdatedBy;
    url?: string;
    width?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIcon =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesUpdatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesUpdatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesUpdatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesRelatedDataItemAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesRelatedDataItem =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesRelatedDataItemAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesRelated =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesRelatedDataItem[];
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesFolderDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesFolderData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesFolderDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesFolder =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesFolderData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesCreatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesCreatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesCreatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesCreatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesCreatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesCreatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesDetrimentsDataItemAttributesCreatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCreatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCreatedBy = {
  data?: LoungeAirportDataAttributesLoungesDataItemAttributesCreatedByData;
};

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardData = {
  attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributes;
  id?: number;
};

export type LoungeAirportDataAttributesLoungesDataItemAttributesCard = {
  data?: LoungeAirportDataAttributesLoungesDataItemAttributesCardData;
};

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesUpdatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesUpdatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesUpdatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesProcessor =
  (typeof LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesProcessor)[keyof typeof LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesProcessor];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesProcessor =
  {
    Visa: "Visa",
    Amex: "Amex",
    Mastercard: "Mastercard",
  } as const;

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesPersonalOrBiz =
  (typeof LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesPersonalOrBiz)[keyof typeof LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesPersonalOrBiz];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesPersonalOrBiz =
  {
    Personal: "Personal",
    Business: "Business",
  } as const;

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributes =
  {
    annualFee?: number;
    bank?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesBank;
    createdAt?: string;
    createdBy?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesCreatedBy;
    icon?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIcon;
    lounges?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesLounges;
    name?: string;
    personalOrBiz?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesPersonalOrBiz;
    processor?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesProcessor;
    updatedAt?: string;
    updatedBy?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesUpdatedBy;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesLoungesDataItemAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesLoungesDataItem =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesLoungesDataItemAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesLounges =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesLoungesDataItem[];
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIcon =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesUpdatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesUpdatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesUpdatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesRelatedDataItemAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesRelatedDataItem =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesRelatedDataItemAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesRelated =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesRelatedDataItem[];
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesFolderDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesFolderData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesFolderDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesFolder =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesFolderData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributes =
  {
    alternativeText?: string;
    caption?: string;
    createdAt?: string;
    createdBy?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesCreatedBy;
    ext?: string;
    folder?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesFolder;
    folderPath?: string;
    formats?: unknown;
    hash?: string;
    height?: number;
    mime?: string;
    name?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: unknown;
    related?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesRelated;
    size?: number;
    updatedAt?: string;
    updatedBy?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesUpdatedBy;
    url?: string;
    width?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesCreatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesCreatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesCreatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesIconDataAttributesCreatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesCreatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesCreatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesCreatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesCreatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesBank =
  (typeof LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesBank)[keyof typeof LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesBank];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LoungeAirportDataAttributesLoungesDataItemAttributesCardDataAttributesBank =
  {
    Chase: "Chase",
    Amex: "Amex",
    Barclays: "Barclays",
    Citi: "Citi",
    Bank_of_America: "Bank of America",
    Capital_One: "Capital One",
    Wells_Fargo: "Wells Fargo",
  } as const;

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesUpdatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesUpdatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesUpdatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIcon =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributes =
  {
    createdAt?: string;
    createdBy?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesCreatedBy;
    icon?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIcon;
    name?: string;
    updatedAt?: string;
    updatedBy?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesUpdatedBy;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItem =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesUpdatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesUpdatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesUpdatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributes =
  {
    alternativeText?: string;
    caption?: string;
    createdAt?: string;
    createdBy?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesCreatedBy;
    ext?: string;
    folder?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolder;
    folderPath?: string;
    formats?: unknown;
    hash?: string;
    height?: number;
    mime?: string;
    name?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: unknown;
    related?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesRelated;
    size?: number;
    updatedAt?: string;
    updatedBy?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesUpdatedBy;
    url?: string;
    width?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesRelatedDataItemAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesRelatedDataItem =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesRelatedDataItemAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesRelated =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesRelatedDataItem[];
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributes =
  {
    children?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesChildren;
    createdAt?: string;
    createdBy?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesCreatedBy;
    files?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFiles;
    name?: string;
    parent?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesParent;
    path?: string;
    pathId?: number;
    updatedAt?: string;
    updatedBy?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesUpdatedBy;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolder =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesUpdatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesUpdatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesUpdatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesParentDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesParentData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesParentDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesParent =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesParentData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFiles =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItem[];
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItemAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItem =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItemAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelated =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItem[];
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolder =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributes =
  {
    alternativeText?: string;
    caption?: string;
    createdAt?: string;
    createdBy?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedBy;
    ext?: string;
    folder?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolder;
    folderPath?: string;
    formats?: unknown;
    hash?: string;
    height?: number;
    mime?: string;
    name?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: unknown;
    related?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelated;
    size?: number;
    updatedAt?: string;
    updatedBy?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedBy;
    url?: string;
    width?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItem =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributes =
  {
    blocked?: boolean;
    createdAt?: string;
    createdBy?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy;
    email?: string;
    firstname?: string;
    isActive?: boolean;
    lastname?: string;
    preferedLanguage?: string;
    registrationToken?: string;
    resetPasswordToken?: string;
    roles?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles;
    updatedAt?: string;
    updatedBy?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy;
    username?: string;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItemAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItem =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItemAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsers =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItem[];
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributes =
  {
    code?: string;
    createdAt?: string;
    createdBy?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy;
    description?: string;
    name?: string;
    permissions?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions;
    updatedAt?: string;
    updatedBy?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy;
    users?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsers;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItem =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItem[];
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItem =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItem[];
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributes =
  {
    action?: string;
    actionParameters?: unknown;
    conditions?: unknown;
    createdAt?: string;
    createdBy?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy;
    properties?: unknown;
    role?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole;
    subject?: string;
    updatedAt?: string;
    updatedBy?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesCreatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesCreatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesCreatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesCreatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesChildrenDataItemAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesChildrenDataItem =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesChildrenDataItemAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesChildren =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesChildrenDataItem[];
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesCreatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesCreatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesCreatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesCreatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesCreatedByData =
  {
    attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesCreatedBy =
  {
    data?: LoungeAirportDataAttributesLoungesDataItemAttributesAmenitiesDataItemAttributesCreatedByData;
  };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAirportDataAttributes =
  { [key: string]: any };

export type LoungeAirportDataAttributesLoungesDataItemAttributesAirportData = {
  attributes?: LoungeAirportDataAttributesLoungesDataItemAttributesAirportDataAttributes;
  id?: number;
};

export type LoungeAirportDataAttributesLoungesDataItemAttributesAirport = {
  data?: LoungeAirportDataAttributesLoungesDataItemAttributesAirportData;
};

export type LoungeAirportDataAttributesCreatedByDataAttributes = {
  [key: string]: any;
};

export type LoungeAirportDataAttributesCreatedByData = {
  attributes?: LoungeAirportDataAttributesCreatedByDataAttributes;
  id?: number;
};

export type LoungeAirportDataAttributesCreatedBy = {
  data?: LoungeAirportDataAttributesCreatedByData;
};

export type LoungeAirportDataAttributesCountry =
  (typeof LoungeAirportDataAttributesCountry)[keyof typeof LoungeAirportDataAttributesCountry];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LoungeAirportDataAttributesCountry = {
  Argentina: "Argentina",
  Australia: "Australia",
  Austria: "Austria",
  Bahamas: "Bahamas",
  Bahrain: "Bahrain",
  Bangladesh: "Bangladesh",
  Belgium: "Belgium",
  Belize: "Belize",
  Brazil: "Brazil",
  Bulgaria: "Bulgaria",
  Cambodia: "Cambodia",
  Canada: "Canada",
  Chile: "Chile",
  China: "China",
  Colombia: "Colombia",
  Costa_Rica: "Costa Rica",
  Croatia: "Croatia",
  Cuba: "Cuba",
  Cyprus: "Cyprus",
  Czech_Republic: "Czech Republic",
  Denmark: "Denmark",
  Dominican_Republic: "Dominican Republic",
  Ecuador: "Ecuador",
  Egypt: "Egypt",
  El_Salvador: "El Salvador",
  Estonia: "Estonia",
  Fiji: "Fiji",
  Finland: "Finland",
  France: "France",
  Germany: "Germany",
  Greece: "Greece",
  Guatemala: "Guatemala",
  Honduras: "Honduras",
  Hungary: "Hungary",
  Iceland: "Iceland",
  India: "India",
  Indonesia: "Indonesia",
  Ireland: "Ireland",
  Israel: "Israel",
  Italy: "Italy",
  Jamaica: "Jamaica",
  Japan: "Japan",
  Jordan: "Jordan",
  Kenya: "Kenya",
  Kuwait: "Kuwait",
  Latvia: "Latvia",
  Lebanon: "Lebanon",
  Lithuania: "Lithuania",
  Luxembourg: "Luxembourg",
  Malaysia: "Malaysia",
  Malta: "Malta",
  Mauritius: "Mauritius",
  Mexico: "Mexico",
  Monaco: "Monaco",
  Montenegro: "Montenegro",
  Morocco: "Morocco",
  Myanmar: "Myanmar",
  Nepal: "Nepal",
  Netherlands: "Netherlands",
  New_Zealand: "New Zealand",
  Nicaragua: "Nicaragua",
  Nigeria: "Nigeria",
  Norway: "Norway",
  Oman: "Oman",
  Pakistan: "Pakistan",
  Panama: "Panama",
  Paraguay: "Paraguay",
  Peru: "Peru",
  Philippines: "Philippines",
  Poland: "Poland",
  Portugal: "Portugal",
  Qatar: "Qatar",
  Romania: "Romania",
  Russia: "Russia",
  Saint_Kitts_and_Nevis: "Saint Kitts and Nevis",
  Saint_Lucia: "Saint Lucia",
  Saudi_Arabia: "Saudi Arabia",
  Serbia: "Serbia",
  Singapore: "Singapore",
  Slovakia: "Slovakia",
  Slovenia: "Slovenia",
  South_Africa: "South Africa",
  South_Korea: "South Korea",
  Spain: "Spain",
  Sri_Lanka: "Sri Lanka",
  Sweden: "Sweden",
  Switzerland: "Switzerland",
  Taiwan: "Taiwan",
  Tanzania: "Tanzania",
  Thailand: "Thailand",
  Trinidad_and_Tobago: "Trinidad and Tobago",
  Turkey: "Turkey",
  Uganda: "Uganda",
  Ukraine: "Ukraine",
  United_Arab_Emirates: "United Arab Emirates",
  United_Kingdom: "United Kingdom",
  United_States: "United States",
  Uruguay: "Uruguay",
  Venezuela: "Venezuela",
  Vietnam: "Vietnam",
  Zambia: "Zambia",
  Zimbabwe: "Zimbabwe",
} as const;

export type LoungeListResponseMetaPagination = {
  page?: number;
  /** @maximum 1 */
  pageCount?: number;
  /** @minimum 25 */
  pageSize?: number;
  total?: number;
};

export type LoungeListResponseMeta = {
  pagination?: LoungeListResponseMetaPagination;
};

export interface LoungeListResponseDataItem {
  attributes?: Lounge;
  id?: number;
}

export interface LoungeListResponse {
  data?: LoungeListResponseDataItem[];
  meta?: LoungeListResponseMeta;
}

export type LoungeLocalizationListResponseMetaPagination = {
  page?: number;
  /** @maximum 1 */
  pageCount?: number;
  /** @minimum 25 */
  pageSize?: number;
  total?: number;
};

export type LoungeLocalizationListResponseMeta = {
  pagination?: LoungeLocalizationListResponseMetaPagination;
};

export interface LoungeListResponseDataItemLocalized {
  attributes?: Lounge;
  id?: number;
}

export interface LoungeLocalizationListResponse {
  data?: LoungeListResponseDataItemLocalized[];
  meta?: LoungeLocalizationListResponseMeta;
}

export type LoungeLocalizationResponseMeta = { [key: string]: any };

export interface LoungeResponseDataObjectLocalized {
  attributes?: Lounge;
  id?: number;
}

export interface LoungeLocalizationResponse {
  data?: LoungeResponseDataObjectLocalized;
  meta?: LoungeLocalizationResponseMeta;
}

export interface LoungeRequest {
  data: LoungeRequestData;
}

export type LoungeRequestDataDetrimentsItem = number | string;

export type LoungeRequestDataCard = number | string;

export type LoungeRequestDataAmenitiesItem = number | string;

export type LoungeRequestDataAirport = number | string;

export type LoungeRequestData = {
  airport?: LoungeRequestDataAirport;
  amenities?: LoungeRequestDataAmenitiesItem[];
  card?: LoungeRequestDataCard;
  description: string;
  detriments?: LoungeRequestDataDetrimentsItem[];
  directions?: string;
  featured?: boolean;
  googlePlaceId: string;
  guest?: string;
  locale?: string;
  location?: string;
  moreInfo?: string;
  name?: string;
  notes?: string;
  priorityPass?: boolean;
  slug?: string;
};

export type LoungeLocalizationRequestDetrimentsItem = number | string;

export type LoungeLocalizationRequestCard = number | string;

export type LoungeLocalizationRequestAmenitiesItem = number | string;

export type LoungeLocalizationRequestAirport = number | string;

export interface LoungeLocalizationRequest {
  airport?: LoungeLocalizationRequestAirport;
  amenities?: LoungeLocalizationRequestAmenitiesItem[];
  card?: LoungeLocalizationRequestCard;
  description: string;
  detriments?: LoungeLocalizationRequestDetrimentsItem[];
  directions?: string;
  featured?: boolean;
  googlePlaceId: string;
  guest?: string;
  locale: string;
  location?: string;
  moreInfo?: string;
  name?: string;
  notes?: string;
  priorityPass?: boolean;
  slug?: string;
}

export type DetrimentResponseMeta = { [key: string]: any };

export interface Detriment {
  createdAt?: string;
  createdBy?: DetrimentCreatedBy;
  icon?: DetrimentIcon;
  name?: string;
  updatedAt?: string;
  updatedBy?: DetrimentUpdatedBy;
}

export interface DetrimentResponseDataObject {
  attributes?: Detriment;
  id?: number;
}

export interface DetrimentResponse {
  data?: DetrimentResponseDataObject;
  meta?: DetrimentResponseMeta;
}

export type DetrimentUpdatedByDataAttributes = { [key: string]: any };

export type DetrimentUpdatedByData = {
  attributes?: DetrimentUpdatedByDataAttributes;
  id?: number;
};

export type DetrimentUpdatedBy = {
  data?: DetrimentUpdatedByData;
};

export type DetrimentIconDataAttributes = {
  alternativeText?: string;
  caption?: string;
  createdAt?: string;
  createdBy?: DetrimentIconDataAttributesCreatedBy;
  ext?: string;
  folder?: DetrimentIconDataAttributesFolder;
  folderPath?: string;
  formats?: unknown;
  hash?: string;
  height?: number;
  mime?: string;
  name?: string;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: unknown;
  related?: DetrimentIconDataAttributesRelated;
  size?: number;
  updatedAt?: string;
  updatedBy?: DetrimentIconDataAttributesUpdatedBy;
  url?: string;
  width?: number;
};

export type DetrimentIconData = {
  attributes?: DetrimentIconDataAttributes;
  id?: number;
};

export type DetrimentIcon = {
  data?: DetrimentIconData;
};

export type DetrimentIconDataAttributesUpdatedByDataAttributes = {
  [key: string]: any;
};

export type DetrimentIconDataAttributesUpdatedByData = {
  attributes?: DetrimentIconDataAttributesUpdatedByDataAttributes;
  id?: number;
};

export type DetrimentIconDataAttributesUpdatedBy = {
  data?: DetrimentIconDataAttributesUpdatedByData;
};

export type DetrimentIconDataAttributesRelatedDataItemAttributes = {
  [key: string]: any;
};

export type DetrimentIconDataAttributesRelatedDataItem = {
  attributes?: DetrimentIconDataAttributesRelatedDataItemAttributes;
  id?: number;
};

export type DetrimentIconDataAttributesRelated = {
  data?: DetrimentIconDataAttributesRelatedDataItem[];
};

export type DetrimentIconDataAttributesFolderDataAttributes = {
  children?: DetrimentIconDataAttributesFolderDataAttributesChildren;
  createdAt?: string;
  createdBy?: DetrimentIconDataAttributesFolderDataAttributesCreatedBy;
  files?: DetrimentIconDataAttributesFolderDataAttributesFiles;
  name?: string;
  parent?: DetrimentIconDataAttributesFolderDataAttributesParent;
  path?: string;
  pathId?: number;
  updatedAt?: string;
  updatedBy?: DetrimentIconDataAttributesFolderDataAttributesUpdatedBy;
};

export type DetrimentIconDataAttributesFolderData = {
  attributes?: DetrimentIconDataAttributesFolderDataAttributes;
  id?: number;
};

export type DetrimentIconDataAttributesFolder = {
  data?: DetrimentIconDataAttributesFolderData;
};

export type DetrimentIconDataAttributesFolderDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type DetrimentIconDataAttributesFolderDataAttributesUpdatedByData = {
  attributes?: DetrimentIconDataAttributesFolderDataAttributesUpdatedByDataAttributes;
  id?: number;
};

export type DetrimentIconDataAttributesFolderDataAttributesUpdatedBy = {
  data?: DetrimentIconDataAttributesFolderDataAttributesUpdatedByData;
};

export type DetrimentIconDataAttributesFolderDataAttributesParentDataAttributes =
  { [key: string]: any };

export type DetrimentIconDataAttributesFolderDataAttributesParentData = {
  attributes?: DetrimentIconDataAttributesFolderDataAttributesParentDataAttributes;
  id?: number;
};

export type DetrimentIconDataAttributesFolderDataAttributesParent = {
  data?: DetrimentIconDataAttributesFolderDataAttributesParentData;
};

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributes =
  {
    alternativeText?: string;
    caption?: string;
    createdAt?: string;
    createdBy?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedBy;
    ext?: string;
    folder?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolder;
    folderPath?: string;
    formats?: unknown;
    hash?: string;
    height?: number;
    mime?: string;
    name?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: unknown;
    related?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelated;
    size?: number;
    updatedAt?: string;
    updatedBy?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedBy;
    url?: string;
    width?: number;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItem = {
  attributes?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributes;
  id?: number;
};

export type DetrimentIconDataAttributesFolderDataAttributesFiles = {
  data?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItem[];
};

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByData =
  {
    attributes?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedBy =
  {
    data?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByData;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItemAttributes =
  { [key: string]: any };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItem =
  {
    attributes?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItemAttributes;
    id?: number;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelated =
  {
    data?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItem[];
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderDataAttributes =
  { [key: string]: any };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderData =
  {
    attributes?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderDataAttributes;
    id?: number;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolder =
  {
    data?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderData;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedBy =
  {
    data?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByData;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedByData =
  {
    attributes?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy =
  {
    data?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedByData;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItem =
  {
    attributes?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributes;
    id?: number;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles =
  {
    data?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItem[];
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributes =
  {
    blocked?: boolean;
    createdAt?: string;
    createdBy?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy;
    email?: string;
    firstname?: string;
    isActive?: boolean;
    lastname?: string;
    preferedLanguage?: string;
    registrationToken?: string;
    resetPasswordToken?: string;
    roles?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles;
    updatedAt?: string;
    updatedBy?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy;
    username?: string;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByData =
  {
    attributes?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItemAttributes =
  { [key: string]: any };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItem =
  {
    attributes?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItemAttributes;
    id?: number;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsers =
  {
    data?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItem[];
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributes =
  {
    code?: string;
    createdAt?: string;
    createdBy?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy;
    description?: string;
    name?: string;
    permissions?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions;
    updatedAt?: string;
    updatedBy?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy;
    users?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsers;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByData =
  {
    attributes?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy =
  {
    data?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByData;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributes =
  {
    action?: string;
    actionParameters?: unknown;
    conditions?: unknown;
    createdAt?: string;
    createdBy?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy;
    properties?: unknown;
    role?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole;
    subject?: string;
    updatedAt?: string;
    updatedBy?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItem =
  {
    attributes?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributes;
    id?: number;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions =
  {
    data?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItem[];
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByData =
  {
    attributes?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy =
  {
    data?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByData;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleDataAttributes =
  { [key: string]: any };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleData =
  {
    attributes?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleDataAttributes;
    id?: number;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole =
  {
    data?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleData;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByData =
  {
    attributes?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy =
  {
    data?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByData;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByData =
  {
    attributes?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy =
  {
    data?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByData;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedByData =
  {
    attributes?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedByDataAttributes;
    id?: number;
  };

export type DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy =
  {
    data?: DetrimentIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedByData;
  };

export type DetrimentIconDataAttributesFolderDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type DetrimentIconDataAttributesFolderDataAttributesCreatedByData = {
  attributes?: DetrimentIconDataAttributesFolderDataAttributesCreatedByDataAttributes;
  id?: number;
};

export type DetrimentIconDataAttributesFolderDataAttributesCreatedBy = {
  data?: DetrimentIconDataAttributesFolderDataAttributesCreatedByData;
};

export type DetrimentIconDataAttributesFolderDataAttributesChildrenDataItemAttributes =
  { [key: string]: any };

export type DetrimentIconDataAttributesFolderDataAttributesChildrenDataItem = {
  attributes?: DetrimentIconDataAttributesFolderDataAttributesChildrenDataItemAttributes;
  id?: number;
};

export type DetrimentIconDataAttributesFolderDataAttributesChildren = {
  data?: DetrimentIconDataAttributesFolderDataAttributesChildrenDataItem[];
};

export type DetrimentIconDataAttributesCreatedByDataAttributes = {
  [key: string]: any;
};

export type DetrimentIconDataAttributesCreatedByData = {
  attributes?: DetrimentIconDataAttributesCreatedByDataAttributes;
  id?: number;
};

export type DetrimentIconDataAttributesCreatedBy = {
  data?: DetrimentIconDataAttributesCreatedByData;
};

export type DetrimentCreatedByDataAttributes = { [key: string]: any };

export type DetrimentCreatedByData = {
  attributes?: DetrimentCreatedByDataAttributes;
  id?: number;
};

export type DetrimentCreatedBy = {
  data?: DetrimentCreatedByData;
};

export type DetrimentListResponseMetaPagination = {
  page?: number;
  /** @maximum 1 */
  pageCount?: number;
  /** @minimum 25 */
  pageSize?: number;
  total?: number;
};

export type DetrimentListResponseMeta = {
  pagination?: DetrimentListResponseMetaPagination;
};

export interface DetrimentListResponseDataItem {
  attributes?: Detriment;
  id?: number;
}

export interface DetrimentListResponse {
  data?: DetrimentListResponseDataItem[];
  meta?: DetrimentListResponseMeta;
}

export type DetrimentRequestDataIcon = number | string;

export type DetrimentRequestData = {
  icon?: DetrimentRequestDataIcon;
  name?: string;
};

export interface DetrimentRequest {
  data: DetrimentRequestData;
}

export type CardResponseMeta = { [key: string]: any };

export interface CardResponseDataObject {
  attributes?: Card;
  id?: number;
}

export interface CardResponse {
  data?: CardResponseDataObject;
  meta?: CardResponseMeta;
}

export type CardUpdatedByDataAttributes = { [key: string]: any };

export type CardUpdatedByData = {
  attributes?: CardUpdatedByDataAttributes;
  id?: number;
};

export type CardUpdatedBy = {
  data?: CardUpdatedByData;
};

export type CardProcessor = (typeof CardProcessor)[keyof typeof CardProcessor];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CardProcessor = {
  Visa: "Visa",
  Amex: "Amex",
  Mastercard: "Mastercard",
} as const;

export type CardPersonalOrBiz =
  (typeof CardPersonalOrBiz)[keyof typeof CardPersonalOrBiz];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CardPersonalOrBiz = {
  Personal: "Personal",
  Business: "Business",
} as const;

export type CardLoungesDataItem = {
  attributes?: CardLoungesDataItemAttributes;
  id?: number;
};

export type CardLounges = {
  data?: CardLoungesDataItem[];
};

export interface Card {
  annualFee?: number;
  bank?: CardBank;
  createdAt?: string;
  createdBy?: CardCreatedBy;
  icon?: CardIcon;
  lounges?: CardLounges;
  name?: string;
  personalOrBiz?: CardPersonalOrBiz;
  processor?: CardProcessor;
  updatedAt?: string;
  updatedBy?: CardUpdatedBy;
}

export type CardLoungesDataItemAttributesUpdatedByDataAttributes = {
  [key: string]: any;
};

export type CardLoungesDataItemAttributesUpdatedByData = {
  attributes?: CardLoungesDataItemAttributesUpdatedByDataAttributes;
  id?: number;
};

export type CardLoungesDataItemAttributesUpdatedBy = {
  data?: CardLoungesDataItemAttributesUpdatedByData;
};

export type CardLoungesDataItemAttributesLocalizations = {
  data?: unknown[];
};

export type CardLoungesDataItemAttributes = {
  airport?: CardLoungesDataItemAttributesAirport;
  amenities?: CardLoungesDataItemAttributesAmenities;
  card?: CardLoungesDataItemAttributesCard;
  createdAt?: string;
  createdBy?: CardLoungesDataItemAttributesCreatedBy;
  description?: string;
  detriments?: CardLoungesDataItemAttributesDetriments;
  directions?: string;
  featured?: boolean;
  googlePlaceId?: string;
  guest?: string;
  locale?: string;
  localizations?: CardLoungesDataItemAttributesLocalizations;
  location?: string;
  moreInfo?: string;
  name?: string;
  notes?: string;
  priorityPass?: boolean;
  slug?: string;
  updatedAt?: string;
  updatedBy?: CardLoungesDataItemAttributesUpdatedBy;
};

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesUpdatedByData =
  {
    attributes?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesUpdatedBy =
  {
    data?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesUpdatedByData;
  };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconData =
  {
    attributes?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributes;
    id?: number;
  };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesIcon = {
  data?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconData;
};

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributes = {
  createdAt?: string;
  createdBy?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesCreatedBy;
  icon?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesIcon;
  name?: string;
  updatedAt?: string;
  updatedBy?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesUpdatedBy;
};

export type CardLoungesDataItemAttributesDetrimentsDataItem = {
  attributes?: CardLoungesDataItemAttributesDetrimentsDataItemAttributes;
  id?: number;
};

export type CardLoungesDataItemAttributesDetriments = {
  data?: CardLoungesDataItemAttributesDetrimentsDataItem[];
};

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesUpdatedByData =
  {
    attributes?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesUpdatedBy =
  {
    data?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesUpdatedByData;
  };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesRelatedDataItemAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesRelatedDataItem =
  {
    attributes?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesRelatedDataItemAttributes;
    id?: number;
  };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesRelated =
  {
    data?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesRelatedDataItem[];
  };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesFolderDataAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesFolderData =
  {
    attributes?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesFolderDataAttributes;
    id?: number;
  };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesFolder =
  {
    data?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesFolderData;
  };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributes =
  {
    alternativeText?: string;
    caption?: string;
    createdAt?: string;
    createdBy?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesCreatedBy;
    ext?: string;
    folder?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesFolder;
    folderPath?: string;
    formats?: unknown;
    hash?: string;
    height?: number;
    mime?: string;
    name?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: unknown;
    related?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesRelated;
    size?: number;
    updatedAt?: string;
    updatedBy?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesUpdatedBy;
    url?: string;
    width?: number;
  };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesCreatedByData =
  {
    attributes?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesCreatedByDataAttributes;
    id?: number;
  };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesCreatedBy =
  {
    data?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesCreatedByData;
  };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesCreatedByData =
  {
    attributes?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type CardLoungesDataItemAttributesDetrimentsDataItemAttributesCreatedBy =
  {
    data?: CardLoungesDataItemAttributesDetrimentsDataItemAttributesCreatedByData;
  };

export type CardLoungesDataItemAttributesCreatedBy = {
  data?: CardLoungesDataItemAttributesCreatedByData;
};

export type CardLoungesDataItemAttributesCreatedByDataAttributes = {
  [key: string]: any;
};

export type CardLoungesDataItemAttributesCreatedByData = {
  attributes?: CardLoungesDataItemAttributesCreatedByDataAttributes;
  id?: number;
};

export type CardLoungesDataItemAttributesCard = {
  data?: CardLoungesDataItemAttributesCardData;
};

export type CardLoungesDataItemAttributesCardDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesCardDataAttributesUpdatedByData = {
  attributes?: CardLoungesDataItemAttributesCardDataAttributesUpdatedByDataAttributes;
  id?: number;
};

export type CardLoungesDataItemAttributesCardDataAttributesUpdatedBy = {
  data?: CardLoungesDataItemAttributesCardDataAttributesUpdatedByData;
};

export type CardLoungesDataItemAttributesCardDataAttributesProcessor =
  (typeof CardLoungesDataItemAttributesCardDataAttributesProcessor)[keyof typeof CardLoungesDataItemAttributesCardDataAttributesProcessor];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CardLoungesDataItemAttributesCardDataAttributesProcessor = {
  Visa: "Visa",
  Amex: "Amex",
  Mastercard: "Mastercard",
} as const;

export type CardLoungesDataItemAttributesCardDataAttributesPersonalOrBiz =
  (typeof CardLoungesDataItemAttributesCardDataAttributesPersonalOrBiz)[keyof typeof CardLoungesDataItemAttributesCardDataAttributesPersonalOrBiz];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CardLoungesDataItemAttributesCardDataAttributesPersonalOrBiz = {
  Personal: "Personal",
  Business: "Business",
} as const;

export type CardLoungesDataItemAttributesCardDataAttributes = {
  annualFee?: number;
  bank?: CardLoungesDataItemAttributesCardDataAttributesBank;
  createdAt?: string;
  createdBy?: CardLoungesDataItemAttributesCardDataAttributesCreatedBy;
  icon?: CardLoungesDataItemAttributesCardDataAttributesIcon;
  lounges?: CardLoungesDataItemAttributesCardDataAttributesLounges;
  name?: string;
  personalOrBiz?: CardLoungesDataItemAttributesCardDataAttributesPersonalOrBiz;
  processor?: CardLoungesDataItemAttributesCardDataAttributesProcessor;
  updatedAt?: string;
  updatedBy?: CardLoungesDataItemAttributesCardDataAttributesUpdatedBy;
};

export type CardLoungesDataItemAttributesCardData = {
  attributes?: CardLoungesDataItemAttributesCardDataAttributes;
  id?: number;
};

export type CardLoungesDataItemAttributesCardDataAttributesLoungesDataItemAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesCardDataAttributesLoungesDataItem = {
  attributes?: CardLoungesDataItemAttributesCardDataAttributesLoungesDataItemAttributes;
  id?: number;
};

export type CardLoungesDataItemAttributesCardDataAttributesLounges = {
  data?: CardLoungesDataItemAttributesCardDataAttributesLoungesDataItem[];
};

export type CardLoungesDataItemAttributesCardDataAttributesIconData = {
  attributes?: CardLoungesDataItemAttributesCardDataAttributesIconDataAttributes;
  id?: number;
};

export type CardLoungesDataItemAttributesCardDataAttributesIcon = {
  data?: CardLoungesDataItemAttributesCardDataAttributesIconData;
};

export type CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesUpdatedByData =
  {
    attributes?: CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesUpdatedBy =
  {
    data?: CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesUpdatedByData;
  };

export type CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesRelatedDataItemAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesRelatedDataItem =
  {
    attributes?: CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesRelatedDataItemAttributes;
    id?: number;
  };

export type CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesRelated =
  {
    data?: CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesRelatedDataItem[];
  };

export type CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesFolderDataAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesFolderData =
  {
    attributes?: CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesFolderDataAttributes;
    id?: number;
  };

export type CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesFolder =
  {
    data?: CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesFolderData;
  };

export type CardLoungesDataItemAttributesCardDataAttributesIconDataAttributes =
  {
    alternativeText?: string;
    caption?: string;
    createdAt?: string;
    createdBy?: CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesCreatedBy;
    ext?: string;
    folder?: CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesFolder;
    folderPath?: string;
    formats?: unknown;
    hash?: string;
    height?: number;
    mime?: string;
    name?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: unknown;
    related?: CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesRelated;
    size?: number;
    updatedAt?: string;
    updatedBy?: CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesUpdatedBy;
    url?: string;
    width?: number;
  };

export type CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesCreatedByData =
  {
    attributes?: CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesCreatedByDataAttributes;
    id?: number;
  };

export type CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesCreatedBy =
  {
    data?: CardLoungesDataItemAttributesCardDataAttributesIconDataAttributesCreatedByData;
  };

export type CardLoungesDataItemAttributesCardDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesCardDataAttributesCreatedByData = {
  attributes?: CardLoungesDataItemAttributesCardDataAttributesCreatedByDataAttributes;
  id?: number;
};

export type CardLoungesDataItemAttributesCardDataAttributesCreatedBy = {
  data?: CardLoungesDataItemAttributesCardDataAttributesCreatedByData;
};

export type CardLoungesDataItemAttributesCardDataAttributesBank =
  (typeof CardLoungesDataItemAttributesCardDataAttributesBank)[keyof typeof CardLoungesDataItemAttributesCardDataAttributesBank];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CardLoungesDataItemAttributesCardDataAttributesBank = {
  Chase: "Chase",
  Amex: "Amex",
  Barclays: "Barclays",
  Citi: "Citi",
  Bank_of_America: "Bank of America",
  Capital_One: "Capital One",
  Wells_Fargo: "Wells Fargo",
} as const;

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributes = {
  createdAt?: string;
  createdBy?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesCreatedBy;
  icon?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesIcon;
  name?: string;
  updatedAt?: string;
  updatedBy?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesUpdatedBy;
};

export type CardLoungesDataItemAttributesAmenitiesDataItem = {
  attributes?: CardLoungesDataItemAttributesAmenitiesDataItemAttributes;
  id?: number;
};

export type CardLoungesDataItemAttributesAmenities = {
  data?: CardLoungesDataItemAttributesAmenitiesDataItem[];
};

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesUpdatedByData =
  {
    attributes?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesUpdatedBy =
  {
    data?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesUpdatedByData;
  };

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributes =
  {
    alternativeText?: string;
    caption?: string;
    createdAt?: string;
    createdBy?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesCreatedBy;
    ext?: string;
    folder?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolder;
    folderPath?: string;
    formats?: unknown;
    hash?: string;
    height?: number;
    mime?: string;
    name?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: unknown;
    related?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesRelated;
    size?: number;
    updatedAt?: string;
    updatedBy?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesUpdatedBy;
    url?: string;
    width?: number;
  };

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconData = {
  attributes?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributes;
  id?: number;
};

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesIcon = {
  data?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconData;
};

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesUpdatedByData =
  {
    attributes?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesUpdatedBy =
  {
    data?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesUpdatedByData;
  };

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesRelatedDataItemAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesRelatedDataItem =
  {
    attributes?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesRelatedDataItemAttributes;
    id?: number;
  };

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesRelated =
  {
    data?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesRelatedDataItem[];
  };

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolder =
  {
    data?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderData;
  };

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderData =
  {
    attributes?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributes;
    id?: number;
  };

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesCreatedByData =
  {
    attributes?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesCreatedByDataAttributes;
    id?: number;
  };

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesCreatedBy =
  {
    data?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesCreatedByData;
  };

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesCreatedByData =
  {
    attributes?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type CardLoungesDataItemAttributesAmenitiesDataItemAttributesCreatedBy =
  {
    data?: CardLoungesDataItemAttributesAmenitiesDataItemAttributesCreatedByData;
  };

export type CardLoungesDataItemAttributesAirportData = {
  attributes?: CardLoungesDataItemAttributesAirportDataAttributes;
  id?: number;
};

export type CardLoungesDataItemAttributesAirport = {
  data?: CardLoungesDataItemAttributesAirportData;
};

export type CardLoungesDataItemAttributesAirportDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesAirportDataAttributesUpdatedByData = {
  attributes?: CardLoungesDataItemAttributesAirportDataAttributesUpdatedByDataAttributes;
  id?: number;
};

export type CardLoungesDataItemAttributesAirportDataAttributesUpdatedBy = {
  data?: CardLoungesDataItemAttributesAirportDataAttributesUpdatedByData;
};

export type CardLoungesDataItemAttributesAirportDataAttributesState =
  (typeof CardLoungesDataItemAttributesAirportDataAttributesState)[keyof typeof CardLoungesDataItemAttributesAirportDataAttributesState];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CardLoungesDataItemAttributesAirportDataAttributesState = {
  AL: "AL",
  AK: "AK",
  AZ: "AZ",
  AR: "AR",
  CA: "CA",
  CO: "CO",
  CT: "CT",
  DE: "DE",
  FL: "FL",
  GA: "GA",
  HI: "HI",
  ID: "ID",
  IL: "IL",
  IN: "IN",
  IA: "IA",
  KS: "KS",
  KY: "KY",
  LA: "LA",
  ME: "ME",
  MD: "MD",
  MA: "MA",
  MI: "MI",
  MN: "MN",
  MS: "MS",
  MO: "MO",
  MT: "MT",
  NE: "NE",
  NV: "NV",
  NH: "NH",
  NJ: "NJ",
  NM: "NM",
  NY: "NY",
  NC: "NC",
  ND: "ND",
  OH: "OH",
  OK: "OK",
  OR: "OR",
  PA: "PA",
  RI: "RI",
  SC: "SC",
  SD: "SD",
  TN: "TN",
  TX: "TX",
  UT: "UT",
  VT: "VT",
  VA: "VA",
  WA: "WA",
  WV: "WV",
  WI: "WI",
  WY: "WY",
} as const;

export type CardLoungesDataItemAttributesAirportDataAttributesLoungesDataItemAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesAirportDataAttributesLoungesDataItem =
  {
    attributes?: CardLoungesDataItemAttributesAirportDataAttributesLoungesDataItemAttributes;
    id?: number;
  };

export type CardLoungesDataItemAttributesAirportDataAttributesLounges = {
  data?: CardLoungesDataItemAttributesAirportDataAttributesLoungesDataItem[];
};

export type CardLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type CardLoungesDataItemAttributesAirportDataAttributesCreatedByData = {
  attributes?: CardLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributes;
  id?: number;
};

export type CardLoungesDataItemAttributesAirportDataAttributesCreatedBy = {
  data?: CardLoungesDataItemAttributesAirportDataAttributesCreatedByData;
};

export type CardLoungesDataItemAttributesAirportDataAttributesCountry =
  (typeof CardLoungesDataItemAttributesAirportDataAttributesCountry)[keyof typeof CardLoungesDataItemAttributesAirportDataAttributesCountry];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CardLoungesDataItemAttributesAirportDataAttributesCountry = {
  Argentina: "Argentina",
  Australia: "Australia",
  Austria: "Austria",
  Bahamas: "Bahamas",
  Bahrain: "Bahrain",
  Bangladesh: "Bangladesh",
  Belgium: "Belgium",
  Belize: "Belize",
  Brazil: "Brazil",
  Bulgaria: "Bulgaria",
  Cambodia: "Cambodia",
  Canada: "Canada",
  Chile: "Chile",
  China: "China",
  Colombia: "Colombia",
  Costa_Rica: "Costa Rica",
  Croatia: "Croatia",
  Cuba: "Cuba",
  Cyprus: "Cyprus",
  Czech_Republic: "Czech Republic",
  Denmark: "Denmark",
  Dominican_Republic: "Dominican Republic",
  Ecuador: "Ecuador",
  Egypt: "Egypt",
  El_Salvador: "El Salvador",
  Estonia: "Estonia",
  Fiji: "Fiji",
  Finland: "Finland",
  France: "France",
  Germany: "Germany",
  Greece: "Greece",
  Guatemala: "Guatemala",
  Honduras: "Honduras",
  Hungary: "Hungary",
  Iceland: "Iceland",
  India: "India",
  Indonesia: "Indonesia",
  Ireland: "Ireland",
  Israel: "Israel",
  Italy: "Italy",
  Jamaica: "Jamaica",
  Japan: "Japan",
  Jordan: "Jordan",
  Kenya: "Kenya",
  Kuwait: "Kuwait",
  Latvia: "Latvia",
  Lebanon: "Lebanon",
  Lithuania: "Lithuania",
  Luxembourg: "Luxembourg",
  Malaysia: "Malaysia",
  Malta: "Malta",
  Mauritius: "Mauritius",
  Mexico: "Mexico",
  Monaco: "Monaco",
  Montenegro: "Montenegro",
  Morocco: "Morocco",
  Myanmar: "Myanmar",
  Nepal: "Nepal",
  Netherlands: "Netherlands",
  New_Zealand: "New Zealand",
  Nicaragua: "Nicaragua",
  Nigeria: "Nigeria",
  Norway: "Norway",
  Oman: "Oman",
  Pakistan: "Pakistan",
  Panama: "Panama",
  Paraguay: "Paraguay",
  Peru: "Peru",
  Philippines: "Philippines",
  Poland: "Poland",
  Portugal: "Portugal",
  Qatar: "Qatar",
  Romania: "Romania",
  Russia: "Russia",
  Saint_Kitts_and_Nevis: "Saint Kitts and Nevis",
  Saint_Lucia: "Saint Lucia",
  Saudi_Arabia: "Saudi Arabia",
  Serbia: "Serbia",
  Singapore: "Singapore",
  Slovakia: "Slovakia",
  Slovenia: "Slovenia",
  South_Africa: "South Africa",
  South_Korea: "South Korea",
  Spain: "Spain",
  Sri_Lanka: "Sri Lanka",
  Sweden: "Sweden",
  Switzerland: "Switzerland",
  Taiwan: "Taiwan",
  Tanzania: "Tanzania",
  Thailand: "Thailand",
  Trinidad_and_Tobago: "Trinidad and Tobago",
  Turkey: "Turkey",
  Uganda: "Uganda",
  Ukraine: "Ukraine",
  United_Arab_Emirates: "United Arab Emirates",
  United_Kingdom: "United Kingdom",
  United_States: "United States",
  Uruguay: "Uruguay",
  Venezuela: "Venezuela",
  Vietnam: "Vietnam",
  Zambia: "Zambia",
  Zimbabwe: "Zimbabwe",
} as const;

export type CardLoungesDataItemAttributesAirportDataAttributes = {
  accessDetails?: string;
  city?: string;
  code?: string;
  country?: CardLoungesDataItemAttributesAirportDataAttributesCountry;
  createdAt?: string;
  createdBy?: CardLoungesDataItemAttributesAirportDataAttributesCreatedBy;
  dayPass?: string;
  lounges?: CardLoungesDataItemAttributesAirportDataAttributesLounges;
  name?: string;
  state?: CardLoungesDataItemAttributesAirportDataAttributesState;
  updatedAt?: string;
  updatedBy?: CardLoungesDataItemAttributesAirportDataAttributesUpdatedBy;
};

export type CardIconData = {
  attributes?: CardIconDataAttributes;
  id?: number;
};

export type CardIcon = {
  data?: CardIconData;
};

export type CardIconDataAttributesUpdatedByDataAttributes = {
  [key: string]: any;
};

export type CardIconDataAttributesUpdatedByData = {
  attributes?: CardIconDataAttributesUpdatedByDataAttributes;
  id?: number;
};

export type CardIconDataAttributesUpdatedBy = {
  data?: CardIconDataAttributesUpdatedByData;
};

export type CardIconDataAttributesRelatedDataItemAttributes = {
  [key: string]: any;
};

export type CardIconDataAttributesRelatedDataItem = {
  attributes?: CardIconDataAttributesRelatedDataItemAttributes;
  id?: number;
};

export type CardIconDataAttributesRelated = {
  data?: CardIconDataAttributesRelatedDataItem[];
};

export type CardIconDataAttributesFolderData = {
  attributes?: CardIconDataAttributesFolderDataAttributes;
  id?: number;
};

export type CardIconDataAttributesFolder = {
  data?: CardIconDataAttributesFolderData;
};

export type CardIconDataAttributes = {
  alternativeText?: string;
  caption?: string;
  createdAt?: string;
  createdBy?: CardIconDataAttributesCreatedBy;
  ext?: string;
  folder?: CardIconDataAttributesFolder;
  folderPath?: string;
  formats?: unknown;
  hash?: string;
  height?: number;
  mime?: string;
  name?: string;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: unknown;
  related?: CardIconDataAttributesRelated;
  size?: number;
  updatedAt?: string;
  updatedBy?: CardIconDataAttributesUpdatedBy;
  url?: string;
  width?: number;
};

export type CardIconDataAttributesFolderDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type CardIconDataAttributesFolderDataAttributesUpdatedByData = {
  attributes?: CardIconDataAttributesFolderDataAttributesUpdatedByDataAttributes;
  id?: number;
};

export type CardIconDataAttributesFolderDataAttributesUpdatedBy = {
  data?: CardIconDataAttributesFolderDataAttributesUpdatedByData;
};

export type CardIconDataAttributesFolderDataAttributesParentDataAttributes = {
  [key: string]: any;
};

export type CardIconDataAttributesFolderDataAttributesParentData = {
  attributes?: CardIconDataAttributesFolderDataAttributesParentDataAttributes;
  id?: number;
};

export type CardIconDataAttributesFolderDataAttributesParent = {
  data?: CardIconDataAttributesFolderDataAttributesParentData;
};

export type CardIconDataAttributesFolderDataAttributesFilesDataItem = {
  attributes?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributes;
  id?: number;
};

export type CardIconDataAttributesFolderDataAttributesFiles = {
  data?: CardIconDataAttributesFolderDataAttributesFilesDataItem[];
};

export type CardIconDataAttributesFolderDataAttributes = {
  children?: CardIconDataAttributesFolderDataAttributesChildren;
  createdAt?: string;
  createdBy?: CardIconDataAttributesFolderDataAttributesCreatedBy;
  files?: CardIconDataAttributesFolderDataAttributesFiles;
  name?: string;
  parent?: CardIconDataAttributesFolderDataAttributesParent;
  path?: string;
  pathId?: number;
  updatedAt?: string;
  updatedBy?: CardIconDataAttributesFolderDataAttributesUpdatedBy;
};

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByData =
  {
    attributes?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedBy =
  {
    data?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByData;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItem =
  {
    attributes?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItemAttributes;
    id?: number;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelated =
  {
    data?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItem[];
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributes =
  {
    alternativeText?: string;
    caption?: string;
    createdAt?: string;
    createdBy?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedBy;
    ext?: string;
    folder?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolder;
    folderPath?: string;
    formats?: unknown;
    hash?: string;
    height?: number;
    mime?: string;
    name?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: unknown;
    related?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelated;
    size?: number;
    updatedAt?: string;
    updatedBy?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedBy;
    url?: string;
    width?: number;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItemAttributes =
  { [key: string]: any };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderDataAttributes =
  { [key: string]: any };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderData =
  {
    attributes?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderDataAttributes;
    id?: number;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolder =
  {
    data?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderData;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByData =
  {
    attributes?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedBy =
  {
    data?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByData;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedByData =
  {
    attributes?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy =
  {
    data?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedByData;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles =
  {
    data?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItem[];
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributes =
  {
    blocked?: boolean;
    createdAt?: string;
    createdBy?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy;
    email?: string;
    firstname?: string;
    isActive?: boolean;
    lastname?: string;
    preferedLanguage?: string;
    registrationToken?: string;
    resetPasswordToken?: string;
    roles?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles;
    updatedAt?: string;
    updatedBy?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy;
    username?: string;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItemAttributes =
  { [key: string]: any };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItem =
  {
    attributes?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItemAttributes;
    id?: number;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsers =
  {
    data?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItem[];
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByData =
  {
    attributes?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy =
  {
    data?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByData;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributes =
  {
    action?: string;
    actionParameters?: unknown;
    conditions?: unknown;
    createdAt?: string;
    createdBy?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy;
    properties?: unknown;
    role?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole;
    subject?: string;
    updatedAt?: string;
    updatedBy?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItem =
  {
    attributes?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributes;
    id?: number;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions =
  {
    data?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItem[];
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributes =
  {
    code?: string;
    createdAt?: string;
    createdBy?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy;
    description?: string;
    name?: string;
    permissions?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions;
    updatedAt?: string;
    updatedBy?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy;
    users?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsers;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItem =
  {
    attributes?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributes;
    id?: number;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByData =
  {
    attributes?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy =
  {
    data?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByData;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleDataAttributes =
  { [key: string]: any };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleData =
  {
    attributes?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleDataAttributes;
    id?: number;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole =
  {
    data?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleData;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByData =
  {
    attributes?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy =
  {
    data?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByData;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByData =
  {
    attributes?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy =
  {
    data?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByData;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedByData =
  {
    attributes?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedByDataAttributes;
    id?: number;
  };

export type CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy =
  {
    data?: CardIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedByData;
  };

export type CardIconDataAttributesFolderDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type CardIconDataAttributesFolderDataAttributesCreatedByData = {
  attributes?: CardIconDataAttributesFolderDataAttributesCreatedByDataAttributes;
  id?: number;
};

export type CardIconDataAttributesFolderDataAttributesCreatedBy = {
  data?: CardIconDataAttributesFolderDataAttributesCreatedByData;
};

export type CardIconDataAttributesFolderDataAttributesChildrenDataItemAttributes =
  { [key: string]: any };

export type CardIconDataAttributesFolderDataAttributesChildrenDataItem = {
  attributes?: CardIconDataAttributesFolderDataAttributesChildrenDataItemAttributes;
  id?: number;
};

export type CardIconDataAttributesFolderDataAttributesChildren = {
  data?: CardIconDataAttributesFolderDataAttributesChildrenDataItem[];
};

export type CardIconDataAttributesCreatedByDataAttributes = {
  [key: string]: any;
};

export type CardIconDataAttributesCreatedByData = {
  attributes?: CardIconDataAttributesCreatedByDataAttributes;
  id?: number;
};

export type CardIconDataAttributesCreatedBy = {
  data?: CardIconDataAttributesCreatedByData;
};

export type CardCreatedByData = {
  attributes?: CardCreatedByDataAttributes;
  id?: number;
};

export type CardCreatedBy = {
  data?: CardCreatedByData;
};

export type CardCreatedByDataAttributes = { [key: string]: any };

export type CardBank = (typeof CardBank)[keyof typeof CardBank];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CardBank = {
  Chase: "Chase",
  Amex: "Amex",
  Barclays: "Barclays",
  Citi: "Citi",
  Bank_of_America: "Bank of America",
  Capital_One: "Capital One",
  Wells_Fargo: "Wells Fargo",
} as const;

export type CardListResponseMetaPagination = {
  page?: number;
  /** @maximum 1 */
  pageCount?: number;
  /** @minimum 25 */
  pageSize?: number;
  total?: number;
};

export type CardListResponseMeta = {
  pagination?: CardListResponseMetaPagination;
};

export interface CardListResponseDataItem {
  attributes?: Card;
  id?: number;
}

export interface CardListResponse {
  data?: CardListResponseDataItem[];
  meta?: CardListResponseMeta;
}

export type CardRequestDataProcessor =
  (typeof CardRequestDataProcessor)[keyof typeof CardRequestDataProcessor];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CardRequestDataProcessor = {
  Visa: "Visa",
  Amex: "Amex",
  Mastercard: "Mastercard",
} as const;

export type CardRequestDataPersonalOrBiz =
  (typeof CardRequestDataPersonalOrBiz)[keyof typeof CardRequestDataPersonalOrBiz];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CardRequestDataPersonalOrBiz = {
  Personal: "Personal",
  Business: "Business",
} as const;

export type CardRequestDataLoungesItem = number | string;

export type CardRequestDataIcon = number | string;

export type CardRequestDataBank =
  (typeof CardRequestDataBank)[keyof typeof CardRequestDataBank];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CardRequestDataBank = {
  Chase: "Chase",
  Amex: "Amex",
  Barclays: "Barclays",
  Citi: "Citi",
  Bank_of_America: "Bank of America",
  Capital_One: "Capital One",
  Wells_Fargo: "Wells Fargo",
} as const;

export type CardRequestData = {
  annualFee?: number;
  bank?: CardRequestDataBank;
  icon?: CardRequestDataIcon;
  lounges?: CardRequestDataLoungesItem[];
  name?: string;
  personalOrBiz?: CardRequestDataPersonalOrBiz;
  processor?: CardRequestDataProcessor;
};

export interface CardRequest {
  data: CardRequestData;
}

export type AmenityResponseMeta = { [key: string]: any };

export interface Amenity {
  createdAt?: string;
  createdBy?: AmenityCreatedBy;
  icon?: AmenityIcon;
  name: string;
  updatedAt?: string;
  updatedBy?: AmenityUpdatedBy;
}

export interface AmenityResponseDataObject {
  attributes?: Amenity;
  id?: number;
}

export interface AmenityResponse {
  data?: AmenityResponseDataObject;
  meta?: AmenityResponseMeta;
}

export type AmenityUpdatedByDataAttributes = { [key: string]: any };

export type AmenityUpdatedByData = {
  attributes?: AmenityUpdatedByDataAttributes;
  id?: number;
};

export type AmenityUpdatedBy = {
  data?: AmenityUpdatedByData;
};

export type AmenityIconDataAttributes = {
  alternativeText?: string;
  caption?: string;
  createdAt?: string;
  createdBy?: AmenityIconDataAttributesCreatedBy;
  ext?: string;
  folder?: AmenityIconDataAttributesFolder;
  folderPath?: string;
  formats?: unknown;
  hash?: string;
  height?: number;
  mime?: string;
  name?: string;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: unknown;
  related?: AmenityIconDataAttributesRelated;
  size?: number;
  updatedAt?: string;
  updatedBy?: AmenityIconDataAttributesUpdatedBy;
  url?: string;
  width?: number;
};

export type AmenityIconData = {
  attributes?: AmenityIconDataAttributes;
  id?: number;
};

export type AmenityIcon = {
  data?: AmenityIconData;
};

export type AmenityIconDataAttributesUpdatedByDataAttributes = {
  [key: string]: any;
};

export type AmenityIconDataAttributesUpdatedByData = {
  attributes?: AmenityIconDataAttributesUpdatedByDataAttributes;
  id?: number;
};

export type AmenityIconDataAttributesUpdatedBy = {
  data?: AmenityIconDataAttributesUpdatedByData;
};

export type AmenityIconDataAttributesRelatedDataItemAttributes = {
  [key: string]: any;
};

export type AmenityIconDataAttributesRelatedDataItem = {
  attributes?: AmenityIconDataAttributesRelatedDataItemAttributes;
  id?: number;
};

export type AmenityIconDataAttributesRelated = {
  data?: AmenityIconDataAttributesRelatedDataItem[];
};

export type AmenityIconDataAttributesFolderData = {
  attributes?: AmenityIconDataAttributesFolderDataAttributes;
  id?: number;
};

export type AmenityIconDataAttributesFolder = {
  data?: AmenityIconDataAttributesFolderData;
};

export type AmenityIconDataAttributesFolderDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type AmenityIconDataAttributesFolderDataAttributesUpdatedByData = {
  attributes?: AmenityIconDataAttributesFolderDataAttributesUpdatedByDataAttributes;
  id?: number;
};

export type AmenityIconDataAttributesFolderDataAttributesUpdatedBy = {
  data?: AmenityIconDataAttributesFolderDataAttributesUpdatedByData;
};

export type AmenityIconDataAttributesFolderDataAttributesParentDataAttributes =
  { [key: string]: any };

export type AmenityIconDataAttributesFolderDataAttributesParentData = {
  attributes?: AmenityIconDataAttributesFolderDataAttributesParentDataAttributes;
  id?: number;
};

export type AmenityIconDataAttributesFolderDataAttributesParent = {
  data?: AmenityIconDataAttributesFolderDataAttributesParentData;
};

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributes =
  {
    alternativeText?: string;
    caption?: string;
    createdAt?: string;
    createdBy?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedBy;
    ext?: string;
    folder?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolder;
    folderPath?: string;
    formats?: unknown;
    hash?: string;
    height?: number;
    mime?: string;
    name?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: unknown;
    related?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelated;
    size?: number;
    updatedAt?: string;
    updatedBy?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedBy;
    url?: string;
    width?: number;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItem = {
  attributes?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributes;
  id?: number;
};

export type AmenityIconDataAttributesFolderDataAttributesFiles = {
  data?: AmenityIconDataAttributesFolderDataAttributesFilesDataItem[];
};

export type AmenityIconDataAttributesFolderDataAttributes = {
  children?: AmenityIconDataAttributesFolderDataAttributesChildren;
  createdAt?: string;
  createdBy?: AmenityIconDataAttributesFolderDataAttributesCreatedBy;
  files?: AmenityIconDataAttributesFolderDataAttributesFiles;
  name?: string;
  parent?: AmenityIconDataAttributesFolderDataAttributesParent;
  path?: string;
  pathId?: number;
  updatedAt?: string;
  updatedBy?: AmenityIconDataAttributesFolderDataAttributesUpdatedBy;
};

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByData =
  {
    attributes?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedBy =
  {
    data?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByData;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItemAttributes =
  { [key: string]: any };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItem =
  {
    attributes?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItemAttributes;
    id?: number;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelated =
  {
    data?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItem[];
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolder =
  {
    data?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderData;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderDataAttributes =
  { [key: string]: any };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderData =
  {
    attributes?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderDataAttributes;
    id?: number;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedBy =
  {
    data?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByData;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedByData =
  {
    attributes?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy =
  {
    data?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedByData;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItem =
  {
    attributes?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributes;
    id?: number;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles =
  {
    data?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItem[];
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributes =
  {
    blocked?: boolean;
    createdAt?: string;
    createdBy?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy;
    email?: string;
    firstname?: string;
    isActive?: boolean;
    lastname?: string;
    preferedLanguage?: string;
    registrationToken?: string;
    resetPasswordToken?: string;
    roles?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles;
    updatedAt?: string;
    updatedBy?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy;
    username?: string;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByData =
  {
    attributes?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItemAttributes =
  { [key: string]: any };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItem =
  {
    attributes?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItemAttributes;
    id?: number;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsers =
  {
    data?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItem[];
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributes =
  {
    code?: string;
    createdAt?: string;
    createdBy?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy;
    description?: string;
    name?: string;
    permissions?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions;
    updatedAt?: string;
    updatedBy?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy;
    users?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsers;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByData =
  {
    attributes?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy =
  {
    data?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByData;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributes =
  {
    action?: string;
    actionParameters?: unknown;
    conditions?: unknown;
    createdAt?: string;
    createdBy?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy;
    properties?: unknown;
    role?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole;
    subject?: string;
    updatedAt?: string;
    updatedBy?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItem =
  {
    attributes?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributes;
    id?: number;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions =
  {
    data?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItem[];
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByData =
  {
    attributes?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy =
  {
    data?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByData;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleDataAttributes =
  { [key: string]: any };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleData =
  {
    attributes?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleDataAttributes;
    id?: number;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole =
  {
    data?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleData;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByData =
  {
    attributes?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy =
  {
    data?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByData;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByData =
  {
    attributes?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy =
  {
    data?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByData;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedByData =
  {
    attributes?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedByDataAttributes;
    id?: number;
  };

export type AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy =
  {
    data?: AmenityIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedByData;
  };

export type AmenityIconDataAttributesFolderDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type AmenityIconDataAttributesFolderDataAttributesCreatedByData = {
  attributes?: AmenityIconDataAttributesFolderDataAttributesCreatedByDataAttributes;
  id?: number;
};

export type AmenityIconDataAttributesFolderDataAttributesCreatedBy = {
  data?: AmenityIconDataAttributesFolderDataAttributesCreatedByData;
};

export type AmenityIconDataAttributesFolderDataAttributesChildrenDataItemAttributes =
  { [key: string]: any };

export type AmenityIconDataAttributesFolderDataAttributesChildrenDataItem = {
  attributes?: AmenityIconDataAttributesFolderDataAttributesChildrenDataItemAttributes;
  id?: number;
};

export type AmenityIconDataAttributesFolderDataAttributesChildren = {
  data?: AmenityIconDataAttributesFolderDataAttributesChildrenDataItem[];
};

export type AmenityIconDataAttributesCreatedByDataAttributes = {
  [key: string]: any;
};

export type AmenityIconDataAttributesCreatedByData = {
  attributes?: AmenityIconDataAttributesCreatedByDataAttributes;
  id?: number;
};

export type AmenityIconDataAttributesCreatedBy = {
  data?: AmenityIconDataAttributesCreatedByData;
};

export type AmenityCreatedByDataAttributes = { [key: string]: any };

export type AmenityCreatedByData = {
  attributes?: AmenityCreatedByDataAttributes;
  id?: number;
};

export type AmenityCreatedBy = {
  data?: AmenityCreatedByData;
};

export interface AmenityListResponse {
  data?: AmenityListResponseDataItem[];
  meta?: AmenityListResponseMeta;
}

export type AmenityListResponseMetaPagination = {
  page?: number;
  /** @maximum 1 */
  pageCount?: number;
  /** @minimum 25 */
  pageSize?: number;
  total?: number;
};

export type AmenityListResponseMeta = {
  pagination?: AmenityListResponseMetaPagination;
};

export interface AmenityListResponseDataItem {
  attributes?: Amenity;
  id?: number;
}

export type AmenityRequestDataIcon = number | string;

export type AmenityRequestData = {
  icon?: AmenityRequestDataIcon;
  name: string;
};

export interface AmenityRequest {
  data: AmenityRequestData;
}

export type AirportResponseMeta = { [key: string]: any };

export interface AirportResponseDataObject {
  attributes?: Airport;
  id?: number;
}

export interface AirportResponse {
  data?: AirportResponseDataObject;
  meta?: AirportResponseMeta;
}

export type AirportUpdatedByDataAttributes = { [key: string]: any };

export type AirportUpdatedByData = {
  attributes?: AirportUpdatedByDataAttributes;
  id?: number;
};

export type AirportUpdatedBy = {
  data?: AirportUpdatedByData;
};

export type AirportState = (typeof AirportState)[keyof typeof AirportState];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AirportState = {
  AL: "AL",
  AK: "AK",
  AZ: "AZ",
  AR: "AR",
  CA: "CA",
  CO: "CO",
  CT: "CT",
  DE: "DE",
  FL: "FL",
  GA: "GA",
  HI: "HI",
  ID: "ID",
  IL: "IL",
  IN: "IN",
  IA: "IA",
  KS: "KS",
  KY: "KY",
  LA: "LA",
  ME: "ME",
  MD: "MD",
  MA: "MA",
  MI: "MI",
  MN: "MN",
  MS: "MS",
  MO: "MO",
  MT: "MT",
  NE: "NE",
  NV: "NV",
  NH: "NH",
  NJ: "NJ",
  NM: "NM",
  NY: "NY",
  NC: "NC",
  ND: "ND",
  OH: "OH",
  OK: "OK",
  OR: "OR",
  PA: "PA",
  RI: "RI",
  SC: "SC",
  SD: "SD",
  TN: "TN",
  TX: "TX",
  UT: "UT",
  VT: "VT",
  VA: "VA",
  WA: "WA",
  WV: "WV",
  WI: "WI",
  WY: "WY",
} as const;

export type AirportLounges = {
  data?: AirportLoungesDataItem[];
};

export interface Airport {
  accessDetails?: string;
  city: string;
  code: string;
  country: AirportCountry;
  createdAt?: string;
  createdBy?: AirportCreatedBy;
  dayPass?: string;
  lounges?: AirportLounges;
  name: string;
  state?: AirportState;
  updatedAt?: string;
  updatedBy?: AirportUpdatedBy;
}

export type AirportLoungesDataItemAttributesUpdatedByDataAttributes = {
  [key: string]: any;
};

export type AirportLoungesDataItemAttributesUpdatedByData = {
  attributes?: AirportLoungesDataItemAttributesUpdatedByDataAttributes;
  id?: number;
};

export type AirportLoungesDataItemAttributesUpdatedBy = {
  data?: AirportLoungesDataItemAttributesUpdatedByData;
};

export type AirportLoungesDataItemAttributesLocalizations = {
  data?: unknown[];
};

export type AirportLoungesDataItemAttributes = {
  airport?: AirportLoungesDataItemAttributesAirport;
  amenities?: AirportLoungesDataItemAttributesAmenities;
  card?: AirportLoungesDataItemAttributesCard;
  createdAt?: string;
  createdBy?: AirportLoungesDataItemAttributesCreatedBy;
  description?: string;
  detriments?: AirportLoungesDataItemAttributesDetriments;
  directions?: string;
  featured?: boolean;
  googlePlaceId?: string;
  guest?: string;
  locale?: string;
  localizations?: AirportLoungesDataItemAttributesLocalizations;
  location?: string;
  moreInfo?: string;
  name?: string;
  notes?: string;
  priorityPass?: boolean;
  slug?: string;
  updatedAt?: string;
  updatedBy?: AirportLoungesDataItemAttributesUpdatedBy;
};

export type AirportLoungesDataItem = {
  attributes?: AirportLoungesDataItemAttributes;
  id?: number;
};

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributes = {
  createdAt?: string;
  createdBy?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesCreatedBy;
  icon?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIcon;
  name?: string;
  updatedAt?: string;
  updatedBy?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesUpdatedBy;
};

export type AirportLoungesDataItemAttributesDetrimentsDataItem = {
  attributes?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributes;
  id?: number;
};

export type AirportLoungesDataItemAttributesDetriments = {
  data?: AirportLoungesDataItemAttributesDetrimentsDataItem[];
};

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesUpdatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesUpdatedBy =
  {
    data?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesUpdatedByData;
  };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconData =
  {
    attributes?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIcon = {
  data?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconData;
};

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesUpdatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesUpdatedBy =
  {
    data?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesUpdatedByData;
  };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributes =
  {
    alternativeText?: string;
    caption?: string;
    createdAt?: string;
    createdBy?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesCreatedBy;
    ext?: string;
    folder?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesFolder;
    folderPath?: string;
    formats?: unknown;
    hash?: string;
    height?: number;
    mime?: string;
    name?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: unknown;
    related?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesRelated;
    size?: number;
    updatedAt?: string;
    updatedBy?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesUpdatedBy;
    url?: string;
    width?: number;
  };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesRelatedDataItemAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesRelatedDataItem =
  {
    attributes?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesRelatedDataItemAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesRelated =
  {
    data?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesRelatedDataItem[];
  };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesFolderDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesFolderData =
  {
    attributes?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesFolderDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesFolder =
  {
    data?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesFolderData;
  };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesCreatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesCreatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesCreatedBy =
  {
    data?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesIconDataAttributesCreatedByData;
  };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesCreatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesDetrimentsDataItemAttributesCreatedBy =
  {
    data?: AirportLoungesDataItemAttributesDetrimentsDataItemAttributesCreatedByData;
  };

export type AirportLoungesDataItemAttributesCreatedByDataAttributes = {
  [key: string]: any;
};

export type AirportLoungesDataItemAttributesCreatedByData = {
  attributes?: AirportLoungesDataItemAttributesCreatedByDataAttributes;
  id?: number;
};

export type AirportLoungesDataItemAttributesCreatedBy = {
  data?: AirportLoungesDataItemAttributesCreatedByData;
};

export type AirportLoungesDataItemAttributesCard = {
  data?: AirportLoungesDataItemAttributesCardData;
};

export type AirportLoungesDataItemAttributesCardDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesCardDataAttributesUpdatedByData = {
  attributes?: AirportLoungesDataItemAttributesCardDataAttributesUpdatedByDataAttributes;
  id?: number;
};

export type AirportLoungesDataItemAttributesCardDataAttributesUpdatedBy = {
  data?: AirportLoungesDataItemAttributesCardDataAttributesUpdatedByData;
};

export type AirportLoungesDataItemAttributesCardDataAttributesProcessor =
  (typeof AirportLoungesDataItemAttributesCardDataAttributesProcessor)[keyof typeof AirportLoungesDataItemAttributesCardDataAttributesProcessor];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AirportLoungesDataItemAttributesCardDataAttributesProcessor = {
  Visa: "Visa",
  Amex: "Amex",
  Mastercard: "Mastercard",
} as const;

export type AirportLoungesDataItemAttributesCardDataAttributesPersonalOrBiz =
  (typeof AirportLoungesDataItemAttributesCardDataAttributesPersonalOrBiz)[keyof typeof AirportLoungesDataItemAttributesCardDataAttributesPersonalOrBiz];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AirportLoungesDataItemAttributesCardDataAttributesPersonalOrBiz = {
  Personal: "Personal",
  Business: "Business",
} as const;

export type AirportLoungesDataItemAttributesCardDataAttributes = {
  annualFee?: number;
  bank?: AirportLoungesDataItemAttributesCardDataAttributesBank;
  createdAt?: string;
  createdBy?: AirportLoungesDataItemAttributesCardDataAttributesCreatedBy;
  icon?: AirportLoungesDataItemAttributesCardDataAttributesIcon;
  lounges?: AirportLoungesDataItemAttributesCardDataAttributesLounges;
  name?: string;
  personalOrBiz?: AirportLoungesDataItemAttributesCardDataAttributesPersonalOrBiz;
  processor?: AirportLoungesDataItemAttributesCardDataAttributesProcessor;
  updatedAt?: string;
  updatedBy?: AirportLoungesDataItemAttributesCardDataAttributesUpdatedBy;
};

export type AirportLoungesDataItemAttributesCardData = {
  attributes?: AirportLoungesDataItemAttributesCardDataAttributes;
  id?: number;
};

export type AirportLoungesDataItemAttributesCardDataAttributesLoungesDataItemAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesCardDataAttributesLoungesDataItem =
  {
    attributes?: AirportLoungesDataItemAttributesCardDataAttributesLoungesDataItemAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesCardDataAttributesLounges = {
  data?: AirportLoungesDataItemAttributesCardDataAttributesLoungesDataItem[];
};

export type AirportLoungesDataItemAttributesCardDataAttributesIconData = {
  attributes?: AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributes;
  id?: number;
};

export type AirportLoungesDataItemAttributesCardDataAttributesIcon = {
  data?: AirportLoungesDataItemAttributesCardDataAttributesIconData;
};

export type AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesUpdatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesUpdatedBy =
  {
    data?: AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesUpdatedByData;
  };

export type AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesRelatedDataItemAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesRelatedDataItem =
  {
    attributes?: AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesRelatedDataItemAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesRelated =
  {
    data?: AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesRelatedDataItem[];
  };

export type AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesFolderDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesFolderData =
  {
    attributes?: AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesFolderDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesFolder =
  {
    data?: AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesFolderData;
  };

export type AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesCreatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesCreatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesCreatedBy =
  {
    data?: AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesCreatedByData;
  };

export type AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributes =
  {
    alternativeText?: string;
    caption?: string;
    createdAt?: string;
    createdBy?: AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesCreatedBy;
    ext?: string;
    folder?: AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesFolder;
    folderPath?: string;
    formats?: unknown;
    hash?: string;
    height?: number;
    mime?: string;
    name?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: unknown;
    related?: AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesRelated;
    size?: number;
    updatedAt?: string;
    updatedBy?: AirportLoungesDataItemAttributesCardDataAttributesIconDataAttributesUpdatedBy;
    url?: string;
    width?: number;
  };

export type AirportLoungesDataItemAttributesCardDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesCardDataAttributesCreatedByData = {
  attributes?: AirportLoungesDataItemAttributesCardDataAttributesCreatedByDataAttributes;
  id?: number;
};

export type AirportLoungesDataItemAttributesCardDataAttributesCreatedBy = {
  data?: AirportLoungesDataItemAttributesCardDataAttributesCreatedByData;
};

export type AirportLoungesDataItemAttributesCardDataAttributesBank =
  (typeof AirportLoungesDataItemAttributesCardDataAttributesBank)[keyof typeof AirportLoungesDataItemAttributesCardDataAttributesBank];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AirportLoungesDataItemAttributesCardDataAttributesBank = {
  Chase: "Chase",
  Amex: "Amex",
  Barclays: "Barclays",
  Citi: "Citi",
  Bank_of_America: "Bank of America",
  Capital_One: "Capital One",
  Wells_Fargo: "Wells Fargo",
} as const;

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributes = {
  createdAt?: string;
  createdBy?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesCreatedBy;
  icon?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIcon;
  name?: string;
  updatedAt?: string;
  updatedBy?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesUpdatedBy;
};

export type AirportLoungesDataItemAttributesAmenitiesDataItem = {
  attributes?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributes;
  id?: number;
};

export type AirportLoungesDataItemAttributesAmenities = {
  data?: AirportLoungesDataItemAttributesAmenitiesDataItem[];
};

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesUpdatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesUpdatedBy =
  {
    data?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesUpdatedByData;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconData =
  {
    attributes?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIcon = {
  data?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconData;
};

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesUpdatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesUpdatedBy =
  {
    data?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesUpdatedByData;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributes =
  {
    alternativeText?: string;
    caption?: string;
    createdAt?: string;
    createdBy?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesCreatedBy;
    ext?: string;
    folder?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolder;
    folderPath?: string;
    formats?: unknown;
    hash?: string;
    height?: number;
    mime?: string;
    name?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: unknown;
    related?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesRelated;
    size?: number;
    updatedAt?: string;
    updatedBy?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesUpdatedBy;
    url?: string;
    width?: number;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesRelatedDataItemAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesRelatedDataItem =
  {
    attributes?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesRelatedDataItemAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesRelated =
  {
    data?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesRelatedDataItem[];
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributes =
  {
    children?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesChildren;
    createdAt?: string;
    createdBy?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesCreatedBy;
    files?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFiles;
    name?: string;
    parent?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesParent;
    path?: string;
    pathId?: number;
    updatedAt?: string;
    updatedBy?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesUpdatedBy;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderData =
  {
    attributes?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolder =
  {
    data?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderData;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesUpdatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesUpdatedBy =
  {
    data?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesUpdatedByData;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesParentDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesParentData =
  {
    attributes?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesParentDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesParent =
  {
    data?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesParentData;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItem =
  {
    attributes?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFiles =
  {
    data?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItem[];
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedBy =
  {
    data?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedByData;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributes =
  {
    alternativeText?: string;
    caption?: string;
    createdAt?: string;
    createdBy?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedBy;
    ext?: string;
    folder?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolder;
    folderPath?: string;
    formats?: unknown;
    hash?: string;
    height?: number;
    mime?: string;
    name?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: unknown;
    related?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelated;
    size?: number;
    updatedAt?: string;
    updatedBy?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedBy;
    url?: string;
    width?: number;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItemAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItem =
  {
    attributes?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItemAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelated =
  {
    data?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesRelatedDataItem[];
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderData =
  {
    attributes?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolder =
  {
    data?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesFolderData;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedBy =
  {
    data?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByData;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesCreatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesCreatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesCreatedBy =
  {
    data?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesCreatedByData;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesChildrenDataItemAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesChildrenDataItem =
  {
    attributes?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesChildrenDataItemAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesChildren =
  {
    data?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesFolderDataAttributesChildrenDataItem[];
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesCreatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesCreatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesCreatedBy =
  {
    data?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesIconDataAttributesCreatedByData;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesCreatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAmenitiesDataItemAttributesCreatedBy =
  {
    data?: AirportLoungesDataItemAttributesAmenitiesDataItemAttributesCreatedByData;
  };

export type AirportLoungesDataItemAttributesAirportData = {
  attributes?: AirportLoungesDataItemAttributesAirportDataAttributes;
  id?: number;
};

export type AirportLoungesDataItemAttributesAirport = {
  data?: AirportLoungesDataItemAttributesAirportData;
};

export type AirportLoungesDataItemAttributesAirportDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAirportDataAttributesUpdatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesAirportDataAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesUpdatedBy = {
  data?: AirportLoungesDataItemAttributesAirportDataAttributesUpdatedByData;
};

export type AirportLoungesDataItemAttributesAirportDataAttributesState =
  (typeof AirportLoungesDataItemAttributesAirportDataAttributesState)[keyof typeof AirportLoungesDataItemAttributesAirportDataAttributesState];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AirportLoungesDataItemAttributesAirportDataAttributesState = {
  AL: "AL",
  AK: "AK",
  AZ: "AZ",
  AR: "AR",
  CA: "CA",
  CO: "CO",
  CT: "CT",
  DE: "DE",
  FL: "FL",
  GA: "GA",
  HI: "HI",
  ID: "ID",
  IL: "IL",
  IN: "IN",
  IA: "IA",
  KS: "KS",
  KY: "KY",
  LA: "LA",
  ME: "ME",
  MD: "MD",
  MA: "MA",
  MI: "MI",
  MN: "MN",
  MS: "MS",
  MO: "MO",
  MT: "MT",
  NE: "NE",
  NV: "NV",
  NH: "NH",
  NJ: "NJ",
  NM: "NM",
  NY: "NY",
  NC: "NC",
  ND: "ND",
  OH: "OH",
  OK: "OK",
  OR: "OR",
  PA: "PA",
  RI: "RI",
  SC: "SC",
  SD: "SD",
  TN: "TN",
  TX: "TX",
  UT: "UT",
  VT: "VT",
  VA: "VA",
  WA: "WA",
  WV: "WV",
  WI: "WI",
  WY: "WY",
} as const;

export type AirportLoungesDataItemAttributesAirportDataAttributesLoungesDataItemAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAirportDataAttributesLoungesDataItem =
  {
    attributes?: AirportLoungesDataItemAttributesAirportDataAttributesLoungesDataItemAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesLounges = {
  data?: AirportLoungesDataItemAttributesAirportDataAttributesLoungesDataItem[];
};

export type AirportLoungesDataItemAttributesAirportDataAttributes = {
  accessDetails?: string;
  city?: string;
  code?: string;
  country?: AirportLoungesDataItemAttributesAirportDataAttributesCountry;
  createdAt?: string;
  createdBy?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedBy;
  dayPass?: string;
  lounges?: AirportLoungesDataItemAttributesAirportDataAttributesLounges;
  name?: string;
  state?: AirportLoungesDataItemAttributesAirportDataAttributesState;
  updatedAt?: string;
  updatedBy?: AirportLoungesDataItemAttributesAirportDataAttributesUpdatedBy;
};

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesUpdatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesUpdatedBy =
  {
    data?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesUpdatedByData;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributes =
  {
    blocked?: boolean;
    createdAt?: string;
    createdBy?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesCreatedBy;
    email?: string;
    firstname?: string;
    isActive?: boolean;
    lastname?: string;
    preferedLanguage?: string;
    registrationToken?: string;
    resetPasswordToken?: string;
    roles?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRoles;
    updatedAt?: string;
    updatedBy?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesUpdatedBy;
    username?: string;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedBy = {
  data?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByData;
};

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItem =
  {
    attributes?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRoles =
  {
    data?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItem[];
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItemAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItem =
  {
    attributes?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItemAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesUsers =
  {
    data?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesUsersDataItem[];
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy =
  {
    data?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedByData;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions =
  {
    data?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItem[];
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributes =
  {
    code?: string;
    createdAt?: string;
    createdBy?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy;
    description?: string;
    name?: string;
    permissions?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions;
    updatedAt?: string;
    updatedBy?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy;
    users?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesUsers;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy =
  {
    data?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedByData;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleData =
  {
    attributes?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole =
  {
    data?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRoleData;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy =
  {
    data?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedByData;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributes =
  {
    action?: string;
    actionParameters?: unknown;
    conditions?: unknown;
    createdAt?: string;
    createdBy?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy;
    properties?: unknown;
    role?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole;
    subject?: string;
    updatedAt?: string;
    updatedBy?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItem =
  {
    attributes?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy =
  {
    data?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedByData;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesCreatedByDataAttributes =
  { [key: string]: any };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesCreatedByData =
  {
    attributes?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesCreatedByDataAttributes;
    id?: number;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesCreatedBy =
  {
    data?: AirportLoungesDataItemAttributesAirportDataAttributesCreatedByDataAttributesCreatedByData;
  };

export type AirportLoungesDataItemAttributesAirportDataAttributesCountry =
  (typeof AirportLoungesDataItemAttributesAirportDataAttributesCountry)[keyof typeof AirportLoungesDataItemAttributesAirportDataAttributesCountry];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AirportLoungesDataItemAttributesAirportDataAttributesCountry = {
  Argentina: "Argentina",
  Australia: "Australia",
  Austria: "Austria",
  Bahamas: "Bahamas",
  Bahrain: "Bahrain",
  Bangladesh: "Bangladesh",
  Belgium: "Belgium",
  Belize: "Belize",
  Brazil: "Brazil",
  Bulgaria: "Bulgaria",
  Cambodia: "Cambodia",
  Canada: "Canada",
  Chile: "Chile",
  China: "China",
  Colombia: "Colombia",
  Costa_Rica: "Costa Rica",
  Croatia: "Croatia",
  Cuba: "Cuba",
  Cyprus: "Cyprus",
  Czech_Republic: "Czech Republic",
  Denmark: "Denmark",
  Dominican_Republic: "Dominican Republic",
  Ecuador: "Ecuador",
  Egypt: "Egypt",
  El_Salvador: "El Salvador",
  Estonia: "Estonia",
  Fiji: "Fiji",
  Finland: "Finland",
  France: "France",
  Germany: "Germany",
  Greece: "Greece",
  Guatemala: "Guatemala",
  Honduras: "Honduras",
  Hungary: "Hungary",
  Iceland: "Iceland",
  India: "India",
  Indonesia: "Indonesia",
  Ireland: "Ireland",
  Israel: "Israel",
  Italy: "Italy",
  Jamaica: "Jamaica",
  Japan: "Japan",
  Jordan: "Jordan",
  Kenya: "Kenya",
  Kuwait: "Kuwait",
  Latvia: "Latvia",
  Lebanon: "Lebanon",
  Lithuania: "Lithuania",
  Luxembourg: "Luxembourg",
  Malaysia: "Malaysia",
  Malta: "Malta",
  Mauritius: "Mauritius",
  Mexico: "Mexico",
  Monaco: "Monaco",
  Montenegro: "Montenegro",
  Morocco: "Morocco",
  Myanmar: "Myanmar",
  Nepal: "Nepal",
  Netherlands: "Netherlands",
  New_Zealand: "New Zealand",
  Nicaragua: "Nicaragua",
  Nigeria: "Nigeria",
  Norway: "Norway",
  Oman: "Oman",
  Pakistan: "Pakistan",
  Panama: "Panama",
  Paraguay: "Paraguay",
  Peru: "Peru",
  Philippines: "Philippines",
  Poland: "Poland",
  Portugal: "Portugal",
  Qatar: "Qatar",
  Romania: "Romania",
  Russia: "Russia",
  Saint_Kitts_and_Nevis: "Saint Kitts and Nevis",
  Saint_Lucia: "Saint Lucia",
  Saudi_Arabia: "Saudi Arabia",
  Serbia: "Serbia",
  Singapore: "Singapore",
  Slovakia: "Slovakia",
  Slovenia: "Slovenia",
  South_Africa: "South Africa",
  South_Korea: "South Korea",
  Spain: "Spain",
  Sri_Lanka: "Sri Lanka",
  Sweden: "Sweden",
  Switzerland: "Switzerland",
  Taiwan: "Taiwan",
  Tanzania: "Tanzania",
  Thailand: "Thailand",
  Trinidad_and_Tobago: "Trinidad and Tobago",
  Turkey: "Turkey",
  Uganda: "Uganda",
  Ukraine: "Ukraine",
  United_Arab_Emirates: "United Arab Emirates",
  United_Kingdom: "United Kingdom",
  United_States: "United States",
  Uruguay: "Uruguay",
  Venezuela: "Venezuela",
  Vietnam: "Vietnam",
  Zambia: "Zambia",
  Zimbabwe: "Zimbabwe",
} as const;

export type AirportCreatedByDataAttributes = { [key: string]: any };

export type AirportCreatedByData = {
  attributes?: AirportCreatedByDataAttributes;
  id?: number;
};

export type AirportCreatedBy = {
  data?: AirportCreatedByData;
};

export type AirportCountry =
  (typeof AirportCountry)[keyof typeof AirportCountry];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AirportCountry = {
  Argentina: "Argentina",
  Australia: "Australia",
  Austria: "Austria",
  Bahamas: "Bahamas",
  Bahrain: "Bahrain",
  Bangladesh: "Bangladesh",
  Belgium: "Belgium",
  Belize: "Belize",
  Brazil: "Brazil",
  Bulgaria: "Bulgaria",
  Cambodia: "Cambodia",
  Canada: "Canada",
  Chile: "Chile",
  China: "China",
  Colombia: "Colombia",
  Costa_Rica: "Costa Rica",
  Croatia: "Croatia",
  Cuba: "Cuba",
  Cyprus: "Cyprus",
  Czech_Republic: "Czech Republic",
  Denmark: "Denmark",
  Dominican_Republic: "Dominican Republic",
  Ecuador: "Ecuador",
  Egypt: "Egypt",
  El_Salvador: "El Salvador",
  Estonia: "Estonia",
  Fiji: "Fiji",
  Finland: "Finland",
  France: "France",
  Germany: "Germany",
  Greece: "Greece",
  Guatemala: "Guatemala",
  Honduras: "Honduras",
  Hungary: "Hungary",
  Iceland: "Iceland",
  India: "India",
  Indonesia: "Indonesia",
  Ireland: "Ireland",
  Israel: "Israel",
  Italy: "Italy",
  Jamaica: "Jamaica",
  Japan: "Japan",
  Jordan: "Jordan",
  Kenya: "Kenya",
  Kuwait: "Kuwait",
  Latvia: "Latvia",
  Lebanon: "Lebanon",
  Lithuania: "Lithuania",
  Luxembourg: "Luxembourg",
  Malaysia: "Malaysia",
  Malta: "Malta",
  Mauritius: "Mauritius",
  Mexico: "Mexico",
  Monaco: "Monaco",
  Montenegro: "Montenegro",
  Morocco: "Morocco",
  Myanmar: "Myanmar",
  Nepal: "Nepal",
  Netherlands: "Netherlands",
  New_Zealand: "New Zealand",
  Nicaragua: "Nicaragua",
  Nigeria: "Nigeria",
  Norway: "Norway",
  Oman: "Oman",
  Pakistan: "Pakistan",
  Panama: "Panama",
  Paraguay: "Paraguay",
  Peru: "Peru",
  Philippines: "Philippines",
  Poland: "Poland",
  Portugal: "Portugal",
  Qatar: "Qatar",
  Romania: "Romania",
  Russia: "Russia",
  Saint_Kitts_and_Nevis: "Saint Kitts and Nevis",
  Saint_Lucia: "Saint Lucia",
  Saudi_Arabia: "Saudi Arabia",
  Serbia: "Serbia",
  Singapore: "Singapore",
  Slovakia: "Slovakia",
  Slovenia: "Slovenia",
  South_Africa: "South Africa",
  South_Korea: "South Korea",
  Spain: "Spain",
  Sri_Lanka: "Sri Lanka",
  Sweden: "Sweden",
  Switzerland: "Switzerland",
  Taiwan: "Taiwan",
  Tanzania: "Tanzania",
  Thailand: "Thailand",
  Trinidad_and_Tobago: "Trinidad and Tobago",
  Turkey: "Turkey",
  Uganda: "Uganda",
  Ukraine: "Ukraine",
  United_Arab_Emirates: "United Arab Emirates",
  United_Kingdom: "United Kingdom",
  United_States: "United States",
  Uruguay: "Uruguay",
  Venezuela: "Venezuela",
  Vietnam: "Vietnam",
  Zambia: "Zambia",
  Zimbabwe: "Zimbabwe",
} as const;

export type AirportListResponseMetaPagination = {
  page?: number;
  /** @maximum 1 */
  pageCount?: number;
  /** @minimum 25 */
  pageSize?: number;
  total?: number;
};

export type AirportListResponseMeta = {
  pagination?: AirportListResponseMetaPagination;
};

export interface AirportListResponseDataItem {
  attributes?: Airport;
  id?: number;
}

export interface AirportListResponse {
  data?: AirportListResponseDataItem[];
  meta?: AirportListResponseMeta;
}

export interface AirportRequest {
  data: AirportRequestData;
}

export type AirportRequestDataState =
  (typeof AirportRequestDataState)[keyof typeof AirportRequestDataState];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AirportRequestDataState = {
  AL: "AL",
  AK: "AK",
  AZ: "AZ",
  AR: "AR",
  CA: "CA",
  CO: "CO",
  CT: "CT",
  DE: "DE",
  FL: "FL",
  GA: "GA",
  HI: "HI",
  ID: "ID",
  IL: "IL",
  IN: "IN",
  IA: "IA",
  KS: "KS",
  KY: "KY",
  LA: "LA",
  ME: "ME",
  MD: "MD",
  MA: "MA",
  MI: "MI",
  MN: "MN",
  MS: "MS",
  MO: "MO",
  MT: "MT",
  NE: "NE",
  NV: "NV",
  NH: "NH",
  NJ: "NJ",
  NM: "NM",
  NY: "NY",
  NC: "NC",
  ND: "ND",
  OH: "OH",
  OK: "OK",
  OR: "OR",
  PA: "PA",
  RI: "RI",
  SC: "SC",
  SD: "SD",
  TN: "TN",
  TX: "TX",
  UT: "UT",
  VT: "VT",
  VA: "VA",
  WA: "WA",
  WV: "WV",
  WI: "WI",
  WY: "WY",
} as const;

export type AirportRequestDataLoungesItem = number | string;

export type AirportRequestDataCountry =
  (typeof AirportRequestDataCountry)[keyof typeof AirportRequestDataCountry];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AirportRequestDataCountry = {
  Argentina: "Argentina",
  Australia: "Australia",
  Austria: "Austria",
  Bahamas: "Bahamas",
  Bahrain: "Bahrain",
  Bangladesh: "Bangladesh",
  Belgium: "Belgium",
  Belize: "Belize",
  Brazil: "Brazil",
  Bulgaria: "Bulgaria",
  Cambodia: "Cambodia",
  Canada: "Canada",
  Chile: "Chile",
  China: "China",
  Colombia: "Colombia",
  Costa_Rica: "Costa Rica",
  Croatia: "Croatia",
  Cuba: "Cuba",
  Cyprus: "Cyprus",
  Czech_Republic: "Czech Republic",
  Denmark: "Denmark",
  Dominican_Republic: "Dominican Republic",
  Ecuador: "Ecuador",
  Egypt: "Egypt",
  El_Salvador: "El Salvador",
  Estonia: "Estonia",
  Fiji: "Fiji",
  Finland: "Finland",
  France: "France",
  Germany: "Germany",
  Greece: "Greece",
  Guatemala: "Guatemala",
  Honduras: "Honduras",
  Hungary: "Hungary",
  Iceland: "Iceland",
  India: "India",
  Indonesia: "Indonesia",
  Ireland: "Ireland",
  Israel: "Israel",
  Italy: "Italy",
  Jamaica: "Jamaica",
  Japan: "Japan",
  Jordan: "Jordan",
  Kenya: "Kenya",
  Kuwait: "Kuwait",
  Latvia: "Latvia",
  Lebanon: "Lebanon",
  Lithuania: "Lithuania",
  Luxembourg: "Luxembourg",
  Malaysia: "Malaysia",
  Malta: "Malta",
  Mauritius: "Mauritius",
  Mexico: "Mexico",
  Monaco: "Monaco",
  Montenegro: "Montenegro",
  Morocco: "Morocco",
  Myanmar: "Myanmar",
  Nepal: "Nepal",
  Netherlands: "Netherlands",
  New_Zealand: "New Zealand",
  Nicaragua: "Nicaragua",
  Nigeria: "Nigeria",
  Norway: "Norway",
  Oman: "Oman",
  Pakistan: "Pakistan",
  Panama: "Panama",
  Paraguay: "Paraguay",
  Peru: "Peru",
  Philippines: "Philippines",
  Poland: "Poland",
  Portugal: "Portugal",
  Qatar: "Qatar",
  Romania: "Romania",
  Russia: "Russia",
  Saint_Kitts_and_Nevis: "Saint Kitts and Nevis",
  Saint_Lucia: "Saint Lucia",
  Saudi_Arabia: "Saudi Arabia",
  Serbia: "Serbia",
  Singapore: "Singapore",
  Slovakia: "Slovakia",
  Slovenia: "Slovenia",
  South_Africa: "South Africa",
  South_Korea: "South Korea",
  Spain: "Spain",
  Sri_Lanka: "Sri Lanka",
  Sweden: "Sweden",
  Switzerland: "Switzerland",
  Taiwan: "Taiwan",
  Tanzania: "Tanzania",
  Thailand: "Thailand",
  Trinidad_and_Tobago: "Trinidad and Tobago",
  Turkey: "Turkey",
  Uganda: "Uganda",
  Ukraine: "Ukraine",
  United_Arab_Emirates: "United Arab Emirates",
  United_Kingdom: "United Kingdom",
  United_States: "United States",
  Uruguay: "Uruguay",
  Venezuela: "Venezuela",
  Vietnam: "Vietnam",
  Zambia: "Zambia",
  Zimbabwe: "Zimbabwe",
} as const;

export type AirportRequestData = {
  accessDetails?: string;
  city: string;
  code: string;
  country: AirportRequestDataCountry;
  dayPass?: string;
  lounges?: AirportRequestDataLoungesItem[];
  name: string;
  state?: AirportRequestDataState;
};

export type ErrorErrorDetails = { [key: string]: any };

export type ErrorError = {
  details?: ErrorErrorDetails;
  message?: string;
  name?: string;
  status?: number;
};

export interface Error {
  /** @nullable */
  data?: ErrorData;
  error: ErrorError;
}

export type ErrorDataOneOfTwoItem = { [key: string]: any };

export type ErrorDataOneOf = { [key: string]: any };

/**
 * @nullable
 */
export type ErrorData = ErrorDataOneOf | ErrorDataOneOfTwoItem[] | null;
