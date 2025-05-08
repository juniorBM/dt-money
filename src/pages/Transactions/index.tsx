import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 40k</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/01/2025</td>
            </tr>
          </tbody>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighLight variant="outcome">-R$ 30k</PriceHighLight>
            </td>
            <td>Venda</td>
            <td>13/01/2025</td>
          </tr>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
