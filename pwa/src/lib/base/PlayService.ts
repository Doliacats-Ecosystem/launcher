import { makeAutoObservable } from "mobx";

import { run } from "../../utils/run";

import obstPic from '../../assets/obst.png';
import battlePic from '../../assets/battle.png';
import racePic from '../../assets/race.png';
import arcadePic from '../../assets/arcade.png';



interface IGame {
    id: number,
    bgColor: string,
    path: string,
    picture: any,
}

export class PlayService {

    games: IGame[] = [
        {
            id: 1,
            bgColor: 'rgba(0, 160, 250, .21)',
            path: '"C:\\Program Files\\Internet Explorer\\iexplore.exe"',
            picture: obstPic
        },
        {
            id: 2,
            bgColor: 'rgba(156, 255, 148, .21)',
            path: '"C:\\Program Files\\Internet Explorer\\iexplore.exe"',
            picture: battlePic
        },
        {
            id: 3,
            bgColor: 'rgba(255, 0, 184, .21)',
            path: 'start C:\\MeowRush\\game1.cmd',
            picture: racePic
        },
        {
            id: 4,
            bgColor: 'rgba(255, 199, 0, .21)',
            path: 'start C:\\MeowRush\\game1.cmd',
            picture: arcadePic
        }
    ]

    gamesMap = new Map<number, IGame>(this.games.map(p => [p.id, p]))

    constructor() {
      makeAutoObservable(this);
    }

    theGame = (id: number) => {
        return (this.gamesMap.get(id))
    }

    startGame = (id: number) => {
        run(this.theGame(id)!.path);
        console.log(this.theGame(id))
    }
}
export default PlayService;
  