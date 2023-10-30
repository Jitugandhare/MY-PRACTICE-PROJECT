import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
  } from '@chakra-ui/react'
const FormModal = ({text,title,content,category,setTitle,setContent,setCategory,handleAddBlog,id}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
 
    return (
      <>
        <Button onClick={onOpen}>{text}</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add or Update Blog</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
               
                <Input ref={initialRef} placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)}/>
                <Input placeholder='Content' value={content} onChange={e=>setContent(e.target.value)}/>
                {/* <Input placeholder='Category' value={category} onChange={e=>setCategory(e.target.value)} / */}
                <Select value={category} onChange={e=>setCategory(e.target.value)}>
            <option value={""}>Filter by Category</option>
            <option value={"Tech"}>Tech</option>
            <option value={"Business"}>Business</option>
            <option value={"Lifestyle"}>LifeStyle</option>
            <option value={"Entertainment"}>Entertainment</option>
          </Select>
              </FormControl>

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={id?()=>handleAddBlog(id):handleAddBlog}>
               Submit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default FormModal