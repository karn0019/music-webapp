import React from "react";
import { useState } from "react";
import axios from "axios";

const AuthContext = React.createContext();

function AuthProvider(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 

    const [state, setState] = useState({
        loading: null,
        error: null,
        user: null,
      });
 
    const login =async (data) => {
        const result=await axios.post("http://localhost:4000/user/login",data);
        const token=result.data.token;
        localStorage.setItem("token",token)
    
        const userToken = jwtDecode(token);
        setState({...state,user:userToken});
        navigate('/');
      };
   
      

  return (
    <AuthContext.Provider
      value={{  }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
