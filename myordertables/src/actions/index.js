const ADD_USER = 'ADD_USER' //action type
const SET_TECHNOLOGY = 'SET_TECHNOLOGY';

export function addUser(user) {
    return {
        type: ADD_USER,
        payload: {
            user: user
        }
    }
}

export function setTechnology (text) {
    return {
       type: SET_TECHNOLOGY,
       tech: text
     }
  }