import Producto from "../components/ItemCount";

const ItemListContainer = () => {
    return (
        <div className="ItemListContainer">
            <Producto name={"Final/es aprobado/s"} stock={5} initial={1} />
            <Producto name={"Final/es desaprobado/s"} stock={0} initial={1} />
        </div>
    );
}

export default ItemListContainer;