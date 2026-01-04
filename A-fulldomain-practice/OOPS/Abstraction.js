class Car {
  start() {
    this.#spark()
    console.log('car started')
  }

  #spark() {}
}
let c = new Car();

c.start();
