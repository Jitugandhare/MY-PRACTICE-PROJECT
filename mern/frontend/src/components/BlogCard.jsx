import React, { useEffect, useState } from 'react';
import { Button, Heading, Box, Text, Flex, Input ,Image} from '@chakra-ui/react';
import FormModal from './FormModal';
import { useDispatch } from 'react-redux';
import { deleteBlog, updateBlog } from '../redux/blogReducer/action';


const BlogCard = ({ blog }) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("")
    const dispatch = useDispatch();

    const handleAddBlog = (id) => {
        const blog = {
            title, content, category
        }
        dispatch(updateBlog(id, blog))
    }

    const handleDelete=(id)=>{
        dispatch(deleteBlog(id))
    }

    useEffect(() => {
        setTitle(blog.title)
        setCategory(blog.category)
        setContent(blog.content)
    }, [])

    const cardStyles = {
        borderWidth: '1px',
        borderRadius: 'lg',
        padding: '4',
        margin: '4',
        boxShadow: 'md',
        width: '500px', 
      };
    
      const imageStyles = {
        width: '40%', 
        maxHeight: '200px', 
      };
    
      return (
        <Box style={cardStyles}>
          <div key={blog._id}>
            <Image
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQq6gaTf6N93kzolH98ominWZELW881HqCgw&usqp=CAU"} 
              alt={blog.username}
              style={imageStyles}
            />
            <Heading as="h2" fontSize="2xl" mb="10px">
              {blog.username}
            </Heading>
            <p>{blog.category}</p>
            <p>{blog.date}</p>
            <p>{blog.title}</p>
            <p>{blog.content}</p>
            <FormModal
              text="Edit"
              id={blog._id}
              title={title}
              content={content}
              category={category}
              setCategory={setCategory}
              setTitle={setTitle}
              setContent={setContent}
              handleAddBlog={handleAddBlog}
            />
            <Button onClick={() => handleDelete(blog._id)} colorScheme="red">
              Delete
            </Button>
          </div>
        </Box>
      );
    };

export default BlogCard