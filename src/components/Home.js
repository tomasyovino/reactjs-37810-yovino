import { Link } from "react-router-dom";
import { HomeContent, HomeLeft, HomeRight, HomeTitle, HomeTitleDescription, HomeButton } from "./StyledComponents";

const Home = () => {
    return(
        <HomeContent>
            <HomeLeft>
                <HomeTitle>LA MASA SECRETA QUE TE ENCANTARÁ</HomeTitle>
                <HomeTitleDescription>Rápida, jugosa y crocante. Una receta sabrosa en todos los sentidos.</HomeTitleDescription>
                <Link to="/order-now" className='Link orderNow_Link'><HomeButton id="orderNowNow">PEDIR AHORA</HomeButton></Link>
            </HomeLeft>
            <HomeRight />
        </HomeContent>
    );
}

export default Home;