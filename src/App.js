import SelectBox from "./components/SelectBox";
import useGetData from "./utils/useGetData";

function App() {
  useGetData();
  return (
    <div className="App">
      <SelectBox />
    </div>
  );
}

export default App;
