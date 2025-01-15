import { Column } from "./types";

type Props<T> = {
  caption?: string;
  columns: Array<Column<T>>;
  data: T[];
  noDataText?: string;
  errorText?: string;
};

const ListTable = <T,>({
  caption = "Sample Table",
  columns,
  data,
}: Props<T>) => {
  return (
    <table>
      <caption>{caption}</caption>
      <thead>
        {columns.map(({ header }) => {
          return <th>{header}</th>;
        })}
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column.name}>{column.cell(row)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListTable;
