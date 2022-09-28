import { observer } from "mobx-react";

import ioc from "../../lib/ioc";
import GameCard from "./components/GameCard";
import closeIcon from '../../assets/close.svg'
import { useState } from "react";

export const PlayPage = () => {

    const [isHovering, setIsHovering] = useState(false);

    const styles = {
        playPage: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5%',
            margin: '0 auto',
            justifyItems: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '70%'
        }, 
        closeIcon: {
            position: 'absolute' as 'absolute',
            right: '20px',
            top: '20px',
            transform: isHovering ? 'scale(1.1)' : '',
            transition: '.4s',
            cursor: 'pointer',
        }
    }

    const games = ioc.playService.games; 

    const closeWindow = () => {
        window.close()
        console.log('window close')
    }


    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    
    return (
        <div style={styles.playPage}>
            <div style={styles.closeIcon}>
                <img 
                    onClick={closeWindow} 
                    onMouseLeave={handleMouseLeave} 
                    onMouseEnter={handleMouseEnter} 
                    src={closeIcon} 
                    alt="close" 
                />
            </div>
            {games.map(i => (
                <GameCard
                    bgColor={i.bgColor}
                    picture={i.picture}
                    id={i.id}
                    key={i.id}
                />)
            )}
        </div>
    )
}

export default observer(PlayPage);