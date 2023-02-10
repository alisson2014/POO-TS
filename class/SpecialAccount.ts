import { DioAccount } from "./DioAcount"

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  specialDeposit = (depositAmount: number) => {
    this.setDeposit(depositAmount + 10)
  }
}
