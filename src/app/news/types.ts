export type NewsItem = {
  id: string;
  img: string;
  title: string;
  text: string;
  likeCount: number;
  time: number;
  author: string;
  url: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type NewsSliceState = {
  items: NewsItem[];
  status: Status;
};
