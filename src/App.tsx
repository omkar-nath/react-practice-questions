import "./App.css";
import ListTable, { TData, Column } from "./ListTable";

type Data = {
  name: string;
  email: string;
  group: string;
};

function App() {
  const columns: Column<Data>[] = [
    {
      name: "Name",
      header: "Name",
      key: "name",
      cell: (row: Data) => row.name,
    },
    {
      name: "email",
      header: "Email",
      key: "email",
      cell: (row: Data) => row.name,
    },
    {
      name: "group",
      header: "Group",
      key: "group",
      cell: (row: Data) => row.group,
    },
  ];

  const data: Array<TData<Data>> = [
    {
      name: "Naruto Uzumaki",
      email: "narutohinata@gmail.com",
      group: "Hokage",
    },
    {
      name: "Saturo Gojo",
      email: "sukunaSaturo@gmail.com",
      group: "Sorcerer",
    },
    ,
    {
      name: "Kamado Tanjiro",
      email: "kamado@gmail.com",
      group: "Demons Slayer",
    },
  ];

  return (
    <div>
      <h1>My custom table</h1>

      <ListTable caption={"My table"} data={data} columns={columns} />
    </div>
  );
}

export default App;
