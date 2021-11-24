/**
 * GOOD!
 *
 * Las clases base no deben de depender de componentes
 * o subclases. Si no de una abstraccion.
 *
 */

export interface IVehiculoConCombustible {
    cargarCombustible(provider: string): string;
}

export class Vehiculo implements IVehiculoConCombustible {

  constructor(
    public name: string,
    public type: string
  ) { }

  cargarCombustible(provider: string): string {
    return 'Cargando combustible en ' + provider;
  }

}

export abstract class CombustibleProvider {
  constructor(protected vehiculo: IVehiculoConCombustible) {}

    abstract cargarCombustible(): string;
}

export class YpfCombustibleProvider extends CombustibleProvider {

  cargarCombustible(): string {
    return this.vehiculo.cargarCombustible('YPF');
  }
}

export class ShellCombustibleProvider extends CombustibleProvider {

  cargarCombustible(): string {
    return this.vehiculo.cargarCombustible('SHELL');
  }
}

export class Auto extends Vehiculo {

  constructor() {
    super('auto', 'terrestre');
  }

}

export class Avion extends Vehiculo {

  constructor() {
    super('avion', 'aereo');
  }

}

const ypfProvider = new YpfCombustibleProvider(new Auto());
const shellProvider = new ShellCombustibleProvider(new Avion());

console.log(ypfProvider.cargarCombustible());
console.log(shellProvider.cargarCombustible());
