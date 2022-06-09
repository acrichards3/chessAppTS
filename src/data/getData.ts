export const ChessWebAPI = require('chess-web-api');
export const chessAPI = new ChessWebAPI();

export default function Data(user: string) {
    chessAPI.getPlayer(user).then(
      async function (response: any) {
        console.log('Player Profile', await response.body);
      },
      function (err: Error) {
        console.error(err);
      }
    );
}