import ioc from "../../lib/ioc";
import NavBar from "../NavBar";
import backgroundPic from '../../assets/bg.jpg'
import { display } from "@mui/system";
import PlayPage from "../../pages/PlayPage";

interface IScaffoldProps {
    children: React.ReactNode;
}

export const Scaffold = ({
    children,
}: IScaffoldProps) => {

    

    return (
        <div style={{
            width: '100%', 
            height: '100vh', 
            background: `url(${backgroundPic})`, 
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center',
            display: 'flex'
        }}>
            <NavBar/>
            {/* {children} */}
            <PlayPage/>
        </div>
    )
};

export default Scaffold;
