import { Comuna } from '../models/comuna.model';
import { Provincia } from '../models/provincia.model';
import { Region } from '../models/region.model';

export interface CargarRegion {
    _id: string;
    nombre: string;
    regiones: Region[];
}

export interface CargarProvincia {
    _id: string;
    nombre: string;
    rID: string;
    region: Region[];
    provincias: Provincia[];
}

export interface CargarComuna {
    _id: string;
    nombre: string;
    pID: string;
    provincia: Provincia[];
    comunas: Comuna[];
}