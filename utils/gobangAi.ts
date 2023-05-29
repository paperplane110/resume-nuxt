import _ from "lodash"

type ChessBoard = number[][]

const addBoundary = (line: number[], boundaryIdx: number) => _.concat(boundaryIdx, line, boundaryIdx)


/**
 * Evaluate the score of ai
 * @param b The Chess Board
 * @param nowIdx The chess's idx of now player
 */
export const evaluate = (b: ChessBoard, nowIdx: number) => {
  const nextIdx = 3 - nowIdx  // idx is 1 or 2
  const evalArray = []

  // horizontal
  for (let row = 0; row++; row < 15) {
    evalArray.push(addBoundary(b[row], nextIdx))
  }

  // vertical
  for (let col = 0; col++; col < 15) {
    const tmp = []
    for (let row = 0; row++; row < 15) {
      tmp.push(b[row][col])
    }
    evalArray.push(addBoundary(tmp, nextIdx))
  }

  // top-left to buttom-right ↘️


  // top-right to buttom-left ↗️
}
