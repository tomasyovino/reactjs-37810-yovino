import styled from "styled-components";

const Flex = styled.div`
    flex: 1;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ProductsContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    diplay: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`;

const ProductContainer = styled.div`
    margin: 5px;
    width: 300px;
    height: 350px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #FF090C;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: bolder;
    color: white;
    position: absolute;
    top: 0;
    padding: 20px;
    text-align: center;
    z-index: 2;
`;

const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #FF090C;
    position: absolute;
    z-index: 2;
`;

const Icon = styled.div`
    font-size: 12px;
    width: 100px;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.3);
    }
`;

const DetailContainer = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeadDetailInfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const ImageDetail = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    width: 655px;
`;

const TitleDetail = styled.div`
font-size: 20px;
font-weight: bolder;
padding: 20px;
text-align: center;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const BuyingDetailContainer = styled.div`
    display: flex;
`;

const Price  = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const MenuItem = styled.div`
    font-size: 20px;
    cursor: pointer;
    margin-left: 25px;
    color: white;
    font-weight: bolder;
`;

export {
    Flex, Wrapper, Left, Center, Right, 
    ProductAmountContainer, ProductAmount, 
    ProductsContainer, Info, 
    ProductContainer, Title, 
    Image, Icon, TitleDetail,
    DetailContainer, BuyingDetailContainer, HeadDetailInfoContainer, ImageDetail, InfoContainer, Desc, Price,
    MenuItem
};