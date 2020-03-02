import { MateriaHora } from './materiaHora';

export class Horario {

    private grupo: string;
    private estudios: string;
    private cuadrante: MateriaHora [][];

    constructor(grupo: string, estudios: string, cuadrante: MateriaHora[][]) {
        this.cuadrante = cuadrante;
        this.grupo = grupo;
        this.estudios = estudios;
    }

    public get $grupo(): string {
        return this.grupo;
    }


    public get $estudios(): string {
        return this.estudios;
    }


    public get $cuadrante(): MateriaHora [][] {
        return this.cuadrante;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    public set $grupo(value: string) {
        this.grupo = value;
    }

    /**
     * Setter $estudios
     * @param {string} value
     */
	public set $estudios(value: string) {
		this.estudios = value;
	}

    /**
     * Setter $cuadrante
     * @param {MateriaHora [][]} value
     */
	public set $cuadrante(value: MateriaHora [][]) {
		this.cuadrante = value;
	}
   


}