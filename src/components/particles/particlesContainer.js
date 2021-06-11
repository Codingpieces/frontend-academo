import Particles from 'react-particles-js';
import FormLogin from '../forms/formLogin';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth:315,
      backgroundAttachment: 'fixed',
      backgroundColor:'#eee',
    },

});

  
export default function ParticlesContainer() {
    return(
        <section className='background-particles' style={{
            backgroundColor:"#647687",
            padding:'2em',
            display:'flex',
            justifyContent:'center',
            flexWrap:'wrap',
            }}>
            <Particles  style={{position:'relative'}}
                polygon={{
                    enable: true,
                    debug: true,
                    move: {
                        radius: 1
                    }
                }}
                params={{
                background: {
                    color: "#4f4e58",
                    margin:'0',
                    padding:'0',
                },
                particles: {
                    number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 1000,
                        }
                        }
                },
            	interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse"
                            }
                        }
                    }    
                }}
            />
            <FormLogin/>
        </section>

    );

}