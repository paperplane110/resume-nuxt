/* 策略 */
import { genTraverseAll } from "./gen"
import { evalBoard } from "./eval"

type ChessBoard = number[][]
type SearchResult = {
  score: number,
  row: number,
  col: number,
  cnt: number
}

/**
 * 当前全局最大策略，搜索深度 1
 * @param b chessboard
 * @param curIdx 当前玩家序号
 * @returns 落子位置
 */
export function allMax(b: ChessBoard, curIdx: number): SearchResult {
  const gen = genTraverseAll(b, curIdx)
  let max = -100000
  let row = -1
  let col = -1
  let cnt = 0
  for (let genBoard of gen) {
    cnt += 1
    const score = evalBoard(genBoard.board, curIdx)
    if (score > max) {
      row = genBoard.row
      col = genBoard.col
      max = score
      // console.log(point, max)
    }
  }
  return { row, col, score: max, cnt }
}


export function maxMinSearch(deep: number, b: ChessBoard, curIdx: number) {
  let row = -1
  let col = -1
  const nextIdx = 3 - curIdx
  const nextDeep = deep - 1
  const gen = genTraverseAll(b, curIdx)

  if (deep === 0) {
    // reach the leaf node
    let max = -100000
    for (let genBoard of gen) {
      const score = evalBoard(genBoard.board, curIdx)
      if (score > max) {
        row = genBoard.row
        col = genBoard.col
        max = score
      }
    }
    return { score: max, row, col }
  } else if (deep % 2 === 0) {
    // search max child
    let max = -100000
    for (const nextStep of gen) {
      const childNode = maxMinSearch(nextDeep, nextStep.board, nextIdx)
      if (childNode.score > max) {
        max = childNode.score
        row = childNode.row
        col = childNode.col
      }
    }
    return { score: max, row, col }
  } else {
    // search min child
    let min = 100000
    for (const nextStep of gen) {
      const childNode = maxMinSearch(nextDeep, nextStep.board, nextIdx)
      const humanScore = childNode.score * -1
      if (humanScore < min) {
        min = humanScore
        row = childNode.row
        col = childNode.col
      }
    }
    return { score: min, row, col }
  }
}


/*
Alpha Beta 剪枝算法是一种安全的剪枝策略，也就是不会对棋力产生任何负面影响。它的基本依据是：棋手不会做出对自己不利的选择。
依据这个前提，如果一个节点明显是不利于自己的节点，那么就可以直接剪掉这个节点。

前面讲到过，AI会在MAX层选择最大节点，而玩家会在MIN层选择最小节点。那么如下两种情况就是分别对双方不利的选择：

1. 在MAX层，假设当前层已经搜索到一个最大值 X， 如果发现下一个节点的下一层（也就是MIN层）会产生一个比X还小的值，那么就直接剪掉此节点。
2. 在MIN层，假设当前层已经搜索到一个最小值 Y， 如果发现下一个节点的下一层（也就是MAX层）会产生一个比Y还大的值，那么就直接剪掉此节点。
 */

export function alphaBetaSearch(deep: number, alphaBeta: number, b: ChessBoard, curIdx: number, isRoot = false): SearchResult {
  let row = -1
  let col = -1
  const nextIdx = 3 - curIdx
  const nextDeep = deep - 1
  const gen = genTraverseAll(b, curIdx)
  let cnt = 0

  if (deep === 0) {
    // reach the leaf node
    let max = -100000
    for (let genBoard of gen) {
      cnt += 1
      const score = evalBoard(genBoard.board, curIdx)
      if (score > max) {
        row = genBoard.row
        col = genBoard.col
        max = score
      }
    }
    return { score: max, row, col, cnt }
  } else if (deep % 2 === 0) {
    // search max child
    console.log("ai:", deep,)
    let max = -100000
    for (const nextStep of gen) {
      const childNode = alphaBetaSearch(nextDeep, max, nextStep.board, nextIdx)
      cnt += childNode.cnt
      console.log("total node:", cnt)
      const aiScore = childNode.score
      console.log(aiScore, alphaBeta)
      if (aiScore > max) {
        max = childNode.score
        row = childNode.row
        col = childNode.col
      }
      if (aiScore > alphaBeta && !isRoot) {
        console.log("max prune")
        break
      }
    }
    return { score: max, row, col, cnt }
  } else {
    // search min child
    let min = 100000
    console.log({ deep, alphaBeta, curIdx })
    for (const nextStep of gen) {
      const childNode = alphaBetaSearch(nextDeep, min, nextStep.board, nextIdx)
      cnt += childNode.cnt
      const humanScore = childNode.score * -1
      if (humanScore < min) {
        min = humanScore
        row = childNode.row
        col = childNode.col
      }
      if (humanScore < alphaBeta) {
        console.log("min prune")
        break
      }
    }
    return { score: min, row, col, cnt }
  }
}
