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

export function starSpread(b: ChessBoard, row: number, col: number): string[] {
  const res = []
  // horizontal
  let hLine = ""
  for (let offset = -4; offset < 5; offset++) {
    const newCol = col + offset
    if (newCol === -1 || newCol === 15) hLine += "3"
    else if (newCol < -1) continue
    else if (newCol > 15) break
    else hLine += b[row][newCol]
  }
  res.push(hLine)

  // verticle
  let vLine = ""
  for (let offset = -4; offset < 5; offset++) {
    const newRow = col + offset
    if (newRow === -1 || newRow === 15) vLine += "3"
    else if (newRow < -1) continue
    else if (newRow > 15) break
    else vLine += b[newRow][col]
  }
  res.push(vLine)

  // top right
  if (row === 0 && col === 0) { }
  else if (row === 14 && col === 14) { }
  else {
    for (let offset = -4; offset < 5; offset++) {
      const newRow = row + offset
      const newCol = col - offset
      // TODO
    }
  }

  return res
}
