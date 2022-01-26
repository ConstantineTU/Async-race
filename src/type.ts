export type carDataType = [{
  name: string,
  color: string,
  id: number,
}];
export type carDataWinType = [{
  id: number,
  wins: number,
  time: number,
}];
export type carSelectType = {
  name: string,
  color: string,
  id: number,
};
export type winnerType = {

  name: string;
  color: string;
  id: number;
  time: number;
  position: number;

}
export type winnersType = [{

  name: string;
  color: string;
  id: number;
  wins: number;
  time: number;

}]
export type stringReactType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export type numberReactType = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}