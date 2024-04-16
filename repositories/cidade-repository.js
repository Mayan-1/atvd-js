class CidadeRepositroy {
  #cidades = [];

  constructor() {}

  adicionarCidade(cidade) {
    this.#cidades.push(cidade);
  }

  get(ddd) {
    return this.#cidades.find((cidade) => cidade.ddd === ddd);
  }

  getAll() {
    let cidades = "Nome      DDD";

    this.#cidades.forEach((cidade) => {
      cidades += cidade.nome + "     -    " + cidade.ddd + "\n";
    });
  }
}

module.exports = CidadeRepositroy;
