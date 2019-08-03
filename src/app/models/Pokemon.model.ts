export class Pokemon {

    public nameFr : string;
    public nameEn : string;
    public id : Number;
    public sprite : string;
    public types : string[];

    constructor( nameEn : string, nameFr: string, id : number, sprite : string ) {

        this.nameEn = nameEn;
        this.nameFr = nameFr;
        this.id = id;
        this.sprite = sprite;
        this.types = [];
    }
}