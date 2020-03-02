import { MateriaHora } from './../../model/materiaHora';
import { Datable } from 'src/app/interface/datable';
import { Horario } from 'src/app/model/horario';

export class DatosServiceMock implements Datable {

    private estudios: string[] = ['ESO', 'DIV', 'BAC', 'PCPI', 'GM', 'GS'];
    private grupos: string[] = ['a1a' , 'f3c' , '2dc'];
    private descripcion: string[] = ['Musiquita', 'peliculas'];
    // tslint:disable-next-line:max-line-length
    private horasUno: MateriaHora[][] = [
        
        // tslint:disable-next-line:max-line-length
        [new MateriaHora(['Mate', 'Ing'],[]), new MateriaHora(['Bio'],[]), new MateriaHora(['Ing', 'Reli'],[]), new MateriaHora(['Ing', 'Reli'],[]), new MateriaHora(['Ing', 'Reli'],[])]
        
        , 
        
        // tslint:disable-next-line:max-line-length
        [new MateriaHora(['Mate', 'Ing'],[]), new MateriaHora(['Bio'],[]), new MateriaHora(['Ing', 'Reli'],[]), new MateriaHora(['Ing', 'Reli'],[]), new MateriaHora(['Ing', 'Reli'],[])],
        
        
        // tslint:disable-next-line:max-line-length
        [new MateriaHora(['Mate', 'Ing'],[]), new MateriaHora(['Bio'],[]), new MateriaHora(['Ing', 'Reli'],[]), new MateriaHora(['Ing', 'Reli'],[]), new MateriaHora(['Ing', 'Reli'],[])],
        
        
        // tslint:disable-next-line:max-line-length
        [new MateriaHora(['Mate', 'Ing'],[]), new MateriaHora(['Bio'],[]), new MateriaHora(['Ing', 'Reli'],[]), new MateriaHora(['Ing', 'Reli'],[]), new MateriaHora(['Ing', 'Reli'],[])],
        
        
        // tslint:disable-next-line:max-line-length
        [new MateriaHora(['Mate', 'Ing'],[]), new MateriaHora(['Bio'],[]), new MateriaHora(['Ing', 'Reli'],[]), new MateriaHora(['Ing', 'Reli'],[]), new MateriaHora(['Ing', 'Reli'],[])],
        
        
        // tslint:disable-next-line:max-line-length
        [new MateriaHora(['Mate', 'Ing', 'Len'],[]), new MateriaHora(['Bio'],[]), new MateriaHora(['Ing', 'Reli'],[]), new MateriaHora(['Ing', 'Reli'],[]), new MateriaHora(['Ing', 'Reli'],[])]];
    
        private schedule: Horario;
    constructor() {

    }

    getEstudios(): string[] {
        return this.estudios;
    }

    getGrupos(estudios: string): string[] {

        return this.grupos;
    }

    getHorario(grupo: string): Horario {
        this.schedule = new Horario(this.grupos[1], this.estudios[3], this.horasUno);
        return this.schedule;
    }

    getDescripcion(materia: MateriaHora): string[] {
        return materia.$descripcion;
    }

}
