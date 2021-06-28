export class SearchResponseModel {
    constructor(
        public author: AuthorModel,
        public categories: Array<string>,
        public items: Array<ItemModel>,
    ){}
}

export class ItemDetailModel {
    constructor(
        public author: AuthorModel,
        public categories: Array<string>,
        public item: ItemModel
    ){}
}

export class AuthorModel {
    constructor(
        public name: string,
        public lastname: string
    ){}
}

export class ItemModel {
    constructor(
        public id: string,
        public title: string,
        public price: PriceModel,
        public location: string,
        public picture: string,
        public condition: string,
        public free_shipping: boolean,
        public sold_quantity?: number,
        public description?: string
    ){}
}

export class PriceModel {
    constructor(
        public currency: string,
        public amount: number,
        public decimals: number
    ){}
}