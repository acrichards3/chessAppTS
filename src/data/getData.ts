export const ChessWebAPI = require('chess-web-api');
export const chessAPI = new ChessWebAPI();

export default function Data(user: string) {

  interface Response {
    body: any;
    headers: string;
    statusCode: number;
  }

    chessAPI.getPlayerMonthlyArchives(user).then(
      async function (response: Response) {
        console.log('Player Profile', response.body);
        const body = response.body.archives;
        const recents: string[] = [];
        const results = [];

        for (let i=body.length; i > body.length-4; i--) {
          recents.push(body[i]);
        }

        async function getJson(num: number) {
          const response = await fetch(recents[num]);
          return await response.json();
        }

        for (let i = 1; i < recents.length; i++) {
          results.push(getJson(i));
        }

        console.log(results);

        return results;
      },
      function (err: Error) {
        console.error(err);
      }
    );
}