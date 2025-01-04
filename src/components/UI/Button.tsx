import { Button as ButtonProps } from "../../interfaces/interfaces";

export default function Button({
  text,
  color,
  position,
  rounded,
  borderNone,
  onClick,
}: ButtonProps) {
  const buttonPosition = (position?: ButtonProps["position"]) => {
    const positions = {
      left: "rounded-s-md",
      right: "rounded-e-md",
      center: "",
      top: "rounded-t-md",
      bottom: "rounded-b-md",
    };
    return position ? positions[position] : "";
  };

  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 border-2 text-white font-bold ${borderNone} ${color} ${
        rounded ? buttonPosition(position) : ""
      } transition focus:ring-[4px] focus:ring-indigo-400 outline-none`}
    >
      {text}
    </button>
  );
}
