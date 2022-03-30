
export namespace Category {
    
    export class GetAll {
        static readonly type = '[Category] Get All';
    }

    export class Edit {
        static readonly type = '[Category] Edit';
        constructor(public id: number) {}
    }

    export class Delete {
        constructor(public id: number) {}
    }

}