import { ButtonProp } from "../props/componentTypes";

export default function ButtonComponent(description: ButtonProp) {
  const { name } = description;
  return (
    <button className="bg-blue-100 py-2 sm:py-3 px-6 rounded-lg shadow-lg shadow-glow text-orange-700">
      {name}
    </button>
  );
}
