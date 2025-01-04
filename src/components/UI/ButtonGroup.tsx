import { BUTTON_COLORS } from "../../utils/constants";
import Button from "./Button";

export default function ButtonGroup() {
  return (
    <>
      <Button
        onClick={() => console.log("Gastos")}
        text="Gastos"
        borderNone="border-r-0"
        color={BUTTON_COLORS.gray}
        rounded={true}
        position="left"
      />
      <Button
        onClick={() => console.log("Ahorros")}
        text="Ahorros"
        borderNone="border-x-0"
        color={BUTTON_COLORS.gray}
        rounded={false}
        position="center"
      />
      <Button
        onClick={() => console.log("Ingresos")}
        text="Ingresos"
        borderNone="border-l-0"
        color={BUTTON_COLORS.gray}
        rounded={true}
        position="right"
      />
    </>
  );
}
