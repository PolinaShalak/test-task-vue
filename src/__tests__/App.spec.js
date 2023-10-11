import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'
import { fireEvent } from '@testing-library/vue'
import { validationMessages } from '@/constants/validationMessages'

describe('Form', () => {
  it('validates input fields on blur', async () => {
    const wrapper = mount(App)

    const nameInput = wrapper.find('[name="name"]')
    await nameInput.trigger('blur')

    expect(wrapper.text().includes(validationMessages.required))

    await fireEvent.update(nameInput, 'TestName')

    expect(wrapper.text().includes(''))
  })

  it('submits the form correctly', async () => {
    const wrapper = mount(App)
    const nameInput = wrapper.find('[name="name"]')
    const emailInput = wrapper.find('[name="email"]')
    const messageInput = wrapper.find('[name="message"]')

    await fireEvent.update(nameInput, 'TestName')
    await fireEvent.update(emailInput, 'test@gmail.com')
    await fireEvent.update(messageInput, 'test')

    await wrapper.find('button').trigger('click')

    expect(wrapper.text().includes('Loading...'))
  })
})
