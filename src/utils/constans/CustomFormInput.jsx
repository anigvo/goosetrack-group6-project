const { PatternFormat } = require("react-number-format");

export const CustomFormInput = ({ field, form, ...props }) => {
  return (
    <PatternFormat
      format="+## (###) ###-##-##"
      allowEmptyFormatting
      mask="_"
      {...props}
      {...field}
    />
  );
};