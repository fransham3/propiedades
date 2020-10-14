interface _provinciaRegion {
    _id: string;
    nombre: string;
}

export class Provincia {
    
    constructor(
        public nombre: string,
        public _id?: string,
        public region?: _provinciaRegion
        ) {}
    }