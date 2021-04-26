import DisplayCategory from "./DisplayCategory"

const DisplayListCategory = ({categoryList}) => {
    return (  
        <div>
            {
            categoryList.map((category)=> <DisplayCategory category={category}/>)
            }
            

        </div>
    );
}
 
export default DisplayListCategory;