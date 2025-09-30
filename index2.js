import colecaoPr from "../dados/dados_2";
import express from 'express'

const app = express();

app.get('/pr', (req, res) => {
    res.json = (colecaoPr);
});

app.get('/pr', (req, res) => {
    const idPR = parseInt(req.params.idPR);
    const pr = colecaoPr.find(u => u.id === idPR);
    res.json(pr);
});

app.get('/pr/:idPR', (req, res) => {
    const idPR = parseInt(req.params.idPR);
    let mensagemErro = '';
    let pr;
});

if (!(isNaN(idPR))) {
    pr = colecaoPr.find(u => u.id === idPr)
    
}