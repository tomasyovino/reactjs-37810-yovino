import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
    const context = useContext(CartContext);

    return (
        <Badge badgeContent={context.calcItemsQty()} color="secondary">
            <ShoppingCartOutlined className="ShoppingCart" />
        </Badge>
    );
}

export default CartWidget;