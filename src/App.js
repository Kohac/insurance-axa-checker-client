import CheckListButtons from "./Components/UI/CheckListButton";
import CheckListTable from "./Components/UI/CheckListTable";
import FileUploadButton from "./Components/UI/FileUploadButton";
import InsuranceTable from "./Components/UI/InsuranceTable";
import Navigation from "./Components/UI/Navigation";

function App() {
  return (
    <div className="container">
      <Navigation />
      <CheckListTable />
      <CheckListButtons />
      <InsuranceTable />
    </div>
  );
}

export default App;
