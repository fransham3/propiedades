import { Propiedad } from '../models/propiedad.model';

export interface CargarPropiedad {
    result: any;
    totalPages: number;
    totalDocs: number;
    page: number;
    docs: Propiedad[];
}

export interface cPropiedad {
    recientesProps: Propiedad;
    propiedad: Propiedad;
}

export interface actualizarImg {
    img: string;
    propiedad_id: string;
}




export interface CargarModal {
    propID: string;
    propiedades: Propiedad[];

}