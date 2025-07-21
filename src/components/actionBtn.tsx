import { ReactNode } from "react";

export default function ActionBtn({
  children,
  type,
  onClick,
}: {
  children: ReactNode;
  type?: "submit";
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="p-2 rounded-full hover:bg-blue-600 cursor-pointer outline outline-blue-600"
    >
      {children}
    </button>
  );
}
