import "./App.css";
import { DonutChart } from "./components/Charts/Charts";
import { CalculatorForm } from "./components/features/Form";

function App() {
  return (
    <>
      <h1 className="text-3xl m-7">
        <b>Profit Tracker</b>
      </h1>
      <section className="flex flex-cols justify-between">
        <div className="w-1/2">
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
