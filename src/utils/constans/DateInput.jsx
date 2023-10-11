import { PatternFormat } from "react-number-format";

export const DateInput = ({ field, form, ...props }) => {
    return (
        <PatternFormat
            format={'####.##.##'}
            allowEmptyFormatting
            mask={'-'}
            {...props}
            {...field} />
    )
};
