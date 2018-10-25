import { login, logout } from '../../actions/auth';

describe('Auth Action Creators', () => {

    describe('login', () => {
        test('should setup login action object', () => {
            const uid = '123'
            expect(login(uid)).toEqual({
                type: 'LOG_IN',
                uid
            })
        });
    });
    describe('logout', () => {
        test('should setup logout action object', () => {
            expect(logout()).toEqual({ type: 'LOG_OUT' });
        });
    });
});
