export const validateDate = (date) => {
  const [year, month, day] = date.split(".");
  if (isNaN(new Date(year, month, day))) {
    return 'Date is invalid';
  }
  if (year > new Date().getFullYear()) {
    return 'Invalid year';
  }
  if (month > 12 || month < 1) {
    return 'Invalid month';
  }
  if (day > 31 || day < 1) {
    return 'Invalid day';
  }
  const resultDate = new Date(year, month - 1, day);
  const currentFullDate = new Date();
  if (resultDate > currentFullDate) {
    return 'The input date is in the future';
  }
  if (year <= 1890) {
    return 'Invalid year';
  }
}