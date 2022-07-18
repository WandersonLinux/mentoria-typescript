// Como podemos melhorar o esse código usando TS? 

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

enum Profissao {
    Atriz,
    Padeiro
}

const pessoa1: Pessoa = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.Atriz
};

interface Pessoa2 {
    nome: string,
    idade: number,
    profissao: string
}

const pessoa2: Pessoa2 = {
    nome: 'roberto',
    idade: 19,
    profissao: 'Padeiro'
}

interface Pessoa3 {
    nome: string,
    idade: string
}

interface Cargo extends Pessoa3 {
    profissao: string
}

const pessoa3: Cargo = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};


interface Pessoa4 {
    nome: string,
    idade: number,
    profissao: string
}

const pessoa4: Pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}