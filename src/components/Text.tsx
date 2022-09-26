// type React.ReactNode = string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined
// PropsWithChildren
// PropsWithoutChildren

type Props = {
  readonly children: string;
}

// const Text: React.FC = (props) => {
const Text = (props: Props) => {
  return (<p>{props.children}</p>);
}

export { Text };
