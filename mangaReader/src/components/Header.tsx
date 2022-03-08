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
      <button className="bg-blue-500 py-2 sm:py-3 px-6 rounded-lg shadow-lg shadow-glow text-white">
        Get Started
      </button>
    </ul>
  );
}
