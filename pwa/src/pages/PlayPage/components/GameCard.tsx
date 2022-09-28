import { observer } from "mobx-react";
import { useState } from "react";

import ioc from "../../../lib/ioc";



interface IGameCardProps {
    bgColor: string;
    picture: string;
    id: number,
}

export const GameCard = ({
    bgColor,
    picture,
    id
}: IGameCardProps) => {

    const [isHovering, setIsHovering] = useState(false);

    const styles = {
        container: {
            borderRadius: '20px',
            width: '100%',
            height: '30vh',
            backgroundColor: bgColor,
            backdropFilter: 'blur(10px)',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            transform: isHovering ? 'scale(1.1)' : '',
            transition: '.4s',
        },
        picture: {
            padding: '5px',
            height: '100%'
           
        }
    }

    

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const startGame= (id: number) => {
        console.log('action has happened')
        ioc.playService.startGame(id);
        
    }


    return (
        <div 
        style={styles.container} 
        onClick={() => startGame(id)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >            
            <img style={styles.picture} src={picture} alt="pic" />   
        </div>
        
    )
}

export default observer(GameCard)