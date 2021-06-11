import Header from './header/header';
import Gallery from "react-photo-gallery";
import { photos } from "./APIs/photos";
import MiniNav from './header/mininav';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Galeria(){
    return(
        <container>
            <Header/>
            <Box m={1}>
            <MiniNav/>
            </Box>
            <Gallery photos={photos} direction={"column"}/>
            <Box m={1}>
                <Link to="/">
                    <Button variant="contained" style={{backgroundColor:'#647687',color:'white'}}>
                        Salir
                    </Button>
                </Link>
            </Box>
        </container>
    );
}

export default Galeria;