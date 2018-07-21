/* global expect */
import createPrefixer from './customPrefixer';

describe('customPrefix', () => {
  it('returns a string', () => {
    const customPrefixer = createPrefixer({});

    expect(typeof customPrefixer()).toBe('string');
  });

  it('does not prefix in development', () => {
    const customPrefixer = createPrefixer({
      pathPrefix: '/prefix',
      env: 'development'
    });
    const path = '/my-path';

    expect(customPrefixer(path)).toEqual(path);
  });

  it('does prefix in production', () => {
    const customPrefixer = createPrefixer({
      pathPrefix: '/prefix',
      env: 'production'
    });
    const path = '/my-path';
    const prefixedPath = '/prefix/my-path';

    expect(customPrefixer(path)).toEqual(prefixedPath);
  });

  it('can handle multiple slashes', () => {
    const customPrefixer = createPrefixer({
      pathPrefix: '/prefix',
      env: 'production'
    });
    const path = '/////my-path//////';
    const prefixedPath = '/prefix/my-path';

    expect(customPrefixer(path)).toEqual(prefixedPath);
  });

  it('can handle no slashes', () => {
    const customPrefixer = createPrefixer({
      pathPrefix: '/prefix',
      env: 'production'
    });
    const path = 'my-path';
    const prefixedPath = '/prefix/my-path';

    expect(customPrefixer(path)).toEqual(prefixedPath);
  });

});
