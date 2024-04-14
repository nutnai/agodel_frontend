"use client";
import Header from '../components/headerLoggedIn';
import Footer from '../components/footer';
import RatingStarBar from '../components/rating';
import FavoriteButton from '../components/favbutton';
import ReservedButton from '../components/reservebutton';
import PictureBox from '../components/hotelpicture';
import HotelDetail from '../components/hoteldetail';
import React, { useState } from 'react';



const Detail = () => {
  const [productRating, setProductRating] = useState(0);

  const handleRatingChange = (newRating: number) => {
    setProductRating(newRating);
    // You can also make an API call here to update the rating in your database
  };
  const images = [
    'https://www.homenayoo.com/wp-content/uploads/2020/07/The-Parkland-phetkasem-56.jpg',
    'https://www.homenayoo.com/wp-content/uploads/2099/07/IMG_1211.jpg',
    'https://img.home.co.th/images/img_v/review/20200714-164113-3.jpg',
    'https://img.home.co.th/images/img_v/review/20200714-164212-6.jpg',
    'https://img.home.co.th/images/img_v/review/20200714-164412-14.jpg',
    'https://img.home.co.th/images/img_v/review/20200714-164549-20.jpg'
    // Add more image URLs as needed
  ];

  return (
    <div className='bg-white flex flex-col min-h-screen'>
      <Header />
      <div className='flex justify-between'>
        <div className='ml-24 mt-8 text-xl font-semibold text-indigo-500'>
          RongRam HaDao
          <RatingStarBar rating={productRating} onChange={handleRatingChange} />
        </div>
        <div className='flex justify-evenly w-60 mt-5 mr-12'>
        <FavoriteButton initialIsFavorite={false} onToggle={(isFavorite) => console.log(isFavorite)} />
        <ReservedButton />
        </div>
      </div>
      <PictureBox images={images} />
      <HotelDetail location='PanDinThai' facilities={['PraToo', 'NaTang', 'TeeSheedTude', 'VeryBigSraWaiNam','NiruchFather']} guests={[1, 2, 3, 4]} prices={[2000, 3500, 4800,6200]} />
      <Footer />
    </div>
  );
};


export default Detail;