export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 1000
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  //Obter nome
  getName = (): string => {
    return this.name
  }

  //Ver o numero da conta
  getAccoumtNumber = (): number => {
    return this.accountNumber
  }

  //Metódo que faz o depositoo
  setDeposit = (depositAmount: number): void => {
    if (this.validateStatus()) {
      this.deposit(depositAmount)
      console.log(
        `${this.name}, saldo atualizado de ${
          this.balance - depositAmount
        } para $${this.balance}`
      )
    }
  }

  private deposit = (depositAmount: number): number => {
    const newBalance: number = this.balance + depositAmount
    return this.setBalance(newBalance)
  }

  //Metódo que faz o saque
  setWithdraw = (requestedAmount: number): void => {
    this.withdraw(requestedAmount)
    console.log(
      `${this.name}, você sacou $${requestedAmount}, seu novo saldo é de $${this.balance}`
    )
  }

  private withdraw = (requestedAmount: number): number => {
    const validateWithdraw: boolean =
      this.status && this.balance > requestedAmount
    if (validateWithdraw) {
      const newBalance: number = this.balance - requestedAmount
      return this.setBalance(newBalance)
    }

    throw new Error(
      `${this.name} seu saldo é menor que o valor requerido. Saldo: ${this.balance}`
    )
  }

  //Metódo que obtem o saldo
  getBalance = (): number => {
    return this.balance
  }

  //Metódo que altera o saldo
  private setBalance = (value: number): number => {
    return (this.balance = value)
  }

  //Validação do estado da conta
  readonly validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error("Conta inválida")
  }
}
