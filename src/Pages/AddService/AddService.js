import React, { useEffect } from "react";
import { toast } from 'react-toastify';
import useHelmet from "../../Helmet/useHelmet";


const AddService = () => {
 useHelmet('Add Service');
 useEffect(() => {
  window.scrollTo(0, 0)
}, [])

    const handleService=(event)=>{
        event.preventDefault();
        const form= event.target;
        const name= form.name.value;
        const cost= form.cost.value;
        const image_url= form.url.value;
        const details= form.details.value;
        const rating= form.rating.value;

        const service={
            name,
            cost,
            image_url,
            details,
            rating
        };
    
        
          if(details.length<3){
            toast.error('Please add atleast 4 letter',{
              position: "top-center",
              autoClose: 1200,});
        }
        else{
            fetch('https://tourist-service-server-ecru.vercel.app/service',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(service)
            })
            .then(res=>res.json())
            .then(data=> {
                console.log(data)
                if(data.acknowledged){
                  toast.success('Service Added',{
                        position: "top-center",
                        autoClose: 1200,});
                    form.reset();
                    // window.location.reload();
                }
            })
            .catch(er=> console.log(er));
    
    
        }
        
    }; 



  return (
    <div className="">
    <form onSubmit={handleService}>
      <div className=" bg-green-100 flex items-center justify-center p-12 ">
        <div className="mx-auto w-full max-w-[550px]">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Service Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="fName"
                    placeholder="Service Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Service Cost
                  </label>
                  <input
                    type="number"
                    name="cost"
                    id=""
                    placeholder="Service Price"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                
              </div>
            </div>
       
            <div className="mb-5">
              <label
                for="guest"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
               Service Image Url
              </label>
              <input
                type="url"
                name="url"
                alt=""
                placeholder="Img URl"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
        <label
          for="guest"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Rating
        </label>
        <input
          type="number"
          name="rating"
          id="guest"
          placeholder="4"
          min="1"
          max='5'
          class="w-48 appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
            <div className="mb-5">
              <label
                for="guest"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
               Service Details
              </label>
              <input
                type="text"
                name="details"
                id="guest"
                placeholder="Details"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            

            <div>
              <button type="submit" className="hover:shadow-form rounded-md bg-green-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
        </div>
      </div>
    </form>
    </div>
  );
};

export default AddService;
