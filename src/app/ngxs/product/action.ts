
export namespace Product {
    
    export class GetAll {
        static readonly type = '[Product] Get All';
    }

    export class GetItem {
        static readonly type = '[Product] Get Iten';
        constructor(public id: number) {}
    }

    export class AddToCart {
        static readonly type = '[Product] Add To Cart';
        constructor(public payload: any) {}
    }

    export class Edit {
        static readonly type = '[Product] Edit';
        constructor(public id: number) {}
    }

    export class Delete {
        constructor(public id: number) {}
    }

}