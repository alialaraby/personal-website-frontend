import { Tags } from './tag-enum';

export class MainLessonCardModel{
    
    //private title: string;
    //title prop
    private _title : string;
    public get title() : string {
        return this._title;
    }
    public set title(v : string) {
        this._title = v;
    }
    //tag prop
    private _tag : Tags;
    public get tag() : Tags {
        return this._tag;
    }
    public set tag(v : Tags) {
        this._tag = v;
    }
    //references prop
    private _references : string[];
    public get references() : string[] {
        return this._references;
    }
    public set references(v : string[]) {
        this._references = v;
    }
    
    constructor(titel: string, tag: Tags, references: string[]) {
        this._title = titel;
        this._tag = tag;
        this._references = references;
    }        
}