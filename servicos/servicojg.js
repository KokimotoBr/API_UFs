import colecaoJG from "./dados/dados_loja.js";

export const buscarJGs = () => {
    return colecaoJG;
}

export const buscarJGsPorNome = (tituloid) => {
    return colecaoid.filter(id => id.titulo.toLocaleLowerCase().includes(tituloid.toLocaleLowerCase()))
}