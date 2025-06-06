import type { ReactNode } from "react";

export default function ErrorMessage({children}: {children:ReactNode}) {
  return (
    <p className="text-center text-sm pb-2 border-b text-red-700/90 font-bold uppercase">
      *{children}*
    </p>
  )
}
