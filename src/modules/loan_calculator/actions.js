import API from "../../fakeAPI";

export const onAmountChange = amount => dispatch => {
    dispatch({ type: "CHANGE_AMOUNT", amount });
};

export const onDurationChange = duration => dispatch => {
    dispatch({ type: "CHANGE_DURATION", duration });
};

export const calculateMonthlyInstallment = () => async (dispatch, getState) => {
    const { amount, duration } = getState();
    // Simulation of API-call
    dispatch({ type: "SET_LOADING", loading: true });
    try {
        const response = await API.post({ amount, duration });
        dispatch({
            type: "SET_MONTHLY_INSTALLMENT",
            monthlyInstallment: response.data.monthlyInstallment
        });
    } catch (e) {
        // Custom error handle goes here ...
     
        dispatch({ type: "SET_ERROR", message: e.message });
    }
    dispatch({ type: "SET_LOADING", loading: false }); 
};
