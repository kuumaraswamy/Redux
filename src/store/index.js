
import { configureStore} from "@reduxjs/toolkit"
import counterReducer from "./Counter"
import authReducer from './auth'



const store = configureStore({
    reducer: {counter:counterReducer, auth:authReducer}
})



export default store





// const counterReducer =(state=intialState,action)=>{
//     if(action.type ==='increment'){
//         return{
//             counter: state.counter+1,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type ==='increse'){
//         return{
//             counter: state.counter+action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type ==='decrement'){
//         return{
//             counter: state.counter-1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type ==="toggle"){
//         return{
//             counter:state.counter,
//             showCounter:!state.showCounter,
            
//      }
//    }
//     return state; 
// }

