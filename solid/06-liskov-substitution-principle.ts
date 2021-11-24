/**
 * GOOD!
 *
 * Las subclases deben de reemplazar metodos
 * sin romper la funcionalidad.
 *
 */

export interface IVehiculoConCombustible {
    cargarCombustible(provider: string): string;
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
