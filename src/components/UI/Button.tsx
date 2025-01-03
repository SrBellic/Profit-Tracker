import { Button as ButtonProps } from "../../interfaces/interfaces";

export default function Button({ text, color, borderNone }: ButtonProps) {
  return (
    <button
      className={`px-3 py-1 border-2 rounded-md text-white font-bold ${borderNone} ${color}`}
    >
      {text}
    </button>
  );
}
