export type CarDataType = [
  {
    name: string;
    color: string;
    id: number;
  }
];
export type CarDataWinType = [
  {
    id: number;
    wins: number;
    time: number;
  }
];
export type CarSelectType = {
  name: string;
  color: string;
  id: number;
};
export type WinnerType = {
  name: string;
  color: string;
  id: number;
  time: number;
  position: number;
};
export type WinnersType = [
  {
    name: string;
    color: string;
    id: number;
    wins: number;
    time: number;
  }
];
export type StringReactType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export type NumberReactType = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};
