import React from "react";

export enum ESize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum EType {
  REGULAR = "regular",
  OUTLINE = "outline",
}

interface IProps {
  size?: ESize;
  type?: EType;
  color?: {
    default: string;
    hover: string;
    active: string;
  };
}

export default function Button({
  size = ESize.MEDIUM,
  type = EType.REGULAR,
  color,
}: IProps) {
  const sizeClass =
    size === ESize.SMALL
      ? "w-[91px] h-[28px] text-xs"
      : size === ESize.MEDIUM
      ? "w-[140px] h-[40px] text"
      : "w-[165px] h-[52px] text-xl";
  const colorClass =
    type === EType.REGULAR
      ? "bg-[#0A344F] hover:bg-[#001B36] active:bg-[#0A344F] text-white"
      : "bg-transparent text-[#FF0054] hover:text-[#E6003B] active:text-[#CC0021] border border-solid border-[#FF0054] hover:border-[#E6003B] active:border-[#CC0021";

  return (
    <button
      className={`${sizeClass} ${colorClass} rounded-lg font-bold text-white`}
      style={{ margin: "10px" }}
    >
      Click me
    </button>
  );
}
