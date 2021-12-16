import {

    
    ALL_ROLE,
    CREATE_ROLE,
} from "../actions/type";

const initialState = [];

function RoleReducer(roles  = initialState, action) {

    const { type, payload } = action;
    switch (type) {
        case ALL_ROLE:
            return payload;
            case CREATE_ROLE:
                return [...roles, payload];
        default:
            return roles;
    }
};

export default RoleReducer;