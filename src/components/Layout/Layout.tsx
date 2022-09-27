type Props = {
  header: React.ReactElement,
  footer: React.ReactElement,
  children: React.ReactElement
}

const Layout = (props: Props) => {
  const { children, header, footer } = props;
  return (
    <div>
      {header}
      <main>
        {children}
      </main>
      {footer}
    </div>
  );
}

export { Layout };
