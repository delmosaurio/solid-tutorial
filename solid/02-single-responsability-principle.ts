/**
 * GOOD!
 *
 * Delegar responsabilidad de un mismo "tipo" en diferentes clases
 *
 */

export class Repository<T> {

  constructor(
    public table: string
  ) { }

  create(data: T): T {
    console.log('estoy guardando un vehiculo');
    return data;
  }

  update(id: string, data: T): T {
    console.log(`estoy guardando un vehiculo con id ${id}`);
    return data;
  }

  find(query: unknown): T[] {
    console.log(`estoy buscando un vehiculo ${query}`);
    return [];
  }

  delete(data: T): T {
    console.log('estoy borrando un vehiculo');
    return data;
  }

}

export class Vehiculo {

  constructor(
    public name: string,
    public type: string
  ) { }

}

const vehiculoRepository = new Repository<Vehiculo>('vehiculo');
const target = new Vehiculo('ferrari', 'terrestre');
vehiculoRepository.create(target);
