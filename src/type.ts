export type CarDataType = [CarSelectType];
export type CarDataWinType = [Omit<WinnersType, 'name' | 'color'>];
export type CarSelectType = Omit<WinnerType, 'time' | 'position'>;
export type WinnerType = {
  name: string;
  color: string;
  id: number;
  time: number;
  position: number;
};
export type WinnersType =
  {
    name: string;
    color: string;
    id: number;
    wins: number;
    time: number;
  }
  ;
export type StringReactType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export type NumberReactType = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

export type BooleanReactType = {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};
