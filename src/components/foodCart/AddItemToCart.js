import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { itemToCartIncreaseThunk } from "../../redux/foodCart/itemToCart/itemToCartAction";
import { viewAllItemThunk } from "../../redux/item/viewAllItem/viewAllItemAction";
import './itemToCart.css'
const AddItemToCart = ({history}) => {

    const dispatch=useDispatch();

    const response=useSelector((state)=>{
        return{
            itemDetail:state.itemToCart.itemDetail,
            itemList:state.viewAllItem.items,
            error:state.itemToCart.error,
            customerId:state.viewAllCustomer.customer,
        }
    })


  const fetchAll=()=>
  {
    dispatch(viewAllItemThunk())
  }
  useEffect(fetchAll,[])

  const onHandleAdd=(itemId)=>{
      const data={
        itemId:itemId,
        customerId:response.customerId,
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
          <h6>Cost</h6>
          <h6>ClickToAdd &#8595;</h6>
        </div>
      </div>
      {response.itemList.map((item) => (
        <div key={item.itemId} className="item">
          <h6>{item.itemName}</h6>
          <div>
            <h6>&#8377; {item.cost}</h6>
            <button type="submit" onClick={()=>onHandleAdd(item.itemId)} className="btn btn-primary btn-sm">
              AddToCart
            </button>
          </div>
        </div>
      ))}
      <button className="btn btn-primary" onClick={()=>history.push("/cart/cart")}>Go To Cart</button>
    </div>
  );
};

export default withRouter(AddItemToCart);
