import './App.css';

import tableData from "./jsonData/tableData.json"
import tableDataConfig1 from "./jsonData/tableDataConfig1.json";
import tableDataConfig2 from "./jsonData/tableDataConfig2.json";
import tableDataConfig3 from "./jsonData/tableDataConfig3.json";
import tableDataConfig4 from "./jsonData/tableDataConfig4.json"

import Table from './component/Table';
function App() {
  return (
    <div className="App">
      <Table tableData={tableData} tableDataConfig={tableDataConfig4}/>
      <Table tableData={tableData} tableDataConfig={tableDataConfig1}  />
      <Table  tableData={tableData} tableDataConfig={tableDataConfig2}/>
      <Table  tableData={tableData} tableDataConfig={tableDataConfig3}/>
    </div>
  );
}

export default App;
