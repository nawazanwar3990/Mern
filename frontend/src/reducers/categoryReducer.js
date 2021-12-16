import {

    CREATE_CATEGORY,
    ALL_CATEGORIES

} from "../actions/type";


const initialState = [];

function categoryReducer (categories  = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ALL_CATEGORIES:
            return payload;
            case CREATE_CATEGORY:
                return [...categories, payload];
        default:
            return categories;
    }
};

export default categoryReducer;

