import { PeopleAccount } from "./class/PeopleAcount"
import { CompanyAccount } from "./class/CompanyAccount"
import { SpecialAccount } from "./class/SpecialAccount"

const peopleAccount: PeopleAccount = new PeopleAccount(5, "Alisson", 154)
const companyAccount: CompanyAccount = new CompanyAccount("Casas bahia", 189)
const specialAccount: SpecialAccount = new SpecialAccount("Alisson", 189)

//Método que retorna o número da conta
console.log(peopleAccount.getAccoumtNumber())

//Método que retorna o nome da conta
console.log(peopleAccount.getName())

//Método que retorna o saldo da conta
console.log(peopleAccount.getBalance())

//Método que faz o deposito
peopleAccount.setDeposit(1500)

//Metodo que faz o saque
peopleAccount.setWithdraw(1000)

//Método que verifica o status da conta
console.log(peopleAccount.validateStatus())

//Método que faz o empréstimo para empresas
companyAccount.getLoan(10000)

//Método que faz o depósito acrescido de 10 reais ao valor
specialAccount.specialDeposit(150)
