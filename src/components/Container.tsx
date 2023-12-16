import { type ElementType } from "react";

// polymorphic component
type ContainerProps = {
  as: ElementType;
};

export default function Container({ as }: ContainerProps) {
  const Component = as;
  return <Component />;
}
