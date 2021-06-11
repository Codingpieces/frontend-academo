import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import DonutLargeTwoToneIcon from '@material-ui/icons/DonutLargeTwoTone';

function IconLogo(){
    return(
        <container>
            <Box component="span" m={1}>
                <IconButton 
                    edge="start"  
                    color="inherit" 
                    aria-label="logo">
                    <DonutLargeTwoToneIcon />
                </IconButton>
            </Box>
            
        </container>
    );
}

export default IconLogo;