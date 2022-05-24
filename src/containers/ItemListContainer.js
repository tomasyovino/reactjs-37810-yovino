import Producto from "../components/ItemCount";

const ItemListContainer = () => {
    return (
        <div className="ItemListContainer">
            <Producto stock={5} initial={1} />
            <Producto stock={0} initial={1} />
        </div>
    );
}

export default ItemListContainer;