/**
 * GOOD!
 *
 * Delegar responsabilidad de un mismo "tipo" en diferentes clases
 *
 */

export class Repository<T> {

  private _table: string;

  constructor(table: string) {
    this._table = table;
  }

  get table(): string {
    return this._table;
  }

  save(data: T): T {
    console.log('estoy guardando un vehiculo');
    return data;
  }

  update(id: string, data: T): T {
    console.log('estoy guardando un vehiculo');
    return data;
  }

  find(query: any): T[] {
    console.log('estoy buscando un vehiculo');
    return [];
  }

  delete(data: T): T {
    console.log('estoy borrando un vehiculo');
    return data;
  }

}

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

}

const vehiculoRepository = new Repository<Vehiculo>('vehiculo');
const target = new Vehiculo('ferrari', 'terrestre');
vehiculoRepository.save(target);
