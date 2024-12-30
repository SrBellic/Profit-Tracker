import { useState } from "react";
import Input from "../UI/Input";

export function CalculatorForm() {
  const [placeHolder, setPlaceHolder] = useState({
    value: ["ingresos", "gastos", "ahorros"],
    content: ["Ingresos", "Gastos", "Ahorros"],
  });

  const [selectedValue, setSelectedValue] = useState(placeHolder.content[0]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex;
    setSelectedValue(placeHolder.content[selectedIndex]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setPlaceHolder((prevState) => ({
      ...prevState,
      value: [newValue, ...prevState.value.slice(1)],
    }));
  };

  return (
    <>
      <form className="">
        <div className="flex">
          <Input
            type="number"
            placeHolder={`Cantidad: ${selectedValue}`}
            onChange={handleInputChange}
          />
          <select name="algo" className="mx-2" onChange={handleSelect}>
            {placeHolder.value.map((item, index) => (
              <option key={item} value={item}>
                {placeHolder.content[index]}
              </option>
            ))}
          </select>
        </div>
      </form>
    </>
  );
}
