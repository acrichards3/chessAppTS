import OPENINGS from "./OPENINGS";
import { WIN, LOSS, DRAW } from './OPENINGS_ARRAYS';
export const ChessWebAPI = require('chess-web-api');
export const chessAPI = new ChessWebAPI();

export default function Data(user: string) {
  interface Response {
    body: any;
    headers: string;
    statusCode: number;
  }

  chessAPI
    .getPlayerMonthlyArchives(user)
    .then(
      async function (response: Response) {
        //console.log('Player Profile', response.body);
        const body = response.body.archives;
        const recents: string[] = [];
        const results: any = [];

        for (let i = body.length; i > body.length - 4; i--) {
          recents.push(body[i]);
        }

        async function getJson(num: number) {
          const response = await fetch(recents[num]);
          return await response.json();
        }

        for (let i = 1; i < recents.length; i++) {
          results.push(await getJson(i));
        }

        //console.log('results', results);

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
    )
    .then(
      function (games: Array<any>) {
        const allOpenings = OPENINGS();

        for (let i = 0; i < games.length; i++) {
          const game = games[i];
          const currentGamePgn: string = game.pgn;
          const color: string = (user.toUpperCase() === game.white.username) ? 'white' : 'black';
          const timeClass: string = game.time_class;
          const isRated: boolean = game.rated;

          for (let j=0; j < allOpenings.length; j++) {
            const currentOpening = allOpenings[j];

            const findResult = () => {
              let result: string = '';

              if (color === 'white') {
                result = game.white.result;
              } else {
                result = game.black.result;
              }

              if (WIN.includes(result)) {
                result = 'win';
              } else if (LOSS.includes(result)) {
                result = 'loss';
              } else if (DRAW.includes(result)) {
                result = 'draw';
              } else {
                console.log('ERR: NO GAME RESULT', result, game, currentOpening);
                return;
              }

              return result;
            };

            if(currentGamePgn.includes(currentOpening.url) && isRated) {
              currentOpening.count++;

              switch (color) {
                case 'white':
                  currentOpening.whiteCount++;
                  break;
                case 'black':
                  currentOpening.blackCount++;
                  break;
                default:
                  return;
              }

              switch (findResult()) {
                case 'win':
                  currentOpening.wins++;
                  break;
                case 'loss':
                  currentOpening.losses++;
                  break;
                case 'draw':
                  currentOpening.draws++;
                  break;
                default:
                  return;
              }

              switch (timeClass) {
                case 'rapid':
                  currentOpening.rapidGames++;
                  break;
                case 'blitz':
                  currentOpening.blitzGames++;
                  break;
                case 'bullet':
                  currentOpening.bulletGames++;
                  break;
                case 'daily':
                  currentOpening.dailyGames++;
                  break;
                default:
                  return;
              }
            }
          }
          console.log(allOpenings, 'testtttt');
        }
      },
      function (err: Error) {
        console.error(err);
      }
    );
}
