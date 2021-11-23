/**
 * WRONG!
 *
 * Evitar implementar toda la funcionalidad en una misma clase
 *
 */


export class VehiculoRepositoryModel {
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

  save(target: VehiculoRepositoryModel) {
    console.log(`estoy guardando un vehiculo ${target.name}`);
    return target;
  }
}

const ferrari = new VehiculoRepositoryModel('automovil', 'terrestre');
ferrari.save(ferrari);
