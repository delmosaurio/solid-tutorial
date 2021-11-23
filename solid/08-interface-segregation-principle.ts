import { Vehiculo } from './02-single-responsability-principle';

/**
 * GOOD!
 *
 * Dividir funcionalidades
 *
 */

export interface IVehiculoRun {
    run(): void;
 }

export interface IVehiculoVolador {
    volar(): void;
 }

export interface IVehiculoDespliegueVertical {
    despegueVertical(): void;
 }

export class VehiculoTerrestre extends Vehiculo implements IVehiculoRun {

  constructor(name: string) {
    super(name, 'terrestre');
  }

  run() {
    return 'puedo avanzar';
  }
}

export class Aereo extends Vehiculo implements IVehiculoRun, IVehiculoVolador {
  constructor(name) {
    super(name, 'aereo');
  }

  run() {
    return 'puedo avanzar';
  }

  volar() {
    return 'puedo volar';
  }
}

export class AereoVertical extends Aereo implements IVehiculoDespliegueVertical {
  constructor(name) {
    super(name);
  }

  despegueVertical() {
    return 'puedo desplegar verticalmente';
  }
}

const auto = new VehiculoTerrestre('auto');
const avion = new Aereo('avion');
const helicoptero = new AereoVertical('helicoptero');

console.log(auto.despegueVertical()); // throw error
console.log(avion.despegueVertical()); // throw error
console.log(helicoptero.despegueVertical());
