import { TableTaxt } from "./components/UI/TableTaxt";
import { Columns, Data } from "./utils/constants/table";

export const App = () => {
  // console.log("render");

  return (
    <div>
      <div>
        <TableTaxt rows={Data} columns={Columns}/>
      </div>
    </div>
  );
};
