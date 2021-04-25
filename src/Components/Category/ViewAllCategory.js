import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewAllCategoryThunk } from "../../redux/category/viewAllCategory/viewAllCategoryAction";
import DisplayListCategory from "./DisplayListCategory";

const ViewAllCategory = () => {
    const dispatch = useDispatch();
  const response = useSelector((state)=>{
      return{
          category:state.viewAllCategory.categories,
          error:state.viewAllCategory.error
      }
  })

  const fetchAllCategory=()=>{dispatch(viewAllCategoryThunk());}

   

    useEffect(fetchAllCategory,[])
    return ( 
        <div>
             {
               response.category ? 
               <DisplayListCategory categoryList={response.category}/>: ""
            }

           {
               response.error ? response.error : ""
           }


        </div>
     );
}
 
export default ViewAllCategory;