import styled from "styled-components";
import { Link } from "react-router-dom";
import homeImage from "../Assets/Images/homeImage.webp";

const HomeContent = styled.div`
    min-height:100vh;
    background-color: #FF090C;
    display: flex;
    justify-content: center;
    overflow:hidden;
`;

const HomeLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    margin-left: 100px;
    color: white;
`;

const HomeRight = styled.div`
    width: 100%;
    min-height:80vh;
    border-radius: 0 0 0 100%;
    border-left: 30px solid white;
    background-image: url(${homeImage});
    background-size: contain;
`;

const Title = styled.h2`
    font-size: 42px;
    font-weight: bold;
`;

const TitleDescription = styled.span`
    font-size: 24px;
    font-weight: lighter;
`;

const Button = styled.button`
    cursor: pointer;
    padding: 15px 30px;
    background-color: black;
    color: white;
    font-size: 24px;
    border-radius:30px;
    font-weight: 600;
`;

const Home = () => {
    return(
        <HomeContent>
            <HomeLeft>
                <Title>LA MASA SECRETA QUE TE ENCANTARÁ</Title>
                <TitleDescription>Rápida, jugosa y crocante. Una receta sabrosa en todos los sentidos.</TitleDescription>
                <Link to="/order-now" className='Link orderNow_Link'><Button id="orderNowNow">PEDIR AHORA</Button></Link>
            </HomeLeft>
            <HomeRight />
        </HomeContent>
    );
}

export default Home;