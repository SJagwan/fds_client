const DisplayItemDetail = ({ item }) => {
  return (
    <div>
      <h1>Display Item Details</h1>
      <p>{item.itemName}</p>
      <p>{item.quantity}</p>
      <p>{item.cost}</p>
      <p>{item.categoryName}</p>
    </div>
  );
};

export default DisplayItemDetail;
