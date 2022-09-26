import { forwardRef, MouseEventHandler, Ref } from "react";

type Props = {
  children: string;
  handleMouseEnter: MouseEventHandler<HTMLButtonElement>
}

// const MagicButton = ({ children }: Props) => <button>{children}</button>;

export const MagicButton = forwardRef(
  (
    props: Props,
    ref: Ref<HTMLButtonElement>
  ) => {
    const { children, handleMouseEnter } = props;
    return (
      <button ref={ref} onMouseEnter={handleMouseEnter}>
        {children}
      </button>
    );
  },
);

