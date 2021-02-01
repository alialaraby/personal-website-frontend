export class LearninNavItemModel{
    
    private _title : string;
    public get title() : string {
        return this._title;
    }
    public set title(v : string) {
        this._title = v;
    }
    
    private _url : string;
    public get url() : string {
        return this._url;
    }
    public set url(v : string) {
        this._url = v;
    }
    
    constructor(
        title: string, url: string
    ) {
        this._title = title;
        this._url = url;
    }
}