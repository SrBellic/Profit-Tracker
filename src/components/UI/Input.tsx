import { Input as InputProps } from "../../interfaces/interfaces";

interface Props {
  type: InputProps["type"];
}

export default function Input({ type }: Props) {
  return (
    <input
      type={type}
      className="bg-white border-2 rounded-md border-stone-400 focus:ring-4 focus:ring-indigo-400 w-full"
    ></input>
  );
}
