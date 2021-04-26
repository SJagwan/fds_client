const DisplayCategory = ({category}) => {
    return (
        <div>
            <h1>Displaying Category Details</h1>
            <p>{category.catId}</p>
            <p>{category.name}</p>
        </div>
      );
}
 
export default DisplayCategory;