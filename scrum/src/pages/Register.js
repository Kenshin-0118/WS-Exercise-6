
import { Inter } from '@next/font/google'
import { useEffect, useState } from "react";
import Axios from 'axios';

const inter = Inter({ subsets: ['latin'] })

function Register({Auths,SetAuths,setMenu}) {
  function changeMenu(event) {
    setMenu(parseInt(event.target.value));
  }
    const [Auth, setAuth] = useState({
        username: '',
        email: '',
        password: '',
    })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const UserChange = (e) => {
        setAuth({...Auth, user: e.target.value})
    }
    const EmailChange = (e) => {
        setAuth({...Auth, mail: e.target.value})
    }
    const PassChange = (e) => {
        setAuth({...Auth, pass:e.target.value})
    }

    function Register() {
      alert("User "+Auth.user+" Have been registered to the system")
        SetAuths([...Auths, Auth])
        let holdAuths = Auths.slice();
        holdAuths.push(Auth);
        SetAuths(holdAuths);

        try {
          const response = Axios.post('http://127.0.0.1:8000/board/register/', Auth);
          console.log(response.data); // Handle the response data here
        } catch (error) {
          console.error(error);
        }

        setAuth({ user: '', mail: '', pass: '' })
        setMenu(parseInt(0));
    }

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
                          <div className="text-2xl font-bold flex justify-center flex-col items-center text-gray-500">Sign Up</div><br/>
                          <div className='font-bold'>Username:</div>
                          <input name="user" value={Auth.user} placeholder="Username" onChange={UserChange} className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/> <br/>
                          <div className='font-bold'>Email:</div>
                          <input name="mail" value={Auth.mail}placeholder="Username" onChange={EmailChange} className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email"/> <br/>
                          <div className='font-bold'>Password:</div>
                          <input name="pass" value={Auth.pass}placeholder="Password" onChange={PassChange} className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" /><br/>
                          <div className='text-stone-500 text-sm'>Must Be 8 Characters</div><br/>
          <div className='w-[400px] flex justify-center flex-col items-center'>
              <button onClick={Register} className="w-full mt-3 shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded flex justify-center" type="button">
                Register
              </button>
              <br/>
            <button className='btn text-base' id="choices" name="choices" value={0} onClick={changeMenu}>Already Have an Account?</button>
          </div>
        </div>
      </div>             
    </div>
</div> 
</div>
  )
}

export default Register;
