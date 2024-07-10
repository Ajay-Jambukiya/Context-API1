import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { RiH3 } from "react-icons/ri";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    //get data from jsonplaceholder user resource / collection
    getData();
  }, []);

  // let getData = () => {
  //   fetch("http://localhost:1000/users")
  //   // fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       return res.json().then((data) => {
  //         console.log(data);
  //         setUser(data);
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // let getData =async () => {
  //   try{
  //     let res =await fetch("http://localhost:1000/users")
  //     // let res =await fetch("http://localhost:1000/products")
  //     let data =await res.json()
  //     setUser(data)
  //   }catch(err){
  //     console.log(data);
  //     setUser(data);
  //   }
  // };

  // let getData=()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
  //     console.log(res)
  //     setUser(res.data)
  //   }).catch((err)=>console.log(err))
  // }

   let getData =async () => {
    try{
      let res =await axios.get("http://localhost:1000/users")
      setUser(res.data)
    }catch(err){
      console.log(data);
    }
  };


  return (
    <div class="container mt-3">
      <h4>Home page</h4>
      {/* {user.length==0 && <h4>No User Found</h4>} */}
      {/* {user.map((u)=><p key={u.id}>{JSON.stringify(u)}</p>)} */}
      {/* {user.map((u)=><p key={u.id}>{u.name}</p>)} */}
      <ProductCard />
    </div>
  );
};

export default Home;
