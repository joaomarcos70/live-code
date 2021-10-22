const dataBase = require('../models')

class PessoaController{

   static async pegarTodasPessoas(req, res){
        try {
            const pessoas = await dataBase.Pessoas.findAll()
            res.status(200).json(pessoas)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = PessoaController