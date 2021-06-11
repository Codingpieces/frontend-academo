import ButtonGroup from '@material-ui/core/ButtonGroup';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function MiniNav(){
    return(
        <ButtonGroup variant="contained"  aria-label="contained primary button group">
            <Link to="/videos">
                <Button variant="contained" style={{backgroundColor:'#647687',color:'white'}}>
                    Videos
                </Button>
            </Link>
            <Link to="/Galeria">
                <Button variant="contained" style={{backgroundColor:'#647687',color:'white'}}>
                    Galeria
                </Button>
            </Link>
        </ButtonGroup>
    );
}

export default MiniNav;
