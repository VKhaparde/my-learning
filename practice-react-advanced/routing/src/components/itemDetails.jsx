import React, { useState, useEffect } from 'react';


const ItemDetails = (props)=>{
  console.log("props",props);
//  const [itemDetails,setItemDetails] = useState([]);
//  useEffect(()=>{
//   fetchItemDetails();
//  },[]);
//  const fetchItemDetails = async  () => {
//    const data = await fetch(`https://randomuser.me/api/${match.match.params.id}`);
//    const details = await data.json();
//    setItemDetails(details.results);
//    console.log('itemDetails',itemDetails);
//  }
 return (
   <div>
      {props.match.params.id}
   </div>
 )
}

export default ItemDetails;
