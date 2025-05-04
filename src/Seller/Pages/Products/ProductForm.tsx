import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Button, CircularProgress, FormControl, Grid2, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { uploadImageToCloudinary } from '../../utility/uploadImageToCloudinary'
import { AddPhotoAlternate, Close } from '@mui/icons-material'

const ProductForm = () => {
 
    const formik = useFormik({
        initialValues:{
        images:[],
        title:"",
        description:"",
        mrp:"",
        selling_price:"",
        color:"",
        size:"",
        category:"",
        second_category:"",
        third_category:""
       },
       onSubmit:(values) => {
        console.log(values)
       }
    })
    const [uploadImage, setUploadImage] = useState(false);
    const handleImageChange = async(e) =>{
    console.log("e.target.files[0]",e.target.files[0])
    const file = e.target.files[0];
    setUploadImage(true);
    const image = await uploadImageToCloudinary(file)
    formik.setFieldValue("images",[...formik.values.images, image])
    setUploadImage(false)

  }

  const handleRemoveImage = (index) =>{
      const updatedImages = [...formik.values.images]
      updatedImages.splice(index, 1)
      formik.setFieldValue("images",updatedImages)
  }

  return (
    <div className='px-5 mt-10'>
      <div>
        <p className='text-center text-3xl font-semibold'>Create New Product</p>
      </div>
      <form onSubmit={formik.handleSubmit}>
         <Grid2 container spacing={2}>
              <Grid2  size={12} className='flex flex-wrap gap-5'>
           <input type='file' accept='image/*' id='fileInput' style={{display:"none"}} 
           onChange={handleImageChange} />
           <label htmlFor='fileInput' className='relative'>
            <span className='w-24 h-24 cursor-pointer flex justify-center p-3 border rounded-md border-gray-600'>
              <AddPhotoAlternate className='text-white'/>
            </span>
            {
              uploadImage && <div className='absolute top-0 left-0 bottom-0 right-0 
              w-24 h-24 flex justify-center items-center'>
              <CircularProgress/>     
              </div>
            }
           </label>
           <div className='flex flex-wrap gap-2'>
            { 
            formik.values.images.map((image, index) => <div className='relative'>
              <img src={image} className='w-24 h-24 object-cover' key={index} alt=""/>
              <IconButton size='small' sx={{position:'absolute', top:0, right:0, outline:"none"}}
               onClick={() => handleRemoveImage(index)}>
                <Close sx={{fontSize:"1rem"}}/>
              </IconButton>
            </div>)
            }
           </div>
          
            </Grid2>
            <Grid2 size={12}>
              <TextField required
              fullWidth name='title'
          id="outlined-required"
          label="Title"
          defaultValue=""
          value={formik.values.title}
          onChange={formik.handleChange}
        />
            </Grid2>
            <Grid2 size={12}>
              <TextField required name="description"
              fullWidth
          id="outlined-required"
          label="Description"
          defaultValue=""
          value={formik.values.description}
          onChange={formik.handleChange}
        />
            </Grid2>

            <Grid2 size={3}>
              <TextField required
              fullWidth name='mrp'
          id="outlined-required"
          label="MRP"
          defaultValue=""
          value={formik.values.mrp}
          onChange={formik.handleChange}
        />
            </Grid2>

            <Grid2 size={3}>
              <TextField required
              fullWidth name='selling_price'
          id="outlined-required"
          label="Selling Price"
          defaultValue=""
          value={formik.values.selling_price}
          onChange={formik.handleChange}
        />
            </Grid2>

            <Grid2 size={3}>
              <FormControl fullWidth>
              <InputLabel id="color">Color</InputLabel>
              <Select labelId='color'
    fullWidth name='color'
    value={formik.values.color}
    label="Color"
    onChange={formik.handleChange}
  >
    <MenuItem value={"Blue"}>Blue</MenuItem>
    <MenuItem value={"Green"}>Green</MenuItem>
    <MenuItem value={"Yellow"}>Yellow</MenuItem>
  </Select>
</FormControl>
            </Grid2>
            <Grid2 size={3}>
              <FormControl fullWidth>
              <InputLabel id="color">Size</InputLabel>
              <Select
    fullWidth name='size'
    value={formik.values.size}
    label="Size"
    onChange={formik.handleChange}
  >
    <MenuItem value={"Blue"}>Xs</MenuItem>
    <MenuItem value={"Green"}>M</MenuItem>
    <MenuItem value={"Yellow"}>L</MenuItem>
  </Select>
</FormControl>
            </Grid2>

            <Grid2 size={4}>
              <FormControl fullWidth>
              <InputLabel id="color">Category</InputLabel>
              <Select
    fullWidth name='category'
    value={formik.values.category}
    label="Category"
    onChange={formik.handleChange}
  >
    <MenuItem value={"Blue"}>Blue</MenuItem>
    <MenuItem value={"Green"}>Green</MenuItem>
    <MenuItem value={"Yellow"}>Yellow</MenuItem>
  </Select>
</FormControl>
            </Grid2>

            <Grid2 size={4}>
              <FormControl fullWidth>
              <InputLabel id="color">Second Category</InputLabel>
              <Select
    fullWidth name='second_category'
    value={formik.values.second_category}
    label="Second Category"
    onChange={formik.handleChange}
  >
    <MenuItem value={"Blue"}>Blue</MenuItem>
    <MenuItem value={"Green"}>Green</MenuItem>
    <MenuItem value={"Yellow"}>Yellow</MenuItem>
  </Select>
</FormControl>
            </Grid2>
           
         <Grid2 size={4}>
           <FormControl fullWidth>
              <InputLabel id="color">Third Category</InputLabel>
            <Select fullWidth
            value={formik.values.third_category}
    label="Third Category" name='third_category'
    onChange={formik.handleChange}>
                <MenuItem>hi</MenuItem>
            </Select>
            </FormControl>
         </Grid2>
            
        <Grid2 size={12}>
          <Button className='py-3 font-medim text-2xl' type='submit' fullWidth variant='contained'>Add Product</Button>
        </Grid2>
  
        </Grid2>
      </form>
    </div>
  )
}

export default ProductForm
