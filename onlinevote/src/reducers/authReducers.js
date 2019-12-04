import { students, candidates } from './data';
import { LOGIN_USER } from './actionTypes'

const initialState = {
    students: students,
    candidates: candidates 
}

export function authApp(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return state.students.forEach(element => {
                if(element.stud_no == input_value.stud_no && element.reg_no) {
                    console.log("user exists")
                } else {
                    console.log("user does not exist")
                }
            });
        default:
            return state;
    }
}