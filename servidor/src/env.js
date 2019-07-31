/* eslint-disable no-console */
// verifica se todas as variáveis de ambiente estão definidas
import path from 'path'
import dotenv from 'dotenv'

const arquivoPontoEnv = path.join(__dirname, '../.env')
dotenv.config({ path: arquivoPontoEnv })

let comErro = false

if (process.env.PORTA === undefined) {
  console.log('Variável PORTA não definida!. Defina no arquivo servidor/.env')
  console.log('Exemplo: PORTA=3000')
  comErro = true
}

if (comErro) {
  process.exit(1)
}

const PORTA = parseInt(process.env.PORTA)
export { PORTA }
