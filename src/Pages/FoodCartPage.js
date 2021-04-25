import AddItemToCart from "../components/foodCart/AddItemToCart";
import AddOrRemoveItemFromCart from "../components/foodCart/AddOrRemoveItemFromCart"

const FoodCartPage = () => {
    return ( 
        <div>
            <AddItemToCart/>
            <AddOrRemoveItemFromCart/>
        </div>
     );
}
 
export default FoodCartPage;