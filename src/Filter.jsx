import React from 'react'
import { Grid } from "@mui/material";
import { useState } from "react";
import { Property } from "./Components/Property";

function Filter() {
    const [query, setQuery] = useState([]);
    const [price, setPrice] = useState("00000-10000");
    const[type, setType] = useState(['House']);
    const[date, setDate] = useState(new Date().toJSON().slice(0,10).replace(/-/g,'-'))
    const handleSelectChange = (e) => {
      console.log(e.target.value);
      setPrice(e.target.value);
    };
  const handledateChange=(e) =>{
    let aa =e.target.value.split('-');
    let date = aa[2]+'-'+aa[1]+'-'+aa[0]
    console.log(date);
  
    setDate(e.target.value);
  }
  return (
    <div>  
        <div
        className="mx-auto max-w-7xl px-4 sm:px-6 
      lg:flex lg:items-center lg:justify-between lg:py-5 lg:px-8"
      >
        <blockquote className="text-2xl lg:w-2/5 w-full text-center lg:text-left py-5 lg:p-0 md:w-full font-semibold italic text-slate-900 select-none">
          <h2 className="text-3xl font-bold  text-gray-900 sm:text-4xl">
            Find Your Next
            <span className="mx-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
              <span className="relative text-white">Dream </span>
            </span>
            Property{" "}
          </h2>
        </blockquote>

        <div className="mt-2 lg:w-2/3 w-full text-left lg:text-left lg:p-0 md:w-full lg:mt-0 lg:flex-shrink-0">
          <div className="w-full">
            <p
              className=" border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg 
text-md   text-center inline-flex items-center text-gray-700
 mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="currentColor"
                className="bi bi-sliders mr-3"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
                />
              </svg>
              Filters
            </p>
            <hr></hr>
          </div>
          <div>
            <div className="container mr-10">
              <form className="flex items-center w-full mt-2">
                <label for="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-600 dark:text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    onChange={(e) => setQuery(e.target.value)}
                    className="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg
        focus:outline-none block w-full pl-10 p-1.5 
         "
                    placeholder="Enter the Location"
                    required=""
                    autoComplete="off"
                  />
                </div>
                <button
                  type="button"
                  className="p-1.5 ml-2 text-sm font-medium text-white bg-blue-400 rounded-lg border border-blue-500
     hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </form>

              <Grid className="w-full mt-5 item-center ">
                <Grid container rowSpacing={1}>
                  <Grid item xs={4}>
                    <label
                      for="countries"
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      When
                    </label>

                    <input
                   
                      type="date"
                      onChange={handledateChange}
                      pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
                      className="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg

         focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2 "
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <label
                      for="countries"
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Price
                    </label>
                    <select
                      id="countries"
                      className="bg-blue-50 border border-gray-300 font-dark
 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-5/6 p-2
"
                          onChange={handleSelectChange}
                    >
                      <option selected value="00000-10000">
                        Select Your Budget
                      </option>
                      <option value="00000-01000">
                        $0 - $1000
                      </option>
                      <option value="01000-02000">$1000 - $2000</option>
                      <option value="02000-03000">$2000 - $3000</option>
                      <option value="03000-04000">$3000 - $4000</option>
                      <option value="04000-10000"> {"> "}$4000 </option>
                    </select>
                  </Grid>
                  <Grid item xs={4}>
                    <label
                      for="countries"
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Property Type
                    </label>
                    <select
                      id="countries"
                      onChange={(e) => setType(e.target.value)}
                      name="select"
                      className="bg-blue-50 border border-gray-300
 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-5/6 p-2"
                    >
                      <option value="House">
                        Houses
                      </option>
                      <option value="Apartment">Apartment</option>
                      <option value="Townhomes">Townhomes</option>
                   
                    </select>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 bg-slate-100 rouded-sm m-5 ">
        
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  lg:gap-2">
 
          {
          Property.filter(
            (property) =>
              (property.property_city.toLowerCase().includes(query) || property.property_name.toLowerCase().includes(query)
              || property.property_address.toLowerCase().includes(query))
               &&
            
             ( property.propery_price > (parseInt(price.slice(0,5))) && property.propery_price < (parseInt(price.slice(6,11)))) 
              &&
              property.property_type == type  &&
              ((property.date.slice(0,4) === date.slice(0,4) && property.date.slice(5, 7) > date.slice(5, 7)) ||
              (property.date.slice(0, 4) > date.slice(0, 4)) || 
              (property.date.slice(0, 4) === date.slice(0, 4) &&property.date.slice(5, 7) === date.slice(5,7) && property.date.slice(8, 10) > date.slice(8, 10)))
            
          ).map((property) => (
            <div className="overflow-hidden   hover:scale-105 hover:rounded duration-700 ease-out " key={property.id}>
              <div className="w-full m-3 lg:p-0 lg:max-w-xs h-fit bg-white rounded-lg border lg:m-1 border-gray-200 shadow-md hover:shadow-lg ease-in duration-500">
                <span className="bg-blue-100 absolute m-3 flex text-blue-800 text-sm font-medium mr-2 px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi text-yellow-100 mr-1 bi-stars"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                  </svg>{" "}
                  Popular
                </span>

                <img
                  className="rounded-t-lg h-60 bg-cover w-full select-none 
                "
                  src={property.property_image}
                  alt=""
                />

                <div className="px-5 py-2">
                  <h5 className="font-bold  text-blue-600 ">
                    <span className="text-lg">${property.propery_price.toLocaleString("en-US")}</span>
                    <sm className="text-sm text-gray-400">/Month</sm>
                  </h5>

                  <a href="#">
                    <h5 className="mb-1 text-base font-bold  text-gray-900 ">
                      {property.property_name}
                    </h5>
                  </a>
                  <p className="mb-3 font-medium text-sm  text-gray-400">
                    {property.property_address}
                  </p>
                  <hr></hr>
                  <div className="grid grid-cols-3 py-1 text-center">
                    <div>
                      <span className="text-xs text-center flex p-1 text-blue-500 font-semibold">
                        <icon className="mr-1">

                        
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            fill="currentColor"
                            className="bi bi-alexa"
                            viewBox="0 0 16 16"
                          >
                            <path d="M7.996 0A7.998 7.998 0 0 0 0 8a8 8 0 0 0 6.93 7.93v-1.613a1.06 1.06 0 0 0-.717-1.008A5.602 5.602 0 0 1 2.4 7.865 5.579 5.579 0 0 1 8.054 2.4a5.599 5.599 0 0 1 5.535 5.81l-.002.046a6.116 6.116 0 0 1-.012.192l-.005.061a4.85 4.85 0 0 1-.033.284l-.01.068c-.685 4.516-6.564 7.054-6.596 7.068A7.998 7.998 0 0 0 15.992 8 7.998 7.998 0 0 0 7.996.001Z" />
                          </svg>
                        </icon>{" "}
                        {property.no_of_bedrooms}{" "}
                        <p className="ml-1">Bedrooms</p>
                      </span>
                    </div>
                    <div className="col-span-1 ">
                      <span className="text-xs  text-center items-center  right-0 flex p-1 text-blue-500 font-semibold">
                        <icon className="mr-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-cloud-haze"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1z" />
                          </svg>
                        </icon>{" "}
                        {property.no_of_bathrooms}{" "}
                        <p className="ml-1">Bathrooms</p>
                      </span>
                    </div>

                    <div className="col-span-1 ml-2">
                      <span className="text-xs  text-center  items-center  right-0 flex p-1 text-blue-500 font-semibold">
                        <icon className="mr-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            fill="currentColor"
                            className="bi bi-aspect-ratio"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                            <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" />
                          </svg>
                        </icon>{" "}
                        {property.property_area} <p className="ml-1">sqft</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          )
          )}
        </div>
        
      </div></div>
  )
}

export default Filter