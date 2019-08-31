interface Iaction {
    type: string;
    [key: string]: any;
}

export interface Istate {
    amount: number | string;
    duration: number | string;
    monthlyInstallment: number | string;
    loading: boolean;
}

const reducer = (
    state: Istate = {
        amount: "",
        duration: "",
        monthlyInstallment: "",
        loading: false
    },
    action:Iaction
) => {
    switch (action.type) {
        case "SET_ERROR":
            // Custom error handle goes here ...
            return state;
        case "SET_LOADING":
            return { ...state, loading: action.loading };
        case "SET_MONTHLY_INSTALLMENT":
            return { ...state, monthlyInstallment: action.monthlyInstallment };
        case "CHANGE_AMOUNT":
            return { ...state, amount: action.amount };
        case "CHANGE_DURATION":
            return { ...state, duration: action.duration };
        default:
            return state;
    }
};

export default reducer;
