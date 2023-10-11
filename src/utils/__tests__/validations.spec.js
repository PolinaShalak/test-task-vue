import {
  requiredField,
  onlyLettersField,
  minLengthCheck,
  maxLengthCheck,
  emailFormat
} from '../validations'
import { describe, it, expect } from 'vitest'

describe('validations', () => {
  describe('requiredField', () => {
    it('returns true when a non-empty value is provided', () => {
      expect(requiredField('Test')).toBe(true)
    })

    it('returns false when an empty value is provided', () => {
      expect(requiredField('')).toBe(false)
    })
  })

  describe('onlyLettersField', () => {
    it('returns true when the value contains only letters', () => {
      expect(onlyLettersField('TestName')).toBe(true)
    })

    it('returns false when the value contains non-letter characters', () => {
      expect(onlyLettersField('Test12345')).toBe(false)
    })

    it('returns true when an empty value is provided', () => {
      expect(onlyLettersField('')).toBe(true)
    })
  })

  describe('minLengthCheck', () => {
    it('returns true when the value has at least the specified minimum length', () => {
      const minLengthValidator = minLengthCheck(5)
      expect(minLengthValidator('Hello')).toBe(true)
    })

    it('returns false when the value is shorter than the specified minimum length', () => {
      const minLengthValidator = minLengthCheck(5)
      expect(minLengthValidator('Hi')).toBe(false)
    })
  })

  describe('maxLengthCheck', () => {
    it('returns true when the value is within the specified maximum length', () => {
      const maxLengthValidator = maxLengthCheck(10)
      expect(maxLengthValidator('ShortText')).toBe(true)
    })

    it('returns false when the value is longer than the specified maximum length', () => {
      const maxLengthValidator = maxLengthCheck(10)
      expect(maxLengthValidator('ThisIsALongText')).toBe(false)
    })
  })

  describe('emailFormat', () => {
    it('returns true when a valid email format is provided', () => {
      expect(emailFormat('valid@example.com')).toBe(true)
    })

    it('returns false when an invalid email format is provided', () => {
      expect(emailFormat('invalid-email')).toBe(false)
    })
  })
})
