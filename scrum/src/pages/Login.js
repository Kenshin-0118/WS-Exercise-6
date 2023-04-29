
import { Inter } from '@next/font/google'
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ['latin'] })

function Login({Auths,setMenu}) {
    const [Auth, setAuth] = useState({
        user: '',
        pass: '',
    })
    const UserChange = (e) => {
      setAuth({...Auth, user: e.target.value})
  }
  const PassChange = (e) => {
      setAuth({...Auth, pass:e.target.value})
  }

    const Login = () => {
        {Auths.map((key) => {
          if(Auth.user == '' || Auth.pass == ''){alert("Some fields are empty")}
          else if(Auth.user == key.username && Auth.pass == key.password){alert("Logged in successfully"); setMenu(parseInt(2))}
          else {alert("Authority Unrecognized")}
        });
    }}

    function changeMenu(event) {
      setMenu(parseInt(event.target.value));
    }

  return (
<div className="bg-blue-100 h-screen" >
<div className='flex justify-center flex-col items-center content-center h-full font-serif'>
    <div> 
       <div className="grow shrink-0 outline outline-offset-2 outline-4 outline-blue-700 p-8 rounded-lg">
          <div className="text-xl">
                <div className="text-4xl font-bold flex justify-center flex-col items-center">Welcome to Scrum</div><br/>
                <div className="text-2xl font-bold flex justify-center flex-col items-center text-gray-500">Please Login</div><br/>
                  <div className='font-bold'>Username:</div>
                  <input name="user" placeholder="Username" onChange={UserChange} className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/> <br/>
                  <div className='font-bold'>Password:</div>
                  <input name="pass" placeholder="Password" onChange={PassChange} className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" /><br/><br/>
              <div className='w-[400px] flex justify-center flex-col items-center'>
                <button onClick={Login} className="w-full mt-3 shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded flex justify-center" type="button">
                  Login
                </button><br/>
                <button className='btn text-base' id="choices" name="choices" value={1} onClick={changeMenu}>Sign Up</button>
             </div>
          </div>
        </div>
    </div>
</div> 
</div>
  )
}

export default Login;
