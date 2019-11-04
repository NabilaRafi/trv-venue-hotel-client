import configureStore from './store';

const suite = 'test reducer store';

describe(suite, function descConfigureStoreSuite() {
    it('should create store with default app state', function testConfigureStore() {
        const expected = { data: [] };
        const actual = configureStore.getState();
        expect(actual).toEqual(expected);
    });
});