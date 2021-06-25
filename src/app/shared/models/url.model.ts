export class UrlModel {

    constructor(
        public getResultsByQuery: () => string,
        public getProductById: (id: string) => string,
        public getProductDescriptionById: (id: string) => string
    ){}
}