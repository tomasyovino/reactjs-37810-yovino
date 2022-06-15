import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { firestoreFetchOne } from "../utils/firestoreFetch";

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <ItemDetail item={data} />
    );
}

export default ItemDetailContainer;