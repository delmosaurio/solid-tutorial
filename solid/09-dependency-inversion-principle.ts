/**
 * WRONG!
 *
 * Las clases base no deben de depender de componentes
 * o subclases. Si no de una abstraccion.
 *
 */

export class Vehiculo {

  constructor(
    public name: string,
    public type: string
  ) { }

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
