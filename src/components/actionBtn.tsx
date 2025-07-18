import { ReactNode } from "react";

export default function ActionBtn({ children }: { children: ReactNode }) {
  return (
    <button
      type="submit"
      className="p-2 rounded-full size-9 hover:bg-blue-600 cursor-pointer"
    >
      {children}
    </button>
  );
}
