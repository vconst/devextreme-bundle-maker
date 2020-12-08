module.exports = {
  launch: {
      headless: true, //process.env.HEADLESS !== 'false',
      devtools: false,
      args: ['--enable-precise-memory-info']
  }
}