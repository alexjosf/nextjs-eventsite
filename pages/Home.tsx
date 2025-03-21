import React from 'react'
import Layout from './components/Layout'

function Home() {
  return (
    <Layout>
      <div className='flex flex-row justify-between p-18'>
        <div>
          <h1 className='font-medium text-xl'
          >Mission <br />Statement</h1>
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-9xl font-serif'>Discover<br /> Artist</h1>
        </div>
        <div className='text-end'>
          <h1 className='font-medium text-xl'
          >Search Artist <br />or event</h1>
        </div>
      </div>
      <div className='flex flex-row justify-center p-18'>
        <h1 className='font-medium text-xl text-end'
        >Discover Events happening near<br /> you or whichever country</h1>
        <img src='globe.png'
          className='h-12 w-12 mx-20'
        />
        <h1 className='font-medium text-xl'
        >Discover artists Nearby you or around <br />the globe</h1>
      </div>
      <div className='flex flex-row justify-between p-18'>
        <img src='image1.jpg'
          className='h-80 w-90 rounded-2xl'
        />
        <img src='image2.jpg'
          className='h-80 w-80 rounded-full'
        />
        <img src='image3.jfif'
          className='h-80 w-80 rounded-b-[75px] rounded-tl-[75px] rounded-tr-2xl'
        />
        <img src='image4.jpg'
          className='h-80 rounded-full'
        />
      </div>
    </Layout>
  )
}

export default Home
