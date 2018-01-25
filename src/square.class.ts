export class Square {
    constructor(private width: number) {
        this.width = width;
    }

    area(): number {
        return this.width ** 2;
    }
};