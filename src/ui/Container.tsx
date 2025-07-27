import { cn } from "../utils/cn";
import type { FunctionComponent } from "react";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: FunctionComponent<ContainerProps> = ({
  children,
  className,
}) => (
  <div
    className={cn(
      "lg:px-[100px] mx-auto max-w-[1524px] px-[14px] w-[100%]",
      className
    )}
  >
    {children}
  </div>
);

export default Container;
