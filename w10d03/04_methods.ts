interface IAuthor {
  fullName: string;
  penName?: string;
  books: string[];

  writeBook: (bookTitle: string) => number
}

const agatha: IAuthor = {
  fullName: 'Agatha Christie',
  books: [],
  writeBook: (bookTitle: string) => {
    return 7;
  }
};
