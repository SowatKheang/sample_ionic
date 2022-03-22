
import { OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";

export abstract class AbstractPage implements OnInit {
    
    private _isDesktop: boolean = false;
    private _title: String = 'TITLE';
    
    constructor(private platform: Platform) {
        this._isDesktop = this.platform.is('desktop');
    }
    
    ngOnInit() {
        this.onInit();
    }

    abstract onInit(): void;

    public get isDesktop(): boolean {
        return this._isDesktop;
    }

    public get title(): String {
        return this._title;
    }

    public setTitle(title) {
        this._title = title
    }

}