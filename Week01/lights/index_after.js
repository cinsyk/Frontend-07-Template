class lights {
  constructor(dom) {
    this.parents = document.querySelector(dom);
    this.children = this.parents.querySelectorAll('.light');
    this.active = 0;
    this.lights = [
      { name: 'green', time: 1000 },
      { name: 'yellow', time: 200 },
      { name: 'red', time: 500 },
    ]
  }

  sleep (time) {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    })
  }

  async changeLight () {
    const len = this.lights.length;
    if (this.active >= len) {
      this.active = 0
    }
    const item = this.lights[this.active];
    this.setItem(item);
    await this.sleep(item.time);
    this.active++;
    this.changeLight();
  }

  setItem (item) {
    const len = this.lights.length;
    for (let i = 0; i < len; i++) {
      this.children[i].className = 'light';
    }
    this.children[this.active].classList.add(item.name);
  }
}
