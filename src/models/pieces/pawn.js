import Square from '../square.js'
import Player from '../player.js'
import Piece from './piece.js'

export default class Pawn {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)

    // the list of valid moves
    let moves = []

    if (this.player === Player.WHITE && location.row < 7) {
      // white pawns can move "up" by one
      moves.push(new Square(location.row + 1, location.col))

      if (location.row === 1) {
        moves.push(new Square(location.row + 2, location.col))
      }
    } else if (this.player === Player.BLACK && location.row > 0) {
      // black pawns can move "down" by one
      moves.push(new Square(location.row - 1, location.col))

      if (location.row === 6) {
        moves.push(new Square(location.row - 2, location.col))
      }
    }

    return moves
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}
