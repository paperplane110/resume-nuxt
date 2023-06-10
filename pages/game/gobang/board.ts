type p = {
    rowIdx: number
    colIdx: number
}

export class Board {
    width: number
    map: number[][]
    historyLog: p[]

    constructor() {
        this.width = 15
        this.map = new Array()
        for (let i = 0; i < this.width; i++) {
            this.map.push(new Array(this.width).fill(0));
        }
        this.historyLog = []
    }

    reset() {
        this.map = new Array()
        for (let i = 0; i < this.width; i++) {
            this.map.push(new Array(this.width).fill(0));
        }
        this.historyLog = []
    }

    // put chess success: true, otherwise false
    put(rowIdx: number, colIdx: number, role: number): boolean {
        if (this.map[rowIdx][colIdx] !== 0) {
            // position is occupied
            return false
        } else {
            this.map[rowIdx][colIdx] = role
            this.historyLog.push({
                rowIdx,
                colIdx
            })
            return true
        }
    }

    undo() {
        const last = this.historyLog.pop()
        if (last) {
            this.map[last.rowIdx][last.colIdx] = 0
        }
    }
}
