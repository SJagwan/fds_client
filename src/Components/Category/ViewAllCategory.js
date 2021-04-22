import DisplayListCategory from "./DisplayListCategory";

const ViewAllCategory = () => {

    const category = [
       { catId : "1",
        name : "sweets"
    },

     { catId : "2",
    name : "indian"
    },

    ];

    const response = {category : undefined, error : "this is an error"}
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