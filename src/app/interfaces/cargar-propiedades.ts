import { Propiedad } from '../models/propiedad.model';

export interface CargarPropiedad {
    result: any;
    totalPages: number;
    totalDocs: number;
    page: number;
    docs: Propiedad[];
}


export interface CargarModal {
    propID: string;
    propiedades: Propiedad[];

}