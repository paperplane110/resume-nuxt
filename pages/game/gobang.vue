<script>
const mapWidth = 15;
let cleanTable = [];
for (let i = 0; i < mapWidth; i++) {
  cleanTable.push(new Array(mapWidth).fill(""));
}

export default {
  data() {
    return {
      cells: cleanTable,
      historyCells: [],
      player1: "⚫",
      player2: "🟢",
      turn: "",
      winner: "",
      isDraw: false,
    };
  },
  mounted() {
    this.turn = this.player1;
  },
  computed: {
    isEmptyHistory() {
      return this.historyCells.length === 0;
    },
    isWin() {
      return this.winner.length !== 0;
    },
  },
  methods: {
    checkChess(rIdx, cIdx) {
      if (!this.isOccupied(rIdx, cIdx)) {
        const value = this.turn;
        this.switchTurn();
        const currentCells = this.cells.map((row) => row.slice()); // deep copy
        this.historyCells.push(currentCells);
        this.cells[rIdx][cIdx] = value;
        this.checkWin(value);
      } else {
        console.log("该位置已被占用");
      }
    },
    isOccupied(rIdx, cIdx) {
      return this.cells[rIdx][cIdx] !== "";
    },
    switchTurn() {
      if (this.turn === this.player1) {
        this.turn = this.player2;
      } else {
        this.turn = this.player1;
      }
    },
    checkWin(lastChess) {
      // horizontal scanning
      for (let row of this.cells) {
        for (let c = 0; c < row.length - 4; c++) {
          if (row.slice(c, c + 5).every((i) => i === lastChess)) {
            this.winner = lastChess;
          }
        }
      }
      // vertical scanning
      for (let r = 0; r < this.cells.length - 4; r++) {
        for (let c = 0; c < this.cells.length; c++) {
          const column = this.cells.map((row, idx) => row[c]);
          if (column.slice(r, r + 5).every((i) => i === lastChess)) {
            this.winner = lastChess;
          }
        }
      }
      // south-east scanning
      for (let r = 0; r < this.cells.length - 4; r++) {
        for (let c = 0; c < this.cells.length - 4; c++) {
          let scanZone = [];
          for (let i = 0; i < 5; i++) {
            scanZone.push(this.cells[r + i][c + i]);
          }
          if (scanZone.every((i) => i === lastChess)) {
            this.winner = lastChess;
          }
        }
      }
      // north-east scanning
      for (let r = 4; r < this.cells.length; r++) {
        for (let c = 0; c < this.cells.length - 4; c++) {
          let scanZone = [];
          for (let i = 0; i < 5; i++) {
            scanZone.push(this.cells[r - i][c + i]);
          }
          if (scanZone.every((i) => i === lastChess)) {
            this.winner = lastChess;
          }
        }
      }
    },
    refreshMap() {
      console.log("refresh");
      let newTable = new Array();
      for (let i = 0; i < 15; i++) {
        newTable.push(new Array(15).fill(""));
      }
      this.cells = newTable;
      this.historyCells = [];
      this.winner = "";
      this.turn = this.player1;
      this.isDraw = false;
    },
    lastTurn() {
      this.cells = this.historyCells.pop();
      this.switchTurn();
      this.winner = "";
      this.isDraw = false;
    },
    draw() {
      this.isDraw = true;
    },
  },
};
</script>

<template>
  <div>
    <div class="title">
      <Text h1>Gobang Game</Text>
      <span v-if="isDraw">
        <h3>🤜🤛 Draw. Let's have another round!</h3>
      </span>
      <span v-else-if="!isWin">
        <h3>
          It's {{ turn }} 's turn, ⏳ Round {{ parseInt(historyCells.length / 2) + 1 }}
        </h3>
      </span>
      <span v-else>
        <h3>🎉 The winner is {{ winner }}, Let's have another round!</h3>
      </span>
    </div>
    <div class="buttonPanel">
      <button class="btn green" @click="refreshMap">Restart</button>
      <button class="btn blue" @click="draw" :disabled="isWin">Draw</button>
      <button class="btn orange" @click="lastTurn" :disabled="isEmptyHistory">
        Undo
      </button>
    </div>
    <div class="mapContainer">
      <div class="chessMap">
        <div v-for="(row, rIdx) in cells" :key="rIdx" class="row">
          <div :class="{ disabled: isWin, red: turn === player2 }" v-for="(num, cIdx) in row" :key="cIdx" class="cell"
            @click="(e) => !isWin && checkChess(rIdx, cIdx)">
            {{ num }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
}

.mapContainer {
  display: flex;
  justify-content: center;
}

.chessMap {
  display: grid;
  place-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 3px solid black;
}

.buttonPanel {
  display: flex;
  justify-content: center;
  margin: 1rem;
}

.btn {
  margin: auto 0.5rem;
  padding: 0.5rem 2rem;
  color: white;
  font-size: 1rem;
  background-color: rgba(3, 182, 110, 0.845);
  border: 0;
  border-radius: 8px;
}

.btn.green {
  background-color: rgba(3, 182, 110, 0.845);
}

.btn.orange {
  background-color: rgba(255, 153, 0, 0.845);
}

.btn.blue {
  background-color: rgba(0, 132, 227, 0.845);
}

.btn:hover:enabled {
  opacity: 0.8;
}

.btn:disabled {
  background-color: grey;
  cursor: not-allowed;
}

.row {
  display: flex;
}

.cell {
  width: 2rem;
  height: 2rem;
  border: 1px solid black;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.cell:hover {
  background-color: rgb(222, 222, 222);
}

.cell.red:hover {
  background-color: rgb(250, 230, 230);
}

.cell.disabled,
.cell.disabled:hover {
  background-color: rgb(230, 250, 245);
  cursor: not-allowed;
}
</style>
