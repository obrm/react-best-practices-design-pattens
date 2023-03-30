import { useTheme } from '../context/ThemeContext';

function ThemedButton() {
  const theme = useTheme();

  return <button theme={theme}>Themed button</button>;
}

export default ThemedButton;