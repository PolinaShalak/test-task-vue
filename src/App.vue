<script setup>
import { reactive, ref } from 'vue'
import Input from './components/Input.vue'
import Button from './components/Button.vue'
import useValidate from '@/hooks/useValidate'
import { required, onlyLetters, email, minLength, maxLength } from '@/constants/validationObjects'
import formRequest from '@/services/form'

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

const validateState = reactive(initialState)

const isLoading = ref(false)
const requestResult = ref()

const validateRules = {
  name: {
    required,
    onlyLetters,
    minLength: minLength(5),
    maxLength: maxLength(10)
  },

  email: {
    required,
    email
  },

  subject: {
    onlyLetters,
    maxLength: maxLength(100)
  },

  message: {
    required,
    onlyLetters,
    maxLength: maxLength(500)
  }
}

const { errors, onValidateField, onValidate, getIsValidForm } = useValidate(
  validateState,
  validateRules
)

const submitForm = async () => {
  onValidate()

  if (getIsValidForm()) {
    isLoading.value = true
    const result = await formRequest(validateState)

    requestResult.value = result

    if (result.ok) {
      for (const key in validateState) {
        validateState[key] = ''
      }
    }

    isLoading.value = false
  }
}
</script>

<template>
  <form class="wrapper" @submit.prevent="submitForm">
    <Input
      :isRequired="true"
      label="Name"
      name="name"
      :errorMessage="errors.name"
      :inputValue="validateState.name"
      @onBlur="onValidateField('name')"
      @update:inputValue="(newValue) => (validateState.name = newValue)"
    />
    <Input
      :isRequired="true"
      label="Email"
      name="email"
      :errorMessage="errors.email"
      :inputValue="validateState.email"
      @onBlur="onValidateField('email')"
      @update:inputValue="(newValue) => (validateState.email = newValue)"
    />
    <Input
      label="Subject"
      name="subject"
      :errorMessage="errors.subject"
      :inputValue="validateState.subject"
      @onBlur="onValidateField('subject')"
      @update:inputValue="(newValue) => (validateState.subject = newValue)"
    />
    <Input
      :isRequired="true"
      :isMultiline="true"
      label="Message"
      name="message"
      :errorMessage="errors.message"
      :inputValue="validateState.message"
      @onBlur="onValidateField('message')"
      @update:inputValue="(newValue) => (validateState.message = newValue)"
    />

    <span v-if="isLoading">Loading...</span>
    <span
      v-if="requestResult?.ok !== undefined"
      :class="{ result__error: !requestResult?.ok, result__success: requestResult?.ok }"
    >
      {{ requestResult.ok ? 'Success' : 'Error' }}
    </span>
    <code v-if="requestResult?.data">
      {{ requestResult.data }}
    </code>
    <Button :isDisabled="isLoading" text="Submit" />
  </form>
</template>

<style scoped>
.wrapper {
  width: 50vw;
  margin: 0 auto;
  display: grid;
  gap: 16px;
}

.result__error {
  color: var(--red);
}

.result__success {
  color: var(--green);
}

@media (max-width: 1024px) {
  .wrapper {
    width: 100%;
  }
}
</style>
