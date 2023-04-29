
import { useState } from "react";



export default function ScrumBoardItem({setMenu,items,Todos, setTodos, Reviews, setReviews, Cards, setCards}){
    const [createtodo, setCreatetodo] = useState(false);
    const [createreview, setCreateReview] = useState(false);
    const [createcard, setCreateCard] = useState(false);

    function createTodo(){
        setCreatetodo(true);
    }
    function closeTodo(){
        setCreatetodo(false);
    }

    function createReview(){
        setCreateReview(true);
    }
    function closeReview(){
        setCreateReview(false);
    }
    function createCard(){
        setCreateCard(true);
    }
    function closeCard(){
        setCreateCard(false);
    }

    function changeMenu(event) {
        setMenu(parseInt(event.target.value));
      }
      function Board_Title() {
        return "Title: "+items.title;
      }
      function Board_Description() {
        return "Description: "+items.description;
      }

    const [todo, setTodo] = useState({
        title: '',
        description: '',
        boardindex: items.index
       
    })

    const [review, setReview] = useState({
        title: '',
        description: '',
        boardindex: items.index
       
    }) 

    const [card, setCard] = useState({
        title: '',
        description: '',
        boardindex: items.index
       
    }) 

    const todotitle = (e)=>{
        setTodo({...todo, title: e.target.value})
    }
    const tododescription = (e) =>{
        setTodo({...todo, description: e.target.value, boardindex: items.index})
    }

    const Reviewtitle = (e)=>{
        setReview({...review, title: e.target.value})
    }
    const Reviewdescription = (e) =>{
        setReview({...review, description: e.target.value, boardindex: items.index})
    }

    const cardtitle = (e)=>{
        setCard({...card, title: e.target.value})
    }
    const carddescription = (e) =>{
        setCard({...card, description: e.target.value, boardindex: items.index})
    }

    const todoPass = ()=>{
        setTodos([...Todos, todo])
        let holdtodos = Todos.slice();
        holdtodos.push(todo);
        setTodos(holdtodos);
        setTodo({ title: '', description: ''})
        setCreatetodo(false);
        console.log(Todos)
    }

    const ReviewPass = ()=>{
        setReviews([...Reviews, review])
        let holdreviews = Reviews.slice();
        holdreviews.push(review);
        setReviews(holdreviews);
        setReview({ title: '', description: ''})
        setCreateReview(false);
        console.log(review)
    }

    const CardPass = ()=>{
        setCards([...Cards, card])
        let holdcard = Cards.slice();
        holdcard.push(card);
        setCards(holdcard);
        setCard({ title: '', description: ''})
        setCreateCard(false);
        console.log(card)
    }

    return(
        <div className="text-xl w-full font-serif">
            <div className="container mx-auto ">
                <nav className='flex items-center flex-wrap m-5'>
                    <div className="inline-flex items-center"> <button value={2} onClick={changeMenu} className='text-4xl text-slate-900 font-medium tracking-wide cursor-pointer' type="button">Scrum Board</button></div>
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">                      
                        <button value = {0}className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-slate-700 cursor-pointer font-bold items-center justify-center' onClick={changeMenu}>
                            Logout
                        </button>
                    </div>
                </nav>
            </div>
            <div className="mt-[80px] ml-[80px] basis-full">
                <h1 className="font-bold  text-3xl">{Board_Title()}</h1>
                <p1 className="text-base">{Board_Description()}</p1>
            </div>
            
        <div className="flex flex-row justify-center w-full align-top">
            <div className="outline outline-offset-1 outline-gray-600 outline-rounded rounded-md py-3 basis-1/3 m-10 flex justify-center flex-col items-center content-center mb-3 h-5/6">
                <div className="text-2xl font-bold inline-flex text-left w-80">Todo:</div>
                <div>
            {Todos.map((todo) => {     
                     if (todo.boardindex == items.index) { 
                       return(      
                        <li className="w-80 h-32 shadow-2xl border border-gray-600 p-2 py-2 rounded-lg flex  mb-3">
                        <div className="grow break-words">
                            <div className="font-bold break-words">{todo.title}</div>
                            <div className="text-base break-words">{todo.description}</div>
                            
                        </div>              
                        </li>
                       )}
                  
                  })}  
                </div>
                {createtodo ? (
                <div>
                    <center className="w-[320px]  shadow-2xl border border-gray-600 p-2 py-2 rounded-lg">        
                    <input name="title" placeholder="Card Title" onChange={todotitle} className="break-words mt-[10px] w-[300px] input rounded py-1 px-1 border border-gray-400" type="text" />      
                    <textarea name="description" placeholder="Enter Description" onChange={tododescription} className="break-words h-30 w-[300px] border border-gray-400 p-2 py-1 rounded-md text-lg mt-[10px]" type="text" />
                    <button onClick={closeTodo} type="button" className="button w-32 mt-3 mr-4 shadow bg-white-500 hover:bg-blue-300 focus:shadow-outline focus:outline-none rounded py-1 px-1 border border-blue-500 text-blue-500">Cancel</button>  
                    <button onClick={todoPass} type="button" className="button w-32 bg-blue-500 hover:bg-blue-300 focus:shadow-outline focus:outline-none rounded py-1 px-1 border border-blue-500 text-white">Add</button>    
                    </center>  
                </div>):(<button className=" w-80 h- shadow-2xl border border-gray-600 p-2 py-1 rounded-lg " onClick={createTodo} value={true}>  +  </button>)}
                
            </div>


            <div className="outline outline-offset-1 outline-gray-600 outline-rounded rounded-md py-3 basis-1/3 m-10 flex justify-center flex-col items-center content-center mb-3 h-5/6">
                <div className="text-2xl font-bold inline-flex text-left w-80">Review:</div>
                <div>
            {Reviews.map((review) => {     
                     if (review.boardindex == items.index) { 
                       return(      
                        <li className="w-80 h-32 shadow-2xl border border-gray-600 p-2 py-2 rounded-lg flex  mb-3">
                        <div className="grow break-words">
                            <div className="font-bold break-words">{review.title}</div>
                            <div className="text-base break-words">{review.description}</div>
                            
                        </div>              
                        </li>
                       )}
                  
                  })}  
                </div>
                {createreview ? (
                <div>
                    <center className="w-[320px]  shadow-2xl border border-gray-600 p-2 py-2 rounded-lg">        
                    <input name="title" placeholder="Card Title" onChange={Reviewtitle} className="break-words mt-[10px] w-[300px] input rounded py-1 px-1 border border-gray-400" type="text" />      
                    <textarea name="description" placeholder="Enter Description" onChange={Reviewdescription} className="break-words h-30 w-[300px] border border-gray-400 p-2 py-1 rounded-md text-lg mt-[10px]" type="text" />
                    <button onClick={closeReview} type="button" className="button w-32 mt-3 mr-4 shadow bg-white-500 hover:bg-blue-300 focus:shadow-outline focus:outline-none rounded py-1 px-1 border border-blue-500 text-blue-500">Cancel</button>  
                    <button onClick={ReviewPass} type="button" className="button w-32 bg-blue-500 hover:bg-blue-300 focus:shadow-outline focus:outline-none rounded py-1 px-1 border border-blue-500 text-white">Add</button>    
                    </center>  
                </div>):(<button className=" w-80 h- shadow-2xl border border-gray-600 p-2 py-1 rounded-lg " onClick={createReview} value={true}>  +  </button>)}
                
            </div>
            
            
            
            <div className="outline outline-offset-1 outline-gray-600 outline-rounded rounded-md py-3 basis-1/3 m-10 flex justify-center flex-col items-center content-center mb-3 h-5/6">
                <div className="text-2xl font-bold inline-flex text-left w-80">   </div>
                <div>
            {Cards.map((card) => {     
                     if (card.boardindex == items.index) { 
                       return(      
                        <li className="w-80 h-32 shadow-2xl border border-gray-600 p-2 py-2 rounded-lg flex  mb-3">
                        <div className="grow break-words">
                            <div className="font-bold break-words">{card.title}</div>
                            <div className="text-base break-words">{card.description}</div>
                            
                        </div>              
                        </li>
                       )}
                  
                  })}  
                </div>
                {createcard ? (
                <div>
                    <center className="w-[320px]  shadow-2xl border border-gray-600 p-2 py-2 rounded-lg">        
                    <input name="title" placeholder="Card Title" onChange={cardtitle} className="break-words mt-[10px] w-[300px] input rounded py-1 px-1 border border-gray-400" type="text" />      
                    <textarea name="description" placeholder="Enter Description" onChange={carddescription} className="break-words h-30 w-[300px] border border-gray-400 p-2 py-1 rounded-md text-lg mt-[10px]" type="text" />
                    <button onClick={closeCard} type="button" className="button w-32 mt-3 mr-4 shadow bg-white-500 hover:bg-blue-300 focus:shadow-outline focus:outline-none rounded py-1 px-1 border border-blue-500 text-blue-500">Cancel</button>  
                    <button onClick={CardPass} type="button" className="button w-32 bg-blue-500 hover:bg-blue-300 focus:shadow-outline focus:outline-none rounded py-1 px-1 border border-blue-500 text-white">Add</button>    
                    </center>  
                </div>):(<button className=" w-80 h- shadow-2xl border border-gray-600 p-2 py-1 rounded-lg " onClick={createCard} value={true}>  +  </button>)}
                
            </div>
            
            
            
            
            
            
        </div>
            
        </div>
    )
}