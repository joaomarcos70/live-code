const dataBase = require('../models')

class PessoaController {

    static async pegarTodasPessoas(req, res) {
        try {
            const pessoas = await dataBase.Pessoas.findAll()
            res.status(200).json(pessoas)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const umaPessoa = await dataBase.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await dataBase.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Pessoas.update(novasInfos, { where: { id: Number(id) } })
            const pessoaAtualizada = await dataBase.Pessoas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //deletar um registro
    static async apagaPessoa(req, res) {
        const { id } = req.params
        try {
            await dataBase.Pessoas.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ mensagem: `id ${id} deletado` })

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController