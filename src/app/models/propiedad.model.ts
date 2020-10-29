interface _propiedadUser {
    _id: string;
    nombre: string;
}

export class Propiedad {
    
    constructor(
        public titulo: string,
        public tipo_oper: string,
        public precio: number,
        public desc_corta: string,
        public created_at?: Date,
        public _id?: string,
        public usuario?: _propiedadUser,
        public tipo_prop?: string,
        // public region?: string,
        public provincia?: string,
        public comuna?: string,
        public descripcion?: string,
        public img?: string
        ) {}
    }