import {

    
    ALL_INCOME,
    CREATE_INCOME,

} from "../actions/type";

const initialState = [];

function IncomeReducer(incomes  = initialState, action) {

    const { type, payload } = action;
    switch (type) {
        case ALL_INCOME:
            return payload;
            case CREATE_INCOME:
                return [...incomes, payload];
        default:
            return incomes;
    }
};

export default IncomeReducer;