import { DioAccount } from "./DioAcount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  //Obter emprestimo
  getLoan = (loanAmount: number): void => {
    this.setDeposit(loanAmount)
  }
}
