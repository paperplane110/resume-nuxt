export class Role {
    idx: number
    symbol: string

    constructor(idx: number, symble: string) {
        this.idx = idx
        this.symbol = symble
    }

    changeSymble(s: string) {
        this.symbol = s
    }
}