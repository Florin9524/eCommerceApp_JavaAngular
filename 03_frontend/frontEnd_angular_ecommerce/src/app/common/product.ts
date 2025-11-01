export class Product {
    sku: string = '';
    name: string = '';
    description: string = '';
    unitPrice: number = 0;
    imageURL: string = '';
    active: boolean = false;
    unitsInStock: number = 0;
    dateCreated: Date = new Date();
    lastUpdated: Date = new Date();
}
