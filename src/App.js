import React from "react";
import LoanCalculator from "./modules/loan_calculator/LoanCalculator";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <LoanCalculator />
        </Provider>
    );
}

export default App;
