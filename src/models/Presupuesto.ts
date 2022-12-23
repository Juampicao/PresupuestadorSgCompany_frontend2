export class Presupuesto {
  private _variables: object;
  private _cliente: object;
  private _productosList: string[];
  private _empresa: object

  constructor(variables : object, cliente : object, productosList: string[], empresa: object) {
    this._variables = variables;
    this._cliente = cliente;
    this._productosList = productosList;
    this._empresa = empresa;
  }
}
