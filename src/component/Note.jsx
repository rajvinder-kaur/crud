import React, { useState } from 'react';
import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs';
import { useEffect } from 'react';

function Note() {
  let arr, id;
  const [tasks, setTasks] = useState("");
  const [todo, setTodo] = useState([]);
  const [key, setKey] = useState(0);
  id = Math.random() * 10000;

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    arr = JSON.parse(localStorage.getItem('value'));
    console.log("==========================")
    console.log(arr)
    console.log("--------------------------")
    if (arr) {
      setTodo(arr);
    }
    if (arr == null) {
      console.log("null error in local storage invoked again!")
      localStorage.clear();
    }
  }

  const afterDelete = (arr) => {
    localStorage.setItem('value', JSON.stringify(arr));
  }

  const input = (e) => {
    setTasks(e.target.value);
  }
  const click = (e) => {
    e.preventDefault();
    setKey(key + 1);
    const value = { title: tasks, id: id, index: key, };
    if (tasks !== "") {
      todo.push(value)
      setTodo(todo)
      console.log(todo)
      localStorage.setItem('value', JSON.stringify(todo));
    }
    setTasks("")

  }

  return (
    <form onSubmit={click}>
      <Wrapper>
        <Page>
          <Heading>TO - DO List</Heading>
          <h6>~ ~ ~ today i have to do ~ ~ ~</h6>
          <input type="text" id="title" value={tasks} placeholder="Title" onInputCapture={input} />
          <button id='button'>submit</button>
          <List>
            {
              todo.map((task) => {
                return (<li key={task.index}>
                  <p>{task.title}</p>
                  <button className='btn' onClick={() => {
                    console.log(task.index)
                    delete todo[task.index];
                    arr = JSON.parse(localStorage.getItem('value'));
                    let index = arr.findIndex(id => id == task.index)
                    arr.splice(index, 1);
                    console.log(arr);
                    afterDelete(arr);
                  }}><BsTrash /></button></li>)
              })
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
width: 80vw;
height:auto;
transform: translate(-50%,-50%);
top:50%;
left:50%;

display:grid;
grid-template-columns: 1fr 2fr 1fr;
justify-items:center;
padding: 2%;
`
const Heading = styled.div`
transform: rotate(2deg);
border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
background-color: hsla(166, 100%, 50%, 0.7);
font-size:10vw;
text-align: center;
margin-bottom: 0%;
color: #3b4747;
width: 60vw;
grid-column:2;
grid-row:1;


`
const List = styled.div`
 margin:2%;
 list-style-type:none;
 grid-row:4;
 grid-column:2;
 display:flex;
 flex-direction:column;
 li{
    width:50vw;
  p{
    margin-top:3%;
    margin-bottom:3%;
    margin-left:0%;
    margin-right:0%;
    display:inline-block;
    font-size:3vw;
    width:80%;
    font-weight:700;
  
  color: rgba(90, 154, 156, 0.884);
  }
   button{
    background-color:transparent;
    border:none;
    svg{
      width:100%;
      height:100%;
      color:rgba(100, 100, 119, 0.384);
    }
   }
 }
`

export default Note

