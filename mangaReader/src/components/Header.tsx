import React, { useState } from "react";
import { LOADINGSTATE } from "../models/loadingState";
import { NavProps, HeadProps } from "../componentTypes/componentTypes";

const Nav = (props: NavProps) => {
  const { name } = props;
  return <li className="hover:text-blue-400 hover:cursor-pointer">{name}</li>;
};

export default function HearderCard(props: HeadProps) {
  const { tags } = props;

  return (
    <ul className="flex md:flex-row font-semibold text-sm items-center px-6 gap-5 sm:gap-24 sm:flex-col">
      {tags.map((tag) => (
        <Nav name={tag} key={tag} />
      ))}
    </ul>
  );
}
