import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ComingSoon from '../ComingSoon.vue'

describe('ComingSoon', () => {
  it('renders properly', () => {
    const wrapper = mount(ComingSoon, { props: { msg: 'Hello' } })
    expect(wrapper.text()).toContain('Hello')
  })
})
