type VenueInfo = {
  venue_address: string;
  venue_address_list: string[];
  venue_dwell_time_avg: number;
  venue_dwell_time_max: number;
  venue_dwell_time_min: number;
  venue_id: string;
  venue_lat: number;
  venue_lon: number;
  venue_name: string;
  venue_timezone: string;
  venue_type: string;
  venue_types: string[];
};

type Window = {
  day_window: string;
  day_window_end_int: number;
  day_window_end_txt: string;
  day_window_start_int: number;
  day_window_start_txt: string;
  time_window_end: number;
  time_window_end_12h: string;
  time_window_end_ix: number;
  time_window_start: number;
  time_window_start_12h: string;
  time_window_start_ix: number;
};

type Analysis = {
  day_raw: number[];
};

export type FootTraffic = {
  analysis: Analysis;
  epoch_analysis: number;
  forecast_updated_on: string;
  status: string;
  venue_info: VenueInfo;
  window: Window;
};
