import Header from './header/header';
import FormLogin from './forms/formLogin';
import ParticlesContainer from './particles/particlesContainer';
import Footer from './footer/footer';
function Home(){
    return(
        <container>
            <Header/>
            <ParticlesContainer/>
            <Footer/>
        </container>
    );
}

export default Home;