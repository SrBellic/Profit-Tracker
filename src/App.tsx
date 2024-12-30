import "./App.css";
import { DonutChart } from "./components/Charts/Charts";
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
      <section className="flex flex-cols justify-between border-2 border-gray-200 p-10 rounded-lg">
        <div className="w-2/5">
          <DonutChart />
        </div>
        <div className="w-56">
          <CalculatorForm />
        </div>
      </section>
    </>
  );
}

export default App;
