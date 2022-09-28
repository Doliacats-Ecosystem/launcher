import { useState } from "react"

import ioc from "../../lib/ioc"

import CloseIcon from '../../assets/close-icon.svg'
import walletIcon from '../../assets/wallet.svg'
import catImage from '../../assets/catImage.jpg'

export const NavBar = () => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const styles = {
        navigation: {
            display: 'flex',
            flexDirection: "column" as "column",
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(128, 198, 237, .7)',
            // webkitAppRegion: 'drag',
            // webkitUserSelect: 'none',
        },
        avatar: {
            borderRadius: '100%',
            backgroundColor:'red',
            width: '88px',
            height: '88px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '10px'
        },
        walletContainer: {
            padding: '5px'
        },
        wallet: {
            transform: isHovering ? 'scale(1.1)' : '',
            transition: '.4s',
            width: '100%'
        },
        

        
        innerContainer: {
            display: 'flex',
            alignItems: 'center'
        },
        pagesContainer: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10px',
            webkitAppRegion: 'no-drag',
        },
        home: {
            cursor: 'pointer',
            paddingRight: '10px',
        },
        play: {
            cursor: 'pointer',
        },
        exit: {
            padding: '10px',
            cursor: 'pointer',
            webkitAppRegion: 'no-drag',

        },
        exitImage: {
            width: "30px",
            transform: isHovering ? 'scale(1.2)' : '',
            transition: '.4s',

        },
        login: {
            webkitAppRegion: 'no-drag',
            paddingRight: '10px',
        },
       
        padding: {
            paddingRight: '10px',
        }
    }


    // const goToMainPage = () => {
    //     ioc.routerService.push('/')
    // }

    // const goToPlayPage = () => {
    //     ioc.routerService.push('/play')
    // }

   

    const connectWallet = () => {
        ioc.walletService.connectWallet()
        console.log('wallet connect')
    }
    return (
        <div style={styles.navigation}>
            <div style={styles.avatar}>
                <img style={{borderRadius: '100%'}} src={catImage} alt="avatar" />
            </div>
            <div style={styles.walletContainer}>
                <img 
                    onClick={connectWallet} 
                    style={styles.wallet} 
                    src={walletIcon} 
                    alt="wallet" 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </div>
        </div>
    )
}

export default NavBar;