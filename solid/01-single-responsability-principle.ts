/**
 * WRONG!
 *
 * Evitar implementar toda la funcionalidad en una misma clase
 *
 */


export class VehiculoRepositoryModel {

  constructor(
    public name: string,
    public type: string
  ) { }

  save(target: VehiculoRepositoryModel) {
    console.log(`estoy guardando un vehiculo ${target.name}`);
    return target;
  }

}

const ferrari = new VehiculoRepositoryModel('automovil', 'terrestre');
ferrari.save(ferrari);
