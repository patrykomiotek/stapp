import { memo } from 'react';
// type React.ReactNode = string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined
// PropsWithChildren
// PropsWithoutChildren

type Props = {
  readonly children: string;
}

// const Text: React.FC = (props) => {
const Text = memo((props: Props) => {
  console.log('render: Text');
  return (
    <p>{props.children}</p>
  );
});

export { Text };
