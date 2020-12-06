class lights {
  constructor(dom) {
    this.parents = document.querySelector(dom);
    this.active = 0;
    this.lights = [
      { name: 'green', time: 10 },
      { name: 'yellow', time: 2 },
      { name: 'red', time: 5 },
    ]
  }

  changeLight () {
    const len = this.lights.length;
    if (this.active >= len) {
      this.active = 0
    }
    const item = this.lights[this.active];
    this.initItem();
    console.log(item);
    setTimeout(() => {
      this.active++;
      this.changeLight();
    }, item.time * 1000);
  }

  initItem () {
    this.parents.innerHtml = '';
    this.lights.forEach((light, index) => {
      const item = document.createElement('li');
      if (index === this.active) {
        item.classList.add(light.name);
      }
      item.classList.add('light');
      this.parents.append(item);
    })

  }
}
