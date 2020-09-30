import { loginApi, useAuth } from './Auth.provider';

jest.mock('react', () => ({
  useContext: jest.fn().mockImplementation(() => 24),
  createContext: () => null,
}));

describe('AuthProviderModule', () => {
  describe('loginApi', () => {
    const mockedUser = {
      id: '123',
      name: 'Wizeline',
      avatarUrl:
        'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    };
    it('auths mocked user', () => {
      loginApi('wizeline', 'Rocks!').then((res) => {
        console.log('Res', res);
        expect(res).toEqual(mockedUser);
      });
    });
    it('auths mocked user', () => {
      loginApi('help', 'me').catch((err) => {
        expect(err).toEqual('Username or password invalid');
      });
    });
  });

  describe('useAuth', () => {
    it('Returns a context', () => {
      expect(useAuth()).toEqual(24);
    });
  });
});
