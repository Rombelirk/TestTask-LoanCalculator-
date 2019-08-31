import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import LoanCalculatorReducer from '../modules/loan_calculator/reducer'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(LoanCalculatorReducer);

export default store;