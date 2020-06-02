export class RouteObj{
    constructor(Obj){
        this._component = Obj.component;
        this._exact = Obj.exact;
        this._layout = Obj.layout;
        this._path = Obj.path;
        this._title = Obj.title;
    }

    get component(){
        return this._component;
    }
    get exact(){
        return this._exact;
    }
    get layout(){
        return this._layout;
    }
    get path(){
        return this._path;
    }
    get title(){
        return this._title;
    }
}
