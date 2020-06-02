export class ItemNavObj{
    constructor(Obj){
        this._title = Obj.title
        this._children = Obj.children ? this.childrenInstance(Obj.children) : []
        this._href = Obj.href
        this._icon = Obj.icon
    }
    

    childrenInstance(array){
        return array.map(element => {
            if(element.children){
                return this.childrenInstance(element.children)
            }else{
                return element = new ItemNavObj(element);
            }
        });
    }

    get title(){
        return this._title;
    }
    set title(newValue){
        this._title = newValue;
    }
    get href(){
        return this._href;
    }
    set href(newValue){
        this._href = newValue;
    }
    get icon(){
        return this._icon;
    }
    set icon(newValue){
        this._icon = newValue;
    }
    get children(){
        return this._children;
    }
}
