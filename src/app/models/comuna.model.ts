interface _comunaProvincia {
    _id: string;
    nombre: string;
}

export class Comuna {
    
    constructor(
        public nombre: string,
        public _id?: string,
        public provincia?: _comunaProvincia
        ) {}
    }