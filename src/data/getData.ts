import OPENINGS from "./OPENINGS";
import { Player } from "./responseTypes/statInterface";
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

        for (let i=0; i < games.length; i++) {
          const game = games[i];
          const currentGamePgn: string = game.pgn;
          const color: string = (user.toUpperCase() === game.white.username) ? 'white' : 'black';
          const timeClass: string = game.time_class;
          const isRated: boolean = game.rated;

          const findResult = () => {
            let result: string = '';

            if (color === 'white') {
              result =  game.white.result;
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
              console.log('ERR: NO GAME RESULT');
              return;
            }

            return result;
          }


          for (let j=0; j < allOpenings.length; j++) {
            const currentOpening = allOpenings[j];

            if(currentGamePgn.includes(currentOpening.url) && isRated) {
              currentOpening.count += 1;

              switch (color) {
                case 'white':
                  currentOpening.whiteCount += 1;
                  break;
                case 'black':
                  currentOpening.blackCount += 1;
                  break;
                default:
                  return;
              }

              switch (findResult()) {
                case 'win':
                  currentOpening.wins += 1;
                  break;
                case 'loss':
                  currentOpening.losses += 1;
                  break;
                case 'draw':
                  currentOpening.draws += 1;
                  break;
                default:
                  return;
              }

              switch (timeClass) {
                case 'rapid':
                  currentOpening.rapidGames += 1;
                  break;
                case 'blitz':
                  currentOpening.blitzGames += 1;
                  break;
                case 'bullet':
                  currentOpening.bulletGames += 1;
                  break;
                case 'daily':
                  currentOpening.dailyGames += 1;
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
