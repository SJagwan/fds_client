const DisplayItemDetail = ({ item }) => {
  return (
    <div className="container-sm p-3">
      <p>Item ID : {item.itemId}</p>
      <p>Item Name : {item.itemName}</p>
      <p>Item Quantity{item.quantity}</p>
      <p>Item Cost : {item.cost}</p>
      <p>Category : {item.categoryName}</p>
    </div>
  );
};

export default DisplayItemDetail;
