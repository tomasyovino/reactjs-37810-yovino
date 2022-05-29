import {useEffect, useState} from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
const {products} = require("../utils/products");

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idItem)))
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, []);
    return (
        <ItemDetail item={data} />
    );
}

export default ItemDetailContainer;