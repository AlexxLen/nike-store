export type SneakersItem = {
  id: string;
  title: string;
  text: string;
  rating: number;
  img: string;
  price: number;
  color: string;
  shadow: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type SneakersSliceState = {
  items: SneakersItem[];
  popularItems: SneakersItem[];
  status: Status;
};
