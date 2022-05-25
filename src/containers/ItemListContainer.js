import ItemCount from "../components/ItemCount";
import ItemList from "../components/ItemList"
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
const { products } = require('../utils/products');

const ItemListContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, [data]);
    console.log(data);
    return (
        <>
            <ItemList items={data}/>
            <ItemCount stock={5} initial={1} />
        </>
    );
}

export default ItemListContainer;