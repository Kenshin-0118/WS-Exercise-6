
import { useState } from "react";



export default function ScrumBoard({setMenu,display, setDisplay,setItems}){
    const [create, setCreate] = useState(false);
    
    function changeCreate(){
        setCreate(true);
    }

    function changeMenu(event) {
        setMenu(parseInt(event.target.value));
      }

    const [add, setAdd] = useState({
        title: '',
        description: '',
        index: -1,
       
    })
    const titleChange = (e)=>{
        setAdd({...add, title: e.target.value})
    }
    const descriptionChange = (e) =>{
        setAdd({...add, description: e.target.value})
    }
    const buttonCancel=()=>{ 
        setCreate(false);
    }
    const itemClicked=(index, boardItem)=>{ 
        setItems({title: boardItem.title, description: boardItem.description, index: index})
        setMenu(parseInt(3))
    } 
    const buttonProcced =()=>{    

        if(add.title === "" && add.description === ""){
           setCreate(true);
         }else{
            setDisplay([...display, add]);
            let holddisplay = display.slice();
            holddisplay.push(add);
            setDisplay(holddisplay);

            setAdd({title: '', description: ''})
            setCreate(false);
            console.log({title: add.title, description: add.description});
        }
    }
    return(
        <div className="text-xl w-full font-serif">
            <div className="container mx-auto ">
                <nav className='flex items-center flex-wrap m-5'>
                    <div className="inline-flex items-center"> <span className='text-4xl text-slate-900 font-medium tracking-wide cursor-pointer' >Scrum Board</span></div>
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">                      
                        <button value = {0}className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-slate-700 cursor-pointer font-bold items-center justify-center' onClick={changeMenu}>
                            Logout
                        </button>
                    </div>
                </nav>
            </div>
            <div className="mt-[80px] ml-[80px]">
                <h1 className="font-bold  text-3xl">Boards</h1>
            </div>
            <div className="mt-[10px] ml-[85px]">
                <div>
                <div className="">

                {!create && (
                    <><div className="flex">
                        <div  >
             <ul className="grid grid-cols-3 gap-5 mx-10" >
                  {display.map((add, index) => {     
                     if (display.length > 0) { 
                       return(      
                        <li onClick={() => itemClicked(index, add)} className="w-80 h-32 shadow-2xl border border-gray-600 p-2 py-1 rounded-lg flex ">
                        <div className="grow ">
                            <div className="font-bold">{add.title}</div>
                            <div>{add.description}</div>
                            
                        </div>              
                    </li>  
                       )}
                  
                  })}  

<button className=" w-80 h-32 shadow-2xl border border-gray-600 p-2 py-1 rounded-lg " onClick={changeCreate} value={true}>  +  </button>
              </ul> 
                 </div>
                     </div>
        </>

                )} {create &&
                    (
                        <center className="w-[500px] h-96 shadow-2xl border border-gray-600 p-2 py-1 rounded-lg">        
                    <input name="title" placeholder="Title" onChange={titleChange}
                         className="mt-[10px] w-[475px] input rounded py-1 px-1 border border-gray-400" type="text" />      
                    <textarea name="description" placeholder="Description" onChange={descriptionChange} 
                         className="h-64 w-[475px] border border-gray-400 p-2 py-1 rounded-md text-lg mt-[10px]" type="text" />
                    <button onClick={buttonCancel} type="button"
                     className="button w-32 mt-3 mr-4 shadow bg-white-500 hover:bg-blue-300 focus:shadow-outline focus:outline-none rounded py-1 px-1 border border-blue-500 text-blue-500">Cancel</button>  
                    <button onClick={buttonProcced} type="button" 
                    className="button w-32 bg-blue-500 hover:bg-blue-300 focus:shadow-outline focus:outline-none rounded py-1 px-1 border border-blue-500 text-white">Add</button>    
                        </center>  
                    )} 


                    </div>
                </div>
            </div>
        </div>
    )
}