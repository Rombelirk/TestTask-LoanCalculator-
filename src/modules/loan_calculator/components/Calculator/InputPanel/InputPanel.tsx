import React, { useState, FC, ChangeEventHandler } from "react";
import { Input, Button } from "@material-ui/core";
import NumberInput from "./NumberInput/NumberInput";
import { Container } from "./InputPanel.style";

interface Props {
    inputChangeHandler: (value: number, type: string) => void;
    calculateMonthlyInstallment: () => void;
    amountValue: number | string;
    durationValue: number | string;
}

const InputPanel: FC<Props> = ({
    inputChangeHandler,
    calculateMonthlyInstallment,
    amountValue,
    durationValue
}) => {
    const [errorAmount, setErrorAmount] = useState<string>("");
    const [errorDuration, setErrorDuration] = useState<string>("");

    const onInputChange = (
        type: string
    ): ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> => event => {
        if (type === "amount") {
            setErrorAmount("");
        } else if (type === "duration") {
            setErrorDuration("");
        }
        inputChangeHandler(+event.target.value, type);
    };

    const validateDuration = (duration: number | string) => {
        if (typeof duration === "number") {
            if (duration < 1 || duration > 5) {
                return "Duration should be in range 1 and 5";
            }
            return "";
        }
        return "Please enter a valid number";
    };

    const validateAmount = (amount: number | string) => {
        if (typeof amount === "number") {
            if (amount < 10000 || amount > 100000) {
                return "Amount should be in range 10000 and 100000";
            }
            return "";
        }
        return "Please enter a valid number";
    };

    const onSubmit = () => {
        const durationError = validateDuration(durationValue);
        const amountError = validateAmount(amountValue);
        if (!durationError && !amountError) {
            calculateMonthlyInstallment();
        }
        setErrorAmount(amountError);
        setErrorDuration(durationError);
    };

    return (
        <Container>
            <NumberInput
                error={errorAmount}
                value={amountValue}
                onChange={onInputChange("amount")}
                title="Amount"
            />
            <NumberInput
                error={errorDuration}
                value={durationValue}
                onChange={onInputChange("duration")}
                title="Duration"
            />
            <Button onClick={onSubmit} variant="contained" color="primary">
                OK
            </Button>
        </Container>
    );
};

export default InputPanel;
