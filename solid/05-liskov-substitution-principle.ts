/**
 * WRONG!
 *
 * Las subclases deben de reemplazar metodos
 * sin romper la funcionalidad.
 *
 */

export interface IVehiculoConCombustible {
    cargarCombustible(provider: string): string;
}

/**
 *
 * WRONG ejemplo, esta clase debe de ser abstract
 * no deberian de existir provider del tipo generico
 * si no hacen referencia a algo real
 *
 */
export class CombustibleProvider {
  constructor(protected vehiculo: IVehiculoConCombustible) {}

  cargarCombustible(): string {
    return this.vehiculo.cargarCombustible('GENERIC');
  }
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
