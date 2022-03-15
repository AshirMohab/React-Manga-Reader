import { ButtonProp } from "../props/componentTypes";

export default function ButtonComponent(description: ButtonProp) {
  const { name } = description;
  return (
    <button className="bg-blue-500 py-2 sm:py-3 px-6 rounded-lg shadow-lg shadow-glow text-white">
      {name}
    </button>
  );
}
