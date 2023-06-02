/**
 * 着法生成，生成下一步棋子的棋盘列表
 */
import _ from "lodash"

type ChessBoard = number[][]

export function* genTraverseAll(b: ChessBoard, curIdx: number) {
  for (let row = 0; row < 15; row++) {
    for (let col = 0; col < 15; col++) {
      if (b[row][col] === 0) {
        const copy = _.cloneDeep(b)
        copy[row][col] = curIdx
        yield { board: copy, row, col, }
      }
    }
  }
}
