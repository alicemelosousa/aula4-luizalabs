class pessoa {
    constructor (nome, idade, cnh) {
        this.nome = nome,
        this.idade = idade,
        this.cnh = cnh
    }


dirigir() {
    console.log(`Sua CNH é de numero ${this.cnh}`)
}

comer() {
    console.log(`Sua idade é  ${this.idade}`)
}

dormir() {
    console.log(`${this.nome} está na hora de dormir`)
}

}

//incompleto... continuar

const pessoa ('Alice', '21','cnh')

pessoa.dirigir()