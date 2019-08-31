import React, { FC } from "react";
import Calculator from "../components/Calculator/Calculator";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Istate } from "../reducer";

interface Props {
    onAmountChange: (value: number) => void;
    onDurationChange: (value: number) => void;
    calculateMonthlyInstallment: () => void;
    amountValue: number | string;
    durationValue: number | string;
    monthlyInstallment: number | string;
    loading: boolean;
}

const CalculatorContainer: FC<Props> = ({
    onAmountChange,
    onDurationChange,
    calculateMonthlyInstallment,
    amountValue,
    durationValue,
    monthlyInstallment,
    loading
}) => {
    return (
        <Calculator
            loading={loading}
            calculateMonthlyInstallment={calculateMonthlyInstallment}
            amountValue={amountValue}
            durationValue={durationValue}
            changeAmount={onAmountChange}
            changeDuration={onDurationChange}
            monthlyInstallment={monthlyInstallment}
        />
    );
};

const mapStateToProps = (state: Istate) => {
    return {
        loading: state.loading,
        amountValue: state.amount,
        durationValue: state.duration,
        monthlyInstallment: state.monthlyInstallment
    };
};

export default connect(
    mapStateToProps,
    actions
)(CalculatorContainer);
