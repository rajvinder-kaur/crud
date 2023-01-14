import React, { useState } from 'react';
import styled from 'styled-components';
import {BsTrash} from 'react-icons/bs';

function Note() {
  const[tasks , setTasks] = useState("");
  const [todo, setTodo] = useState([]);
  const input =(e)=>{
    setTasks(e.target.value);
  }
  const click = (e) => {
    e.preventDefault();
    const value = {title:tasks , completed:false};
    todo.push(value)
    setTodo(todo)
    console.log(todo)
    setTasks("")
  }
  return (
    <form onSubmit={click}>
    <Wrapper>
      <Page>
        <Heading>TO - DO List</Heading>
        <h6>~ ~ ~ today i have to do ~ ~ ~</h6>
        <input type="text"  id="title" value={tasks}  placeholder="Title"  onInputCapture={input} />
        <button>submit</button>
        <List>
        {
          todo.map((task) => { return (<p key={task.title}>{task.title}<BsTrash/></p>) })
        }
      </List>
      </Page>
    </Wrapper>
    </form>
  )
}



const Wrapper = styled.div`
position: absolute;
font-family: 'Gochi Hand', cursive;
transform: translate(-50%,-50%);
  top:50%;
  left:50%;
  width: 70vw;
  height:60vh;
`
const Page = styled.div`
position: absolute;
background: #f1f5f8;
background-image: radial-gradient(#bfc0c1 7.2%, transparent 0);
background-size: 25px 25px;
border-radius: 40px;
box-shadow: 4px 3px 7px 2px #00000040;
width: 45vw;
transform: translate(-50%,-50%);
top:50%;
left:50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2%;
`
const Heading = styled.div`
transform: rotate(2deg);
border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
background-color: hsla(166, 100%, 50%, 0.7);
font-size:200%;
text-align: center;
margin-bottom: 0%;
color: #3b4747;
width: fit-content;
`
const List = styled.div`
 
`
export default Note
