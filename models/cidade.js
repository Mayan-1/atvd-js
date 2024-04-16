class cidade {
  constructor(nome, ddd) {
    this.nome = nome;
    this.ddd = ddd;
  }

  getCidade() {
    return this.nome + " - " + this.ddd;
  }
}

module.exports = Cidade;
