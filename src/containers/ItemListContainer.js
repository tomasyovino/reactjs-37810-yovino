import ItemList from "../components/ItemList"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../utils/firestoreFetch";

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        firestoreFetch(categoryId)
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, [categoryId]);

    useEffect(() => {
        return(() => {
            setData([]);
        })
    }, []);

    return (
        <>
            <ItemList items={data}/>
        </>
    );
}

export default ItemListContainer;