import { MateriaHora } from './../model/materiaHora';
import { Horario } from '../model/horario';

export interface Datable {

    getEstudios();

    getGrupos(estudios: string);

    getHorario(grupo: string);

    getDescripcion(materias: MateriaHora);
}
