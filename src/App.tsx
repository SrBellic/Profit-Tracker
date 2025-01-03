import "./App.css";
import { DonutChart, LineChart } from "./components/Charts/Charts";
import { CalculatorForm } from "./components/features/Form";

function App() {
  return (
    <>
      <div className="text-3xl m-7 flex justify-between">
        <h1 className="">
          <b>Profit Tracker</b>
        </h1>
        <h2>Balance: N/A</h2>
      </div>
      <section className="flex border-2 border-gray-200 p-10 rounded-lg shadow-lg shadow-gray-400">
        <div className="w-2/5">
          <DonutChart />
        </div>
        <div className="w-1/2">
          <CalculatorForm />
          <LineChart />
        </div>
      </section>
    </>
  );
}

export default App;
