export enum SortOrder {
  ASC = "ascending",
  DESC = "descending",
}

export type Column<T> = {
  name: string;
  key: string;
  cell: (row: T) => any;
  header: string;
  defaultSortOrder?: SortOrder;
};
