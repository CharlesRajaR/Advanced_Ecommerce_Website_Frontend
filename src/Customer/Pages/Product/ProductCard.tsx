import React, { useEffect, useState } from 'react'
import './ProductCard.css'
import { Button } from '@mui/material';
import { Favorite, ModeComment } from '@mui/icons-material';
import { teal } from '@mui/material/colors';

const images = [
   
    "https://i.etsystatic.com/26521752/r/il/67d073/2819813185/il_1588xN.2819813185_9u8p.jpg",
    "https://th.bing.com/th/id/OIP.BVtjNhPPn6rspiFl3cVsdwHaJ4?rs=1&pid=ImgDetMain",
    "https://i.etsystatic.com/26521752/r/il/67d073/2819813185/il_1588xN.2819813185_9u8p.jpg"
]
const ProductCard = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(()=>{
       let interval:any
       console.log("hovered")
       if(isHovered){
        interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
            console.log(currentImage + "current image")
        }, 1000);
       }
       else if(interval){
        clearInterval(interval);
        interval = null;
       }
       return () => clearInterval(interval);

    },[isHovered])

  return (
    <div className='group flex flex-col hover:shadow-lg  px-4 py-4 relative z-0'>
      <div className='card' onMouseEnter={() => {
             setIsHovered(true);
             console.log("hovered from div")
      }} onMouseLeave={() => setIsHovered(false)}>
        {
            images.map((item, index) => <img 
             key={index} style={{transform: `translateX(${(index - currentImage)*100}%)`}}
             className=' card-media group-hover-effect  object-top' src={item} alt="img" />)
        }
        {isHovered && <div className="indicator">
            <div className="flex items-center">
                <Button variant='outlined' className='indicator-button hover:bg-pink-200 hover:border-none border-primary-color border-4'>
                    <Favorite sx={{color:teal[500]}}/> 
                </Button>
                <Button variant='outlined' className='indicator-button hover:bg-pink-100 hover:border-none border-primary-color border-4'>
                    <ModeComment sx={{color:teal[500]}}/> 
                </Button>
            </div>
        </div>}

      
      </div>
      <div className="px-3 w-[240px]  bg-gray-50  flex flex-col">
       <div className="text-xl font-bold">
        <p>Saree</p>
       </div>
       <div className="text-lg font-semibold">
        <p>Silk Saree</p>
       </div>
       <div className="flex justify-between items-center">
          <div className="">
            <span>₹400</span>
          </div>
          <div className="thin-line-through text-sm text-gray-500 font-semibold">
            <span>₹800</span>
          </div>
          <div className="text-primary-color text-2xl logo font-semibold">
            <span>50%</span>
          </div>
       </div>
      </div>
      
    </div>
  )
}

export default ProductCard
