import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of, scheduled } from "rxjs";


/** 
 * 
 * It stores a reference to each route that has a name, and then 
 * provides a method to load a route by name 
 */
export class SelectiveLoadingStrategy implements PreloadingStrategy {
    
    routes: { [name: string]: { route: Route; load: Function } } = {};

    /**
     * 
     * @param route 
     * @param load 
     * @returns 
     */
    preload(route: Route, load: Function): Observable<any> {
        if (route.data && route.data.name) {
            this.routes[route.data.name] = { route, load };
        }
        // return of(null);
        return scheduled(null, null);
    }

    /**
     * 
     * @param name 
     */
    preLoadRoute(name: string) {
        const route = this.routes[name];
        if (route) {
            route.load();
        }
    }

}