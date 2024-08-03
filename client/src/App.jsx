import {gql, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import AddUser from "./AddUser";

const query = `#graphql
  query Query {
    getAllUser {
      _id
      name
      email
      phoneNo
      avatar
    }
  }
`;
function App() {
  const [getAllUser, { loading, data, refetch }] = useLazyQuery(gql(query));
  useEffect(()=>{
    getAllUser()
  },[getAllUser])
  if (loading) return <h1>Loading...</h1>;
  return <div>
    <div>{data?.getAllUser.map((user)=>(
    <p key={user._id}>Name: {user.name} Email:{user.email} phoneNo:{user.phoneNo} Avatar: {user.avatar}</p>
  ))}</div>
    <AddUser getAllUser={refetch}/>
  </div>;
}

export default App;
