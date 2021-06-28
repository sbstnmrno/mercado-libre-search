export class UrlModel {

    constructor(
        public getSearch: () => string,
        public getItem: (id: string) => string
    ){}
}