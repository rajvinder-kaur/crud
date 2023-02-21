import React, { useState } from 'react'
import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux'
import { todoAdded, todoDelete } from '../redux/slice/todoSlice';


function List() {
  const todo = useSelector(state => state.todo)
  console.log(todo)
  const [title, setTitle] = useState('')

  const dispatch = useDispatch()
  const onTitleChanged = e => setTitle(e.target.value)
  const click = (e) => {
    if (title) {
      dispatch(
        todoAdded(title)
      )
    }
    e.preventDefault()
    setTitle('')
  }



  return (
    <form onSubmit={click}>
      <Wrapper>
        <Page>
          <Heading >TO - DO List</Heading>
          <h6>~ ~ ~ today i have to do ~ ~ ~</h6>
          <input type="text" id="title" value={title} placeholder="Title" onChange={onTitleChanged} />
          <button id='button'>submit</button>
          <Liist>
            {
              todo.map((task) => {
                return (<li key={task.index}>
                  <p>{task.title}</p>
                  <button className='btn' onClick={() => {
                    console.log(task.id)
                    dispatch(
                      todoDelete({
                        id: task.id
                      })
                    )
                  }}><BsTrash /></button></li>)
              })
            }
          </Liist>
        </Page>
      </Wrapper>
    </form>
  )
}

export default List


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
const Liist = styled.div`
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
