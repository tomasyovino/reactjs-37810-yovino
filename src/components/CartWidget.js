import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = ({condition}) => {
    const context = useContext(CartContext);
    condition = context.calcItemsQty();
    return (
        <>
        {
            condition !== 0
            ?   <Badge badgeContent={condition} color= "secondary">
                    <ShoppingCartOutlined className="ShoppingCart" />
                </Badge>
            : <></>
        }
        </>
    );
}

export default CartWidget;