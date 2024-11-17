import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  absoluteContentRight?: string;
  absoluteContentLeft?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex pb-2 h-9 w-full border-b-2 border-navy bg-transparent pr-3 py-1 text-base transition-colors focus:outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            props.absoluteContentLeft && "pl-8",
            className
          )}
          ref={ref}
          {...props}
        />
        {props.absoluteContentRight && (
          <div className={cn("absolute top-1/2 -translate-y-1/2 right-2")}>
            <p className="text-xs">{props.absoluteContentRight}</p>
          </div>
        )}
        {props.absoluteContentLeft && (
          <div className={cn("absolute top-1/2 -translate-y-1/2 left-0")}>
            {props.absoluteContentLeft}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
