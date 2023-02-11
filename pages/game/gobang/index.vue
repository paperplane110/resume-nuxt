<template>
  <div>
    <Text h1>Gobang.</Text>

    <!-- Render Map -->
    <div class="flex flex-col items-center w-full">
      <div v-for="(row, rowIdx) in board.map" :key="rowIdx" class="flex flex-row">
        <div v-for="(chess, colIdx) in row" :key="colIdx" class="relative group w-10 h-10"
          @click="moveChess(rowIdx, colIdx)">
          <GobangCellTopLeft v-if="rowIdx === 0 && colIdx === 0" />
          <GobangCellTopRight v-else-if="rowIdx === 0 && colIdx === board.width - 1" />
          <GobangCellBottomLeft v-else-if="rowIdx === board.width - 1 && colIdx === 0" />
          <GobangCellBottomRight v-else-if="rowIdx === board.width - 1 && colIdx === board.width - 1" />
          <GobangCellTop v-else-if="rowIdx === 0" />
          <GobangCellLeft v-else-if="colIdx === 0" />
          <GobangCellRight v-else-if="colIdx === board.width - 1" />
          <GobangCellBottom v-else-if="rowIdx === board.width - 1" />
          <GobangCellInner v-else />
          <div class="absolute top-0 left-0 right-0 bottom-0 w-full h-full">
            <p :class="`my-0 text-center align-middle leading-10 z-10`" style="font-size:24px;">
              {{ chess === player1.idx ? player1.symbol : (chess === player2.idx ? player2.symbol : "") }}
            </p>
          </div>
          <GobangCellCursor class="opacity-0 transition-opacity duration-300 group-hover:(opacity-100)" />
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang='ts'>
import { Board } from './board'
import { Role } from './role'

const board = reactive(new Board())
const player1 = reactive(new Role(1, "⚪"))
const player2 = reactive(new Role(2, "⚫"))

let curRole = player1.idx

function moveChess(rowIdx: number, colIdx: number) {
  if (board.put(rowIdx, colIdx, curRole)) {
    if (curRole === player1.idx) curRole = player2.idx
    else curRole = player1.idx
  }
}


</script>
