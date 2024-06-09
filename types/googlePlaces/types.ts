export type GooglePlace = {
  formattedAddress: string;
  rating: number;
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
  photos: {
    name: string;
    widthPx: number;
    heightPx: number;
    authorAttributions: string[];
  }[];
}
