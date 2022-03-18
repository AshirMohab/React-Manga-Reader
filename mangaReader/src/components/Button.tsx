import { MouseEventHandler } from "react";
import { ButtonProp } from "../componentTypes/componentTypes";

export default function ButtonComponent(props: ButtonProp) {
  //children as props.
  // onClick as prop.
  // addClass prop using $
  const { children, onClickProp } = props;

  return (
    <button
      className="bg-blue-700 py-2 sm:py-3 px-6 rounded-lg shadow-lg shadow-glow text-blue-100"
      onClick={onClickProp}
    >
      {children}
    </button>
  );
}
