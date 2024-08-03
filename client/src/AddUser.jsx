import { gql, useMutation } from '@apollo/client'
import React from 'react'

const query = `#graphql
    mutation Mutation($name: String!, $email: String!, $phoneNo: String, $avatar: String) {
        addUser(name: $name, email: $email, phoneNo: $phoneNo, avatar: $avatar)
    }
`

const AddUser = ({getAllUser}) => {
    const [addUser] = useMutation(gql(query))
    const submitForm = async(e)=>{
        e.preventDefault()
        const formData = new FormData(e.target);
        const name = formData.get("name")
        const email = formData.get("email")
        const phoneNo = formData.get("phoneNo")
        const avatar = formData.get("avatar")
        try {
            const { data } = await addUser({ variables: { name, email, phoneNo, avatar } });
            console.log(data.addUser)
            getAllUser()
        } catch (error) {
            console.error("Error adding user:", error.message);
        }
    }
  return (
    <form onSubmit={submitForm}>
        <input type="text" name='name' placeholder='Enter Name' />
        <input type="text" name='email' placeholder='Enter Email' />
        <input type="text" name='phoneNo' placeholder='Enter PhoneNo' />
        <input type="text" name='avatar' placeholder='Enter Avatar Url' />
        <button type='submit'>Add User</button>
    </form>
  )
}

export default AddUser
