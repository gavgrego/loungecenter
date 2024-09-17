interface Airport {
  id?: number;
  Name?: string;
  createdAt?: string;
  updatedAt?: string;
  Code?: string;
  City?: string;
  State?: string;
  Country?: string;
}

export interface LoungeHit {
  id?: number;
  name?: string;
  createdAt?: string;
  updatedAt?: string;
  locale?: string;
  url?: string;
  amenities?: any;
  detriments?: any;
  airport?: Airport;
  objectID?: string;
}
