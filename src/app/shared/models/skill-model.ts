import { Tags } from './tag-enum';

export class SkillModel{
    
    private _title : string;
    public get title() : string {
        return this._title;
    }
    public set title(v : string) {
        this._title = v;
    }
    
    private _percentage : number;
    public get percentage() : number {
        return this._percentage;
    }
    public set percentage(v : number) {
        this._percentage = v;
    }
    
    private _fontItem : string;
    public get fontItem() : string {
        return this._fontItem;
    }
    public set fontItem(v : string) {
        this._fontItem = v;
    }

    private _tag : Tags;
    public get tag() : Tags {
        return this._tag;
    }
    public set tag(v : Tags) {
        this._tag = v;
    }
    
    
    private _animationDuration : number;
    public get animationDuration() : number {
        return this._animationDuration;
    }
    public set animationDuration(v : number) {
        this._animationDuration = v;
    }
    
    constructor(
        title: string, 
        percentage: number,
        fontItem: string,
        tag: Tags,
        animationDuration: number
    ) {
        this._title = title;
        this._percentage = percentage;
        this._fontItem = fontItem;
        this._tag = tag;
        this._animationDuration = animationDuration;
    }
}
