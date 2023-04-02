import React from 'react';

const Gallery = () => {
    return (
       
  <div className="text-gray-600 body-font">
    <div className="container px-5 py-10 mx-auto flex flex-wrap">
      <div className="flex w-full mb-3 flex-wrap">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-green-800 lg:w-1/3 lg:mb-0 mb-1">The Moment We Have Captured...</h1>
      </div>
      <div className="flex flex-wrap   max-w-[1400px] mx-auto">
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-1/2">
            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/RcbRG2J/rangamati.jpg" />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/WvCQ9LS/haur.jpg" />
          </div>
          <div className="md:p-2 p-1 w-full">
            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/gtDFjt5/kutubdia.jpg" />
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-full">
            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/RcbRG2J/rangamati.jpg" />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/47YCRb4/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg" />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/m6GDVCz/bichanakandi.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>


    );
};

export default Gallery;