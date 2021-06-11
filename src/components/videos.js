import {Link} from 'react-router-dom';
import Header from './header/header';
import Box from '@material-ui/core/Box';
import MediaVideo from './media/mediaVideo';
import {videos} from './APIs/videosApi.js';
import MiniNav from './header/mininav';
import Button from '@material-ui/core/Button';

function Videos(){
    return(
        <container>
            <Header/>
            <Box m={1}>
                <MiniNav/>
            </Box>

            <Box style={{
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'center',
            }}>
            {videos.map((video) => (
                <MediaVideo src={video} />
            ))}
                
            </Box>
            <Box>
                <Link to="/">
                    <Button variant="contained" style={{backgroundColor:'#647687',color:'white'}}>Salir</Button>
                </Link>

            </Box>
        </container>
    );
}

export default Videos;