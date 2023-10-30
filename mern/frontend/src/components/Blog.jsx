import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Heading, VStack, Flex, Input, Select } from '@chakra-ui/react';
import { addBlog, getBlogs } from '../redux/blogReducer/action';
import BlogCard from './BlogCard';
import FormModal from './FormModal';
import {useNavigate} from 'react-router-dom'
const Blog = () => {
    const { isAuth } = useSelector(store => store.authReducer);
    const { blogs } = useSelector(store => store.blogReducer);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [filterCategory, setFilterCategoy] = useState("");
    const dispatch = useDispatch();
    const navigate=useNavigate()
  
    const handleAddBlog = () => {
      const blog = {
        title: title,
        content: content,
        category: category
      };
      dispatch(addBlog(blog));
    };

    useEffect(() => {
      let url="https://backend-mock-6-ao4x.onrender.com/blogs/";

      if(search){
        url=`https://backend-mock-6-ao4x.onrender.com/blogs?title=${search}`
      }
      else if(filterCategory){
        url=`https://backend-mock-6-ao4x.onrender.com/blogs?category=${filterCategory}`
      }
      else if(sort){
        url=`https://backend-mock-6-ao4x.onrender.com/blogs?sort=${sort}&order=date`
      } 
      else if(sort && filterCategory){
        url=`https://backend-mock-6-ao4x.onrender.com/blogs?category=${filterCategory}&sort=${sort}&order=date`
      }
      
      if(localStorage.getItem("token")){

        dispatch(getBlogs(url));
      }
      else{
        navigate("/signin");
      }

    }, [dispatch,blogs,search,filterCategory,sort]);

    const handleLogout=()=>{
      localStorage.removeItem("token");
    }
  
    return (
      <VStack spacing={4} align="center">
        <Heading size="xl">Welcome to Our Blog</Heading>
        <div style={{display:"flex",gap:"20px"}}>
          <Input placeholder="Search by Title"value={search} onChange={(e)=>setSearch(e.target.value)}/>
          <Select value={filterCategory} onChange={e=>setFilterCategoy(e.target.value)}>
            <option value={""}>Filter by Category</option>
            <option value={"Tech"}>Tech</option>
            <option value={"Business"}>Business</option>
            <option value={"Lifestyle"}>LifeStyle</option>
            <option value={"Entertainment"}>Entertainment</option>
          </Select>
          <Select value={sort} onChange={e=>setSort(e.target.value)}>
            <option value="">Sort by Date</option>
            <option value="asc">Ascending</option>
            <option value="desc">Decending</option>
          </Select>
          <Button onClick={handleLogout}>LogOut</Button>
        </div>
         (
          <FormModal
            text="Add Blog"
            title={title}
            content={content}
            category={category}
            setCategory={setCategory}
            setTitle={setTitle}
            setContent={setContent}
            handleAddBlog={handleAddBlog}
          />
        )
        {blogs.length > 0 ? (
          blogs.map(blog => (
            <BlogCard key={blog._id} blog={blog} />
          ))
        ) : (
          <Heading size="md">No blogs available.</Heading>
        )}
      </VStack>
    );
  };
  
  export default Blog;
  