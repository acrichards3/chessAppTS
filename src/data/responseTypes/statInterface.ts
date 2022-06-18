export interface Player {
  black: {
    id: string;
    rating: number;
    result: string;
    username: string;
    uuid: string;
  };
  end_time: number;
  fen: string;
  initial_setup: string;
  pgn: string;
  rated: boolean;
  rules: string;
  start_time: number;
  tcn: string;
  time_class: string;
  time_control: string;
  url: string;
  uuid: string;
  white: {
    id: string;
    rating: number;
    result: string;
    username: string;
    uuid: string;
  };
}