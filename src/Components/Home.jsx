import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { RiH3 } from "react-icons/ri";

const Home = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    //get data from jsonplaceholder user resource / collection
    getData();
  }, []);

  // let getData = () => {
  //   fetch("http://localhost:1000/users")
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

  let getData =async () => {
    try{

    }catch(err){
      console.log(data);
      setUser(data);
    }
    fetch("http://localhost:1000/users")
      .then((res) => {
        return res.json().then((data) => {
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
