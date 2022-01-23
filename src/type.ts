export type carDataType = [{
  name: string,
  color: string,
  id: number,
}];
export type carSelectType = {
  name: string,
  color: string,
  id: number,
};

export type stringReactType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export type numberReactType = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}