import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export const UIProvider = ({ children, theme }: any) => {
  return (
    <MantineProvider theme={createTheme(theme)}>{children}</MantineProvider>
  );
};
