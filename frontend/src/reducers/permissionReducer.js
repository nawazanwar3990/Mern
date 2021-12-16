import {

    
    ALL_PERMISSION,
    CREATE_PERMISSION,
} from "../actions/type";

const initialState = [];

function PermissionReducer(permissions  = initialState, action) {

    const { type, payload } = action;
    switch (type) {
        case ALL_PERMISSION:
            return payload;
            case CREATE_PERMISSION:
                return [...permissions, payload];
        default:
            return permissions;
    }
};

export default PermissionReducer;