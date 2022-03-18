import { MouseEventHandler } from "react";
import { ButtonProp } from "../componentTypes/componentTypes";

export default function ButtonComponent(props: ButtonProp) {
  const { children, onClickProp } = props;
  return (
    <button className="btn-primary shadow-lg shadow-glow" onClick={onClickProp}>
      {children}
    </button>
  );
}
