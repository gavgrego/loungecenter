export type GooglePlace = {
  formattedAddress: string;
  rating: number;
  internationalPhoneNumber: string;
  currentOpeningHours: {
    openNow: boolean;
    periods: {
      open: {
        day: string;
        time: string;
      };
      close: {
        day: string;
        time: string;
      };
    }[];
    weekdayDescriptions: string[];
  };
  review: Review[];
  photos: {
    name: string;
    widthPx: number;
    heightPx: number;
    authorAttributions: string[];
  }[];
};

type Review = {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: {
    text: string;
    languageCode: string;
  };
  originalText: {
    text: string;
    languageCode: string;
  };
  authorAttribution: {
    displayName: string;
    uri: string;
    photoUri: string;
  };
  publishTime: string;
};
