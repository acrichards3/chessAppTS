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
      //console.log('Player Profile', response.body);
      const body = response.body.archives;
      const recents: string[] = [];
      const results: any = [];

      for (let i = body.length; i > body.length - 4; i--) {
        // grabs last 3 months of data
        recents.push(body[i]);
      }

      async function getJson(num: number) {
        const response = await fetch(recents[num]);
        return await response.json();
      }

      for (let i = 1; i < recents.length; i++) {
        results.push(await getJson(i));
      }

      console.log(
        'results',
        results[0].games.concat(results[1].games.concat(results[2].games))
      );

      async function gameData() {
        let gameData;
        for (let i = 1; i < results.length; i++) {
          gameData = gameData
            ? gameData.concat(results[i].games)
            : results[i - 1].games.concat(results[i].games);
        }
        return gameData;
      }

      console.log('game data', gameData());

      return gameData();
    },
    function (err: Error) {
      console.error(err);
    }
  );
}
