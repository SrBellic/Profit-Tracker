import { Input as InputProps } from "../../interfaces/interfaces";

interface Props {
  type: InputProps["type"];
  placeHolder: InputProps["placeHolder"];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, placeHolder, onChange }: Props) {
  return (
    <input
      type={type}
      className="bg-white border-2 rounded-md border-stone-400 focus:ring-4 focus:ring-indigo-400 w-40"
      placeholder={placeHolder}
      onChange={onChange}
    />
  );
}
