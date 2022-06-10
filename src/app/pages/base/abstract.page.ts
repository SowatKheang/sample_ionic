
import { OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";

export abstract class AbstractPage implements OnInit {
    
    private _isDesktop: boolean = false;
    private _title: String = 'TITLE';
    
    constructor(private platform: Platform) {
        this._isDesktop = this.platform.is('desktop');
    }
    
    /**
     * A lifecycle hook that is called after Angular has initialized all data-bound properties of a
     * directive.
     */
    ngOnInit() {
        this.onInit();
    }

    abstract onInit(): void;

    /**
     * It returns the value of the private variable _isDesktop.
     * @returns The value of the private variable _isDesktop.
     */
    public get isDesktop(): boolean {
        return this._isDesktop;
    }

    /**
     * The function returns the value of the private variable _title
     * @returns The title of the book.
     */
    public get title(): String {
        return this._title;
    }

    /**
     * Sets the title of the book
     * @param title - The title of the modal.
     */
    public setTitle(title) {
        this._title = title
    }

}