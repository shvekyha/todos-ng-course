
export class Item {
    public title: string;
    public completed: boolean;
    private _created: Date;

    constructor(title:string){
        this.title = title;
        this.completed = false;
        this._created = new Date();
    }

    get created() : Date{
        return this._created;
    }
}