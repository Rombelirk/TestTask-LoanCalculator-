import React, { FC } from "react";
import InputPanel from "./InputPanel/InputPanel";
import ResultDisplay from "./ResultDisplay/ResultDisplay";
import { Paper, CircularProgress } from "@material-ui/core";
import { Container, LoadingWrapper } from "./Calculator.style";

interface Props {
    changeAmount: (amount: number) => void;
    changeDuration: (duration: number) => void;
    amountValue: number | string;
    durationValue: number | string;
    monthlyInstallment: number | string;
    calculateMonthlyInstallment: () => void;
    loading: boolean;
}

const Calculator: FC<Props> = ({
    changeAmount,
    changeDuration,
    amountValue,
    durationValue,
    monthlyInstallment,
    calculateMonthlyInstallment,
    loading
}) => {
    const inputChangeHandler = (value: number, type: string) => {
        if (type === "amount") {
            changeAmount(value);
        } else if (type === "duration") {
            changeDuration(value);
        }
    };

    return (
        <Container>
            {loading && (
                <LoadingWrapper>
                    <CircularProgress />
                </LoadingWrapper>
            )}
            <Paper>
                <InputPanel
                    calculateMonthlyInstallment={calculateMonthlyInstallment}
                    durationValue={durationValue}
                    amountValue={amountValue}
                    inputChangeHandler={inputChangeHandler}
                />
                <ResultDisplay monthlyInstallment={monthlyInstallment} />
            </Paper>
        </Container>
    );
};

export default Calculator;
