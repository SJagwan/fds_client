import { useDispatch, useSelector } from "react-redux";
import { itemToCartIncreaseThunk } from "../../redux/foodCart/itemToCart/itemToCartAction";
import './itemToCart.css'
const AddItemToCart = () => {

    const dispatch=useDispatch();

    const response=useSelector((state)=>{
        return{
            itemDetail:state.itemToCart.itemDetail,
            error:state.itemToCart.error
        }
    })



  const itemList = [
    { itemId: "0820997584", itemName: "Chocolate", cost: 1 },
    { itemId: "2277354043", itemName: "pizza", cost: 10 },
    { itemId: "7385067487", itemName: "colddrink", cost: 1 },
  ];

  const onHandleAdd=(itemId)=>{
      const data={
        itemId:itemId,
        customerId:"3180122623",
        quantity:1
      }
      dispatch(itemToCartIncreaseThunk(data))

  }

  return (
    <div className="cartItem">
      <h2 className="title">Add Item To Cart</h2>
      <div className="heading">
        <h5>Name</h5>
        <div className="">
          <h5>Cost</h5>
          <h6>ClickToAdd &#8595;</h6>
        </div>
      </div>
      {itemList.map((item) => (
        <div key={item.itemId} className="item">
          <h6>{item.itemName}</h6>
          <div>
            <h6>&#8377; {item.cost}</h6>
            <button type="submit" onClick={()=>onHandleAdd(item.itemId)} className="btn btn-primary">
              AddToCart
            </button>
          </div>
        </div>
      ))}
      <button className="btn btn-primary">Go To Cart</button>
    </div>
  );
};

export default AddItemToCart;
