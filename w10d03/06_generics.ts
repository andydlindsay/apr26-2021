interface IContainer<T, N> {
  title: string;
  contents: T;
  moreStuff?: N;
}

const stringContainer: IContainer<string, boolean> = {
  title: 'string container',
  contents: 'contents',
  moreStuff: false
};

const numberContainer: IContainer<number, string> = {
  title: 'number container',
  contents: 42,
  moreStuff: 'hello there'
};
