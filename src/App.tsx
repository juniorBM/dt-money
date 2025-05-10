import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GloblalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { TransactionProvider } from "./contexts/TransactionContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GloblalStyle />
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  );
}
