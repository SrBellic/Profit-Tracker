import { useState } from "react";
import { CHART_LABELS as LABELS } from "../../../utils/constants";
import Input from "../../UI/Input";
import "./form.module.css";
import ButtonGroup from "../../UI/ButtonGroup";

export function CalculatorForm() {
  const [placeHolder, setPlaceHolder] = useState({
    value: ["ingresos", "gastos", "ahorros"],
    content: LABELS.BALANCE,
  });

  const [selectedValue, setSelectedValue] = useState(placeHolder.content[0]);
  // Maneja el evento de selección en un elemento <select>
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex; // Obtiene el índice del elemento seleccionado
    setSelectedValue(placeHolder.content[selectedIndex]); // Actualiza el valor seleccionado basado en el índice
  };

  // Maneja el cambio de entrada en un elemento <input>
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value; // Obtiene el nuevo valor del input
    setPlaceHolder((prevState) => ({
      ...prevState, // Mantiene el estado previo
      value: [newValue, ...prevState.value.slice(1)], // Actualiza el primer valor en el array 'value' con el nuevo valor
    }));
  };

  return (
    <>
      <form className="">
        <div className="flex justify-end">
          <Input
            type="number"
            placeHolder={`Cantidad: ${selectedValue}`}
            onChange={handleInputChange}
          />
          <ButtonGroup />
          <select name="algo" className="ms-3" onChange={handleSelect}>
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
