import {


    ALL_USER,
    CREATE_USER
} from "../actions/type";


const initialState = [];

function UserReducer(users = initialState, action) {



    const { type, payload } = action;

    switch (type) {
        case ALL_USER:
            return payload;
        case CREATE_USER:
            return [...users, payload];
        default:
            return users;
    }
};

export default UserReducer;