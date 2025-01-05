import "./App.css";
import { DonutChart, LineChart } from "./components/Charts/Charts";
import { CalculatorForm } from "./components/features/Form/Form";
import Header from "./components/Layout/Header";

function App() {
  return (
    <>
      <Header />
      <section className="flex justify-center gap-x-32 border-2 border-gray-200 p-10 rounded-lg shadow-lg shadow-gray-400">
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
