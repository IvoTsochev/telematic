export interface IGame {
  image: string;
  id: number;
  category: string;
  categories: string[];
  game_type_code: string;
  name: string;
  provider: string;
  big: number;
  released: string;
  index: number;
  order: {
    csn: number;
    trn: number;
    rlt: number;
    prm: number;
    nw: number;
  };
  isMobileGame: boolean;
  isDesktopGame: boolean;
  lines: number;
  mainCategory: string;
  betMin: string;
  betMax: string;
  imageModern: {
    modern: string;
    fallback: string;
  };
}
