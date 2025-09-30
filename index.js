import colecaoUf from "./dados/dados.js"; //tem q trocar
import express from 'express';
import { buscarUfs } from "./servicos/sevico.js";

const app = express();

const buscarufsPorNome = (nomeuf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeuf.toLowerCase()));
}

app.get('/ufs', (req, res) => {
    const nomeuf = req.query.busca;
    const resultado = nomeuf ? buscarufsPorNome(nomeuf) : buscarUfs;

    if (resultado.length > 0) {
        res.json(resultado)
    } else {
        res.status(404).send({"ERRO" : "Nenhuma UF encontrada" })
    }
});

app.get('/ufs', (req,res) => {
const idUF = parseInt(req.params.idUF);
const uf = colecaoUf.find(u => u.id === idUF);
res.json(uf);
})

app.get('/ufs/:iduf', (req, res) => {
const idUF = parseInt(req.params.iduf);
let mensagemErro = '';
let uf;

if (!(isNaN(idUF))) {
uf = colecaoUf.find(u => u.id === idUF);
if (!uf) {
mensagemErro = 'Uf não encontrada';
}
else {
mensagemErro = 'Requisição inválida';
}
}
if (uf) {
res.json(uf);
} else {
res.status(404).json({"erro": mensagemErro} );
}
});

app.listen(1010, () =>{
let data = new Date();
console.log('Servidor iniciado na porta 1010 em: ' + data);
});

app.get('/ufs/:iduf', (req, res) => {
    const uf = buscarUfsId(req.params.iduf)

    if (uf) {
        res.json(uf);
    } else if (isNaN(parseInt));
})