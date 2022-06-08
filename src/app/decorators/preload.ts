import { AppModule } from "../app.module";
import { SelectiveLoadingStrategy } from "../services/strategy/selective-loading-strategy";

export function PreLoad(page: string): ClassDecorator {
    return function(constructor: any) {
        const loader = AppModule.injector.get(SelectiveLoadingStrategy);

        const ngOnInit = constructor.prototype.ngOnInit;

        constructor.prototype.ngOnInit = function(...args) {
            loader.preLoadRoute(page);
            if (ngOnInit) {
                console.log(page);
                ngOnInit.apply(this, args);
            }
        };
    };
}