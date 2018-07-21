/* global PATH_PREFIX ENV */

function createPrefixer({ pathPrefix = '', env = '' }) {
  return function customPrefixer(path = '') {
    if (!pathPrefix || env !== 'production') {
      return path;
    }
    return (
      pathPrefix +
      '/' +
      path
        .split('/')
        .filter(Boolean)
        .join('/')
    );
  };
}

export default createPrefixer;
export const prefix = createPrefixer({ pathPrefix: PATH_PREFIX, env: ENV });
