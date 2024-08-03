import { AddUser, GetAllUser } from "../api/user.js";

export const resolvers = {
    Query:{
        getAllUser:GetAllUser
    },
    Mutation:{
      addUser: async(_,arg)=>(await AddUser(arg))
    }
  }