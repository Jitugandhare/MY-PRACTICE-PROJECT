import { ADD_BLOG_SUCCESS, DELETE_BLOG_SUCCESS, GET_BLOGS_ERROR, GET_BLOGS_REQUEST, GET_BLOGS_SUCCESS, UPDATE_BLOG_SUCCESS } from "../actionTypes"


export const getBlogs=(url)=>(dispatch)=>{
   dispatch({type:GET_BLOGS_REQUEST});
   fetch(url)
   .then((res)=>res.json())
   .then(res=>{
    dispatch({
        type:GET_BLOGS_SUCCESS,
        payload:res
    })})
    .catch((err)=>{
        dispatch({
            type:GET_BLOGS_ERROR
        })
    })
}

export const addBlog=(newBlog)=>(dispatch)=>{
    dispatch({type:GET_BLOGS_REQUEST});
    fetch("https://backend-mock-6-ao4x.onrender.com/blogs/add",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(newBlog)
    })
    .then((res)=>res.json())
    .then(res=>{
     console.log(res)
     dispatch({
         type:ADD_BLOG_SUCCESS,
         payload:res
     })})
     .catch((err)=>{
         dispatch({
             type:GET_BLOGS_ERROR
         })
     })
 }

 export const updateBlog=(id,newBlog)=>(dispatch)=>{
    dispatch({type:GET_BLOGS_REQUEST});
    fetch(`https://backend-mock-6-ao4x.onrender.com/blogs/edit/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json",
            "authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(newBlog)
    })
    .then((res)=>res.json())
    .then(res=>{
     console.log(res)
     dispatch({
         type:UPDATE_BLOG_SUCCESS,
     })})
     .catch((err)=>{
         dispatch({
             type:GET_BLOGS_ERROR
         })
     })
 }

 export const deleteBlog=(id)=>(dispatch)=>{
    dispatch({type:GET_BLOGS_REQUEST});
    fetch(`https://backend-mock-6-ao4x.onrender.com/blogs/delete/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            "authorization": `Bearer ${localStorage.getItem("token")}`
        },
    })
    .then((res)=>res.json())
    .then(res=>{
     dispatch({
         type:DELETE_BLOG_SUCCESS,
     })})
     .catch((err)=>{
         dispatch({
             type:GET_BLOGS_ERROR
         })
     })
 }