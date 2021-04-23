import axios from 'axios';
const baseUrl = "http://localhost:8585";


export function addCategoryRequest(data){
    console.log("--------- Inside Add Category Request ---------")
    const url=baseUrl+"/category/add";
    // const data={name:catName};
    const promise=axios.post(url,data);
    return promise;

}

export function updateCategoryRequest(data){
    console.log("--------- Inside update Category Request ---------")
    const url=baseUrl+"/category/update";
    // const data={name:catName};
    const promise=axios.put(url,data);
    return promise;

}

export function viewCategoryRequest(id){
    console.log("--------- Inside View Category Request ---------")
    const url=baseUrl+`/category/view/${id}`;
    // const data={name:catName};
    const promise=axios.get(url);
    return promise;

}

export function viewAllCategoryRequest(){
    console.log("--------- Inside View All Category Request ---------")
    const url=baseUrl+"/category/viewAll";
    // const data={name:catName};
    const promise=axios.get(url);
    return promise;

}