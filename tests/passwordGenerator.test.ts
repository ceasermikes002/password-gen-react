// tests/generatePassword.test.ts
import { generatePassword } from '../src/utils/generatePassword';

describe('generatePassword', () => {
    test('generates a password of specified length', () => {
        const length = 10;
        const password = generatePassword({
            length,
            includeUppercase: true,
            includeLowercase: true,
            includeNumbers: true,
            includeSymbols: true,
        });
        expect(password.length).toBe(length);
    });

    test('generates a password with only lowercase letters', () => {
        const password = generatePassword({
            length: 10,
            includeUppercase: false,
            includeLowercase: true,
            includeNumbers: false,
            includeSymbols: false,
        });
        expect(password).toMatch(/^[a-z]+$/);
    });

    test('generates a password with uppercase letters', () => {
        const password = generatePassword({
            length: 10,
            includeUppercase: true,
            includeLowercase: false,
            includeNumbers: false,
            includeSymbols: false,
        });
        expect(password).toMatch(/[A-Z]/);
    });

    test('generates a password with numbers', () => {
        const password = generatePassword({
            length: 10,
            includeUppercase: false,
            includeLowercase: false,
            includeNumbers: true,
            includeSymbols: false,
        });
        expect(password).toMatch(/[0-9]/);
    });

    test('generates a password with symbols', () => {
        const password = generatePassword({
            length: 10,
            includeUppercase: false,
            includeLowercase: false,
            includeNumbers: false,
            includeSymbols: true,
        });
        expect(password).toMatch(/[!@#$%^&*()_+\-={}[\]|;:<>,.?/~`]/);
    });

    test('generates a password with mixed character types', () => {
        const password = generatePassword({
            length: 10,
            includeUppercase: true,
            includeLowercase: true,
            includeNumbers: true,
            includeSymbols: true,
        });
        expect(password).toMatch(/[A-Z]/);
        expect(password).toMatch(/[a-z]/);
        expect(password).toMatch(/[0-9]/);
        expect(password).toMatch(/[!@#$%^&*()_+\-={}[\]|;:<>,.?/~`]/);
    });
});
