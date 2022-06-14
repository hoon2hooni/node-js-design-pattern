class Logger {
  constructor(name) {
    this.name = name;
  }

  verbose(message) {
    this.log(`verbose: ${message}`);
  }

  info(message) {
    this.log(`info: ${message}`);
  }

  log(message) {
    console.log(`[${this.name}] ${message}`);
  }
}


module.exports = Logger