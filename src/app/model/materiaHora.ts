export class MateriaHora {

    private materias: string[];
    private descripcion: string[];

    constructor(materias: string[], descripcion: string[]){
        this.materias = materias;
        this.descripcion = descripcion;
    }


    /**
     * Getter $materias
     * @return {string[]}
     */
	public get $materias(): string[] {
		return this.materias;
	}

    /**
     * Setter $materias
     * @param {string[]} value
     */
	public set $materias(value: string[]) {
		this.materias = value;
	}

    public get $descripcion(): string[]{
        return this.descripcion;
    }

}