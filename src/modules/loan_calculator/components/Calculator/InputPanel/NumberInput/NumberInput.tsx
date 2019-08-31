import React, { FC, ChangeEventHandler } from "react";
import { FormControl, InputLabel, Input, FormHelperText, InputAdornment} from "@material-ui/core";
import { Container, InputWrapper } from "./NumberInput.style";

interface Props {
    value: string | number;
    title?: string;
    error?: string;
    prefix?: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const NumberInput: FC<Props> = ({ value, title, onChange, error, prefix }) => {
    return (
        <Container>
            <InputWrapper>
                <FormControl error={!!error}>
                    <InputLabel htmlFor="component-error">{title}</InputLabel>
                    <Input
                    startAdornment={<InputAdornment position="start">{prefix}</InputAdornment>}
                        id="component-error"
                        value={value === 0 ? "" : value}
                        type={"number"}
                        onChange={onChange}
                    />
                    <FormHelperText id="component-error-text">
                        {error}
                    </FormHelperText>
                </FormControl>
            </InputWrapper>
        </Container>
    );
};

NumberInput.defaultProps = {
    value: ""
};

export default NumberInput;
