import {describe, it, expect} from 'vitest'
import { validateEmail } from '../RegisterForm'

describe('RegisterForm', () => {
    describe('validateEmail', () => {
        it('should return an error message for invalid emails', () => {
            expect(validateEmail('asdasd')).not.toBe(true)
        })
    })
})