import { forwardRef, MouseEventHandler, ForwardedRef } from "react";

type Props = {
  children: string;
  handleMouseEnter: MouseEventHandler<HTMLButtonElement>
}

// const MagicButton = ({ children }: Props) => <button>{children}</button>;

const MagicButton = forwardRef(
  ({ children, handleMouseEnter }: Props,
  ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <button
      ref={ref}
      onMouseEnter={handleMouseEnter}>{children}</button>
  );
}
);

export { MagicButton };
