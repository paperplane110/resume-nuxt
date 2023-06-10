/**
 * Evaluation, including evalate all board or focus on one point
 */
import _ from "lodash"

type ChessBoard = number[][]

// score map
const ALIVE_5 = 100000
const ALIVE_4 = 10000
const ALIVE_3 = 1000
const ALIVE_2 = 100
const ALIVE_1 = 10

const DEAD_4 = 1000
const DEAD_3 = 100
const DEAD_2 = 10
const DEAD_1 = 5



/** 正规化棋子的编号 */
const convertChesses = (chesses: string, curIdx: string, nextIdx: string) => {
  let res = ''
  for (const v of chesses) {
    if (v === curIdx) res += '1'
    else if (v === nextIdx || v === '3') res += '2'
    else res += '0'
  }
  return res
}

const c5ToScore = new Map([
  ['11111', ALIVE_5],
  ['11011', DEAD_4],
  ['11101', DEAD_4], ['10111', DEAD_4],
  ['10101', DEAD_3],
  ['11001', DEAD_3], ['10011', DEAD_3]
])

const c6ToScore = new Map([
  ['011110', ALIVE_4],
  ['211110', DEAD_4], ['011112', DEAD_4],
  ['011010', ALIVE_3], ['010110', ALIVE_3],
  ['211100', DEAD_3], ['001112', DEAD_3],
  ['211010', DEAD_3], ['010112', DEAD_3],
  ['210110', DEAD_3], ['011012', DEAD_3],
  ['001100', ALIVE_2],
  ['010010', ALIVE_2],
  ['211000', DEAD_2], ['000112', DEAD_2],
  ['210100', DEAD_2], ['001012', DEAD_2],
  ['210010', DEAD_2], ['010012', DEAD_2],
  ['210000', DEAD_1], ['000012', DEAD_1]
])

const c7ToScore = new Map([
  ['0010100', ALIVE_2],
  ['0010102', ALIVE_2], ['2010100', ALIVE_2],
  ['0011100', ALIVE_3],
  ['2011100', ALIVE_3], ['0011102', ALIVE_3],
  ['2011102', DEAD_3],
  ['2011002', DEAD_2], ['2001102', DEAD_2],
  ['2010102', DEAD_2],
  ['0001000', ALIVE_1],
  ['2010002', DEAD_1], ['2000102', DEAD_1],
  ['2001002', DEAD_1]
])

/** Match chesses with pattern and return the score */
const evalPattern = (chesses: string, patternToScore: Map<string, number>, curIdx: string, nextIdx: string) => {
  let _chesses = convertChesses(chesses, curIdx, nextIdx)
  const score = patternToScore.get(_chesses)
  if (!score) return 0
  else return score
}


/** Add chessboard's boundary. Boundary is 3 */
const addBoundary = (line: number[]) => _.concat(3, line, 3).join('')

/**
 * Traverse the chessboard
 * @param b The Chess Board
 */
export const getEvalArray = (b: ChessBoard) => {
  const evalArray = []

  // horizontal
  for (let row = 0; row < 15; row++) {
    evalArray.push(addBoundary(b[row]))
  }

  // vertical
  for (let col = 0; col < 15; col++) {
    const tmp = []
    for (let row = 0; row < 15; row++) {
      tmp.push(b[row][col])
    }
    evalArray.push(addBoundary(tmp))
  }

  // top-left to bottom-right ↘️
  for (let row = 0; row <= 10; row++) {
    const tmp = []
    for (let i = 0; i < 15 - row; i++) {
      tmp.push(b[row + i][i])
    }
    evalArray.push(addBoundary(tmp))
  }
  for (let col = 1; col <= 10; col++) {
    const tmp = []
    for (let i = 0; i < 15 - col; i++) {
      tmp.push(b[i][col + i])
    }
    evalArray.push(addBoundary(tmp))
  }


  // top-right to buttom-left ↗️
  for (let col = 4; col < 15; col++) {
    const tmp = []
    for (let i = 0; i < col + 1; i++) {
      tmp.push(b[i][col - i])
    }
    evalArray.push(addBoundary(tmp))
  }
  for (let row = 1; row < 10; row++) {
    const tmp = []
    for (let i = 0; i < 15 - row; i++) {
      tmp.push(b[row + i][14 - i])
    }
    evalArray.push(addBoundary(tmp))
  }
  return evalArray
}

/**
 * { line: {aiIdxStr: score, humanIdxStr: score}}
 */
const historyLine2Score = new Map()

/**
 * Eval one line
 * @param l one line to eval
 * @param curIdx current turn's player idx
 */
export const evalLine = (l: string, curIdx: number) => {
  const nextIdxStr = (3 - curIdx).toString()
  const curIdxStr = curIdx.toString()
  if (historyLine2Score.get(l)?.get(curIdxStr)) return historyLine2Score.get(l).get(curIdxStr)
  if (!historyLine2Score.get(l)) historyLine2Score.set(l, new Map())

  let score = 0

  const mid = l.slice(1, -1)
  if (mid === '0'.repeat(mid.length)) {
    historyLine2Score.get(l).set(curIdx, 0)
    return 0
  }

  for (let i = 0; i < l.length - 5; i++) {
    score += evalPattern(l.slice(i, i + 5), c5ToScore, curIdxStr, nextIdxStr)
  }
  if (l.length >= 6) {
    for (let i = 0; i < l.length - 6; i++) [
      score += evalPattern(l.slice(i, i + 6), c6ToScore, curIdxStr, nextIdxStr)
    ]
  }
  if (l.length >= 7) {
    for (let i = 0; i < l.length - 7; i++) [
      score += evalPattern(l.slice(i, i + 7), c7ToScore, curIdxStr, nextIdxStr)
    ]
  }
  historyLine2Score.get(l).set(curIdx, score)
  return score
}

/**
 * Evaluate all board, for one role
 * @param b the chessboard
 * @param curIdx the current player's idx
 * @returns the score for the current player
 */
export function evalBoard(b: ChessBoard, curIdx: number) {
  const nextIdx = 3 - curIdx
  const lines = getEvalArray(b)
  let curPlayerScore = 0
  let nextPlayerScore = 0
  for (const line of lines) {
    curPlayerScore += evalLine(line, curIdx)
    nextPlayerScore += evalLine(line, nextIdx)
  }
  return curPlayerScore - nextPlayerScore
}


export function isWin(b: ChessBoard, curIdx: number): boolean {
  const nextIdxStr = (3 - curIdx).toString()
  const curIdxStr = curIdx.toString()
  const lines = getEvalArray(b)

  for (const line of lines) {
    let convertedLine = convertChesses(line, curIdxStr, nextIdxStr)
    for (let i = 0; i < convertedLine.length - 5; i++) {
      const chess5 = line.slice(i, i + 5)
      if (chess5 === '11111') return true
    }
  }
  return false
}
