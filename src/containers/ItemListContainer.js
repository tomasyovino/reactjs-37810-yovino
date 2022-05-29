import ItemCount from "../components/ItemCount";
import ItemList from "../components/ItemList"
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const { products } = require('../utils/products');

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (categoryId === undefined) return item;
            return item.categoryId === parseInt(categoryId)
        }))
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, [data]);

    const onAdd = (qty) => {
        alert ("Seleccionaste " + qty + " productos.");
    }

    return (
        <>
            <ItemList items={data}/>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;