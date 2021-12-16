import {

    
    ALL_VENDOR,
    CREATE_VENDOR,

} from "../actions/type";

const initialState = [];

function VendorReducer(vendors  = initialState, action) {

    const { type, payload } = action;
    switch (type) {
        case ALL_VENDOR:
            return payload;
            case CREATE_VENDOR:
                return [...vendors, payload];
        default:
            return vendors;
    }
};

export default VendorReducer;