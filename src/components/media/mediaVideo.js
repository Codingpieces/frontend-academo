import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

  const useStyles = makeStyles({
    responsiveBox:{
        position:'relative',
    },
    iframeVideo:{

        borderRadius:'5%',
        boxShadow: '0px 0px 5px',
    }
  });
  
export default function MediaVideo(props) {
      const classes = useStyles();
    
      return (

            <Box className={classes.responsiveBox}  m={1}>
                    <iframe className ={classes.iframeVideo}
                    width='560'
                    height='315'
                    src={props.src}
                    title="Academo Video"
                    frameborder="0"
                    allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; gyroscope"
                    allowfullscreen>
                    </iframe>
            </Box>

      );
    }