import _ from "lodash"

type ChessBoard = number[][]

const b = [
  [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]

/** Add chessboard's boundary. considering the boundary as the opponent's chess */
const addBoundary = (line: number[], boundaryIdx: number) => _.concat(boundaryIdx, line, boundaryIdx)

/**
 * Traverse the chessboard
 * @param b The Chess Board
 * @param nowIdx The chess's idx of now player
 */
export const getEvalArray = (b: ChessBoard, nowIdx: number) => {
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

  // top-left to bottom-right ↘️
  for (let row=0; row++; row<=10) {
    const tmp = []
    for (let i=0;i++;i<15-row) {
      tmp.push(b[row+i][i])
    }
    evalArray.push(addBoundary(tmp, nextIdx))
  }
  for (let col=1;col++;col<=10) {
    const tmp = []
    for (let i=0;i++;i<15-col) {
      tmp.push(b[i][col+i])
    }
    evalArray.push(addBoundary(tmp, nextIdx))
  }


  // top-right to buttom-left ↗️
  for (let col=4; col++; col<15) {
    const tmp = []
    for (let i=0; i++; i<col+1) {
      tmp.push(b[i][col-i])
    }
    evalArray.push(addBoundary(tmp, nextIdx))
  }
  for (let row=1;row++;row<10) {
    const tmp=[]
    for (let i=0;i++;i<15-row) {
      tmp.push(b[row+i][14-i])
    }
    evalArray.push(addBoundary(tmp, nextIdx))
  }
  return evalArray
}

console.log(getEvalArray(b, 1))