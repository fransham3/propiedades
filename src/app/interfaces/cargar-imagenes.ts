import { Img } from '../models/img.model';

export interface cargarImagenes {
    fotos: any;
}

export interface eliminarImagenes {
    fotos: Img;
    id: string;
}

export interface cargarImagenesById {
    fotos: any;
}