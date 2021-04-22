import DisplayItemDetail from "./DisplayItemDetail";

const DisplayListItemDetail = ({itemList}) => {
    return ( 
        <div>
            {
                itemList.map((item)=> <div key={item.itemId}> <DisplayItemDetail item={item}/></div>)
            }
        </div>
     );
}
 
export default DisplayListItemDetail
;