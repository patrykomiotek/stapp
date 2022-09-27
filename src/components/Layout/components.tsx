export const Header = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <header>
      Link 1 | Link 2 | {isLoggedIn ? 'My Account' : 'Log in'}
      <hr />
    </header>
  );
}

export const Footer = () => {
  return (
    <footer>
      <hr />
      &copy; 2022 Stretto
    </footer>
  );
}
