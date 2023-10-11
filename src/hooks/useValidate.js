import { ref } from 'vue'

const useValidate = (state, rules) => {
  const errors = ref({})

  const onValidateField = (fieldName) => {
    const currentFieldValue = state[fieldName]
    const currentFieldRules = Object.values(rules[fieldName])

    const potentialError = currentFieldRules.find((rule) => !rule.validation(currentFieldValue))

    errors.value = { ...errors.value, [fieldName]: potentialError?.message || '' }
  }

  const onValidate = () => {
    const fieldsRules = Object.keys(rules)
    fieldsRules.forEach(onValidateField)
  }

  const getIsValidForm = () => {
    const errorsArray = Object.values(errors.value)
    return !errorsArray.find((error) => !!error)
  }

  return { errors, onValidate, onValidateField, getIsValidForm }
}

export default useValidate
