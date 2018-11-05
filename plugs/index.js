module.exports = {
  [require('../package.json').name]: {
    app: {
      html: {
        app: require('./app/html/app')
      }
    },
    styles: {
      mcss: require('./styles/mcss.js')
    }
  }
}
