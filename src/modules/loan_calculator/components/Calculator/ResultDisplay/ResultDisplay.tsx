import React, { FC } from "react";
import { Container, Title } from "./ResultDisplay.style";

interface Props {
    monthlyInstallment: number | string;
}

const ResultDisplay: FC<Props> = ({ monthlyInstallment }) => {
    return (
        <Container>
            <Title>Monthly Installment:</Title>
            <b> {monthlyInstallment ? ` ${" "+monthlyInstallment} EUR` : ""}</b>
        </Container>
    );
};

export default ResultDisplay;
