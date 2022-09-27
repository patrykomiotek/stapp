import { useThemeContext } from './ThemeProvider';

const ThemeSwitcher = () => {
  const context =  useThemeContext();
  return (
    <button onClick={() => context.toggleTheme()}>Toggle</button>
  );
}

export { ThemeSwitcher };
