const modelMedico = require('../model/MedicoModel');
const router = express.Router();
const express = require('express');

const app = express()

app.use(cors())

const medico = [
    {
        name: 'Paulo',
        email: paulo123@gmail.com,
        telefone: 11956236577
    }
]


require: NodeRequire;

function createLi(name= 'anonimo', email= '', telefone = 0) {
    const li = document.createElement('li')
    li.innerText = `${name} tem ${email} tem ${telefone} num`
    return li
}

router.get('/listarCategoria', (req, res)=>{

    modelmedico.findAll()
        .then(
            (medico)=>{
                return res.status(200).json(medico);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Ocorreu um erro ao selecionar os dados do medico',
                    erroBancoDados: erro
                });
            }
        );
});

router.get('/listarMedico/:id',(req, res)=>{

    let {id} = req.params;

        modelmedico.findByPk(id)
            .then(
                (medico)=>{
                    res.status(200).json(medico);
                }
            ).catch(
                (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Ocorreu um erro ao selecionar os dados do médico',
                        erroBancoDados: erro
                    });
                }
        );});

router.post('/inserirmedico', (req, res)=>{

    let {nome_medico} = req.body;
    
    modelmedico.create(
        {nome_medico}
    ).then(
        ()=>{
                return res.status(201).json({
                    erroStatus: false,
                    menssagemStatus: 'medico inserido com sucesso!'
            });
        }
    ).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'ocorreu um erro ao cadastrar o médico',
                        erroBancoDados: erro
                    });
        }
    );
});

router.put('/alterarMédico', (req, res)=>{

    let {id, nome_medico} = req.body;

    modelmedico.update(
        {nome_medico},
        {where:{id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'médico alterado com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'ocorreu um erro ao alterar o médico',
                        erroBancoDados: erro
                    });
        }
    );

});

router.delete('/excluirMédico/:id', (req, res)=>{

    let {id} = req.params;

    modelmedico.destroy(
        {where: {id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'médico excluido com sucesso'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Ocorreu um erro ao excluir o médico',
                        erroBancoDados: erro
                    });
        }
    );});

module.exports = router;