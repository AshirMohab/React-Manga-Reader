import React, { useState } from "react";
import { LOADINGSTATE } from "../models/loadingState";

export type HeadProps = {
  tags: string[];
};

export type NavProps = {
  name: string;
};

const Nav = (props: NavProps) => {
  const { name } = props;
  return <li className="hover:text-blue-400 hover:cursor-pointer">{name}</li>;
};

export default function HearderCard(props: HeadProps) {
  const { tags } = props;

  return (
    <ul className="flex flex-row font-semibold text-sm items-center px-6 gap-5 sm:gap-24">
      {tags.map((tag) => (
        <Nav name={tag} key={tag} />
      ))}
    </ul>
  );
}
