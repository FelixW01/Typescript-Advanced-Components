import { type ReactNode, type ElementType } from "react";

// polymorphic component
type ContainerProps = {
  as: ElementType;
  children: ReactNode;
};

export default function Container({ as, children }: ContainerProps) {
  const Component = as;
  return <Component>{children}</Component>;
}
