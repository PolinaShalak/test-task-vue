import {
  emailFormat,
  maxLengthCheck,
  minLengthCheck,
  onlyLettersField,
  requiredField
} from '@/utils/validations'
import { validationMessages } from '@/constants/validationMessages'

export const required = { validation: requiredField, message: validationMessages.required }

export const onlyLetters = { validation: onlyLettersField, message: validationMessages.letters }

export const email = { validation: emailFormat, message: validationMessages.email }

export const minLength = (minLength) => ({
  validation: minLengthCheck(minLength),
  message: validationMessages.minLength(minLength)
})

export const maxLength = (maxLength) => ({
  validation: maxLengthCheck(maxLength),
  message: validationMessages.maxLength(maxLength)
})
