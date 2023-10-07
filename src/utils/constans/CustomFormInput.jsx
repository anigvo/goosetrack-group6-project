const { PatternFormat } = require("react-number-format");

export const CustomFormInput = ({ field, form, ...props }) => {
  return (
    <PatternFormat
      format="+38 (###) ###-##-##"
      allowEmptyFormatting
      mask="_"
      {...props}
      {...field}
    />
  );
};