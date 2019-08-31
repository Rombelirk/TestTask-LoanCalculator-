import React, { FC, ChangeEventHandler } from "react";
import { Input } from "@material-ui/core";
import { Container, Title, ErrorText, InputWrapper } from "./NumberInput.style";

interface Props {
    value: string | number;
    title?: string;
    error?: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const NumberInput: FC<Props> = ({ value, title, onChange, error }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <InputWrapper>
                <Input
                    error={!!error}
                    type={"number"}
                    value={value}
                    onChange={onChange}
                />
                <ErrorText>{error}</ErrorText>
            </InputWrapper>
        </Container>
    );
};

NumberInput.defaultProps = {
    value: ""
};

export default NumberInput;
