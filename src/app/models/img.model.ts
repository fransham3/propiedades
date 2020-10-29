interface _imgProp {
    _id: string;
    titulo: string;
}

export class Img {
    
    constructor(
        
        public imageURL: string,
        public public_id: string,
        public propiedad_id: _imgProp,
        public _id?: string
        
        ) {}
    }




