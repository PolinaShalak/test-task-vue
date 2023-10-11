export const requiredField = (value) => !!value

export const onlyLettersField = (value) => {
  if (value) return /^[a-zA-Z]+$/.test(value)
  return true
}

export const minLengthCheck = (minLength) => (value) => {
  return value.length >= minLength
}

export const maxLengthCheck = (maxLength) => (value) => {
  return value.length <= maxLength
}

export const emailFormat = (value) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
}
