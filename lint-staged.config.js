const { relative, isAbsolute } = require('path')

module.exports = {
  '*.{js,ts}': (paths) => {
    paths = paths.map((path) => {
      if (isAbsolute(path)) {
        return relative(__dirname, path)
      }

      return path
    })

    return ['eslint --fix', ...paths].join(' ')
  }
}
