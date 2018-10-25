import { authReducer } from '../../reducers/auth';

describe('authReducer', () => {
    
    describe('LOG_IN', () => {
        test('should set uid for log in', () => {
            const uid = '123';
            const action = {
                type: 'LOG_IN',
                uid
            };
            const state = authReducer({}, action);
            expect(state.uid).toBe(uid);
        });
    });

    describe('LOG_OUT', () => {
        test('should clear uid for log out', () => {
            const action = { type: 'LOG_OUT' };
            const state = authReducer({ uid: '123' }, action);
            expect(state).toEqual({});
        });
    });
});
