import { useRef, MouseEventHandler } from "react";

type Props = {
  children: string;
}

// const MagicButton = ({ children }: Props) => <button>{children}</button>;

const MagicButton = (props: Props) => {
  const { children } = props;
  const buttonElemRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
    if (buttonElemRef.current) {
      buttonElemRef.current.style.background = 'blue';
      buttonElemRef.current.style.color = 'white';
    }
  }

  return (
    <button
      ref={buttonElemRef}
      onMouseEnter={handleMouseEnter}>{children}</button>
  );
}

export { MagicButton };
