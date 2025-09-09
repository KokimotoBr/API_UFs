import colecaoUf from "./dados/dados.js";

export const buscarUfs = () => {
    return colecaoUf;
}

export const buscarufsPorNome = (nomeuf) => {
    return colecaoUf.filter(uf => uf.nome.toLocaleLowerCase().includes(nomeuf.toLocaleLowerCase()))
}

export const buscarPorId = (id) => {
    const iduf = parseInt(id)
    return colecaoUf.find(uf => uf.id === iduf)
}

