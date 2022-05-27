import {useEffect, useState, UseState} from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "../components/ItemDetail";
const {products} = require("../utils/products");

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        customFetch(2000, products[0])
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={data} />
    );
}

export default ItemDetailContainer;