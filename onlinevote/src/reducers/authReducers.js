import { students, candidates } from '../data';
import { LOGIN_USER } from '../actions/actionTypes'

// run a function to process this data

const initialState = {
    students: students,
    candidates: candidates 
}

export default function authApp(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            state.students.forEach(element => {
                if(action.text == element.stud_no) {
                    console.log("user exists")
                } else {
                    console.log(element.stud_no)
                }
            });
            // Object.keys(state).forEach(function(stud_no) {
            //     if (state[stud_no] == action.text) {
            //       console.log('exists');
            //     } else {
            //         console.log(state)
            //     }
            //   });
        default:
            return state;
    }
}