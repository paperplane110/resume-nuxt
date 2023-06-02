import { genTraverseAll } from "./gen"
import { evalBoard } from "./eval"

type ChessBoard = number[][]

export function allMax(b: ChessBoard, curIdx: number) {
  const gen = genTraverseAll(b, curIdx)
  let max = -100000
  let point = { row: -1, col: -1 }
  for (let genBoard of gen) {
    const score = evalBoard(genBoard.board, curIdx)
    if (score > max) {
      point.row = genBoard.row
      point.col = genBoard.col
      max = score
      // console.log(point, max)
    }
  }
  return point
}





/*
Alpha Beta 剪枝算法是一种安全的剪枝策略，也就是不会对棋力产生任何负面影响。它的基本依据是：棋手不会做出对自己不利的选择。
依据这个前提，如果一个节点明显是不利于自己的节点，那么就可以直接剪掉这个节点。

前面讲到过，AI会在MAX层选择最大节点，而玩家会在MIN层选择最小节点。那么如下两种情况就是分别对双方不利的选择：

1. 在MAX层，假设当前层已经搜索到一个最大值 X， 如果发现下一个节点的下一层（也就是MIN层）会产生一个比X还小的值，那么就直接剪掉此节点。
2. 在MIN层，假设当前层已经搜索到一个最小值 Y， 如果发现下一个节点的下一层（也就是MAX层）会产生一个比Y还大的值，那么就直接剪掉此节点。
 */
