export const validationMessages = {
  required: 'This field  is required',
  minLength: (minLength) => `This field must contain more than ${minLength} characters`,
  maxLength: (maxLength) => `This field must contain less than ${maxLength} characters`,
  letters: 'This field can contain only letters',
  email: 'Does not match with e-mail format'
}
