const DisplayCategory = ({category}) => {
    return (
        <div className="container-sm p-3">
            <p>CategoryId : {category.catId}</p>
            <p>Category Name :{category.name}</p>
        </div>
      );
}
 
export default DisplayCategory;