/**
 * WRONG!
 *
 * Las clases base no deben de depender de componentes
 * o subclases. Si no de una abstraccion.
 *
 */

export class Vehiculo {

  private _name: string;
  private _type: string;

  constructor(name: string, type: string) {
    this._name = name;
    this._type = type;
  }

  get name() {
    return this._name;
  }

  get type() {
    return this._type;
  }

  cargarCombustible() {
    return 'Cargando combustible';
  }

}

export class TransporteFisico extends Vehiculo {
  constructor(name: string, type: string) {
    super(name, type);
  }
}

export class Aereo extends TransporteFisico {
  constructor(name: string) {
    super(name, 'aereo');
  }
}

export class YpfCombustibleProvider {

  constructor(private vehiculo: TransporteFisico) {}

  cargarCombustible() {
    this.vehiculo.cargarCombustible();
  }
}

export class ShellCombustibleProvider {

  constructor(private vehiculo: Aereo) {}

  cargarCombustible() {
    this.vehiculo.cargarCombustible();
  }
}
