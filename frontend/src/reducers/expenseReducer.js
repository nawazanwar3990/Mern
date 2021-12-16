import {


    ALL_EXPENSE,
    CREATE_EXPENSE,

} from "../actions/type";

const initialState = [];

function ExpenseReducer(expenses = initialState, action) {

    const { type, payload } = action;
    switch (type) {
        case ALL_EXPENSE:
            return payload;
        case CREATE_EXPENSE:
            return [...expenses, payload];
        default:
            return expenses;
    }
};

export default ExpenseReducer;