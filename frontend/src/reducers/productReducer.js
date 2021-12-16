import {

    CREATE_PRODUCT,
    ALL_PRODUCTS

} from "../actions/type";


const initialState = [];

function ProductReducer(products  = initialState, action) {

    const { type, payload } = action;
    switch (type) {
        case ALL_PRODUCTS:
            return payload;
            case CREATE_PRODUCT:
            return [...products, payload];
        default:
            return products;
    }
};

export default ProductReducer;