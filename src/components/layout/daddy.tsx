import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface DaddyProps {
  children: ReactNode; // Explicitly declare the 'children' prop
  className?: string;
}

const Daddy = ({ children, className }: DaddyProps) => {
  return (
    <main className={cn("flex flex-col min-h-screen w-full px-24", className)}>
      {children}
    </main>
  );
};

export default Daddy;
