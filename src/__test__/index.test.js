import Index from '../index';

jest.mock('../styles.scss', () => {});

it('renders without crashing', () => {
  expect(
    JSON.stringify({
      ...{},
      ...Index,
      ...{ _reactInternalInstance: 'censored' },
    }),
  ).toMatchSnapshot();
});

module.exports = 'test-file-stub';
