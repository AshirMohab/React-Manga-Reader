export type ButtonProp = {
  name: string;
};

export default function ButtonComponent(prop: ButtonProp) {
  const { name } = prop;
  return (
    <button className="bg-blue-500 py-2 sm:py-3 px-6 rounded-lg shadow-lg shadow-glow text-white">
      {name}
    </button>
  );
}
