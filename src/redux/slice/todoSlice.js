
import { createSlice, nanoid } from "@reduxjs/toolkit";



const initialState = [
    // {id: '12' , title: 'hello' },
    // {id:'23', title:'namaste'},
]

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todoAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title){
                return{
                    payload:{
                        id:nanoid(),
                        title
                    }
                }
             }
        },
        todoDelete: {
            reducer(state,action){
                state.value = state.filter((user)=> user.id !== action.payload.id);
            }
        }
         
    }
})

export const { todoAdded, todoDelete } = todoSlice.actions  //action creator function 


export default todoSlice.reducer