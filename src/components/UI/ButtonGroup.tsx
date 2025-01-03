import { BUTTON_COLORS } from "../../utils/constants";
import Button from "./Button";

export default function ButtonGroup() {
  return (
    <div>
      <Button text="Gastos" color={BUTTON_COLORS.red} />
      <Button
        borderNone="border-x-0"
        text="Ahorros"
        color={BUTTON_COLORS.blue}
      />
      <Button text="Ingresos" color={BUTTON_COLORS.green} />
    </div>
  );
}
