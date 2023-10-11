<script setup>
const props = defineProps({
  isRequired: {
    type: Boolean
  },
  isMultiline: {
    type: Boolean
  },
  label: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  errorMessage: {
    type: String
  },
  inputValue: {
    type: String,
    required: true
  }
})

const emits = ['update:inputValue', 'onBlur']
</script>

<template>
  <div class="input__wrapper">
    <input
      v-if="!isMultiline"
      :required="isRequired"
      class="input"
      :class="{ input__error: errorMessage }"
      type="text"
      :id="name"
      :label="label"
      :name="name"
      :placeholder="label"
      :value="inputValue"
      @blur="$emit('onBlur')"
      @input="$emit('update:inputValue', $event.target.value)"
    />
    <textarea
      v-else
      rows="5"
      :required="isRequired"
      class="input textarea"
      :class="{ input__error: errorMessage }"
      :id="name"
      :name="name"
      :placeholder="label"
      :value="inputValue"
      @blur="$emit('onBlur')"
      @input="$emit('update:inputValue', $event.target.value)"
    />
    <label
      class="input__label"
      :class="{ input__required: isRequired, 'input__label--error': errorMessage }"
      :for="name"
      >{{ label }}</label
    >
    <span class="input__error-message" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>
.input__wrapper {
  position: relative;
  display: block;
  width: 100%;
}

.input__label {
  opacity: 1;
  position: absolute;
  left: 16px;
  top: -12px;
  padding: 0 2px;
  background-color: var(--white);
  color: var(--primary);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  transition: 0.5s all;
}

.input__label--error {
  color: var(--red);
}

.input {
  height: 48px;
  width: 100%;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  transition: 0.5s all;
  border: 1px solid var(--primary);
  border-radius: 4px;
  padding: 16px;
  outline: none;
}

.textarea {
  resize: none;
  height: auto;
}

.input:placeholder-shown + .input__label {
  opacity: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  color: var(--primary);
}

.input__required::after {
  content: '*';
  right: -4px;
  color: var(--red);
  position: absolute;
  opacity: 1;
  background-color: var(--white);
}

.input__error {
  border-color: var(--red);
}

.input__error-message {
  color: var(--red);
  font-size: 14px;
}
</style>
