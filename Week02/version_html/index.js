function sleep (time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  })
}

class baseMap {

  constructor(dom, config) {
    this.cfg = Object.assign({}, {
      row: 100,
      col: 100,
      localName: 'mapData'
    }, config);
    this.parent = document.querySelector(dom);
    this.mapData = this.getMap();
    this.saveMap();
  }

  initMap () {
    const { row, col } = this.cfg;
    let cellHTML = '';
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        const index = i * row + j;
        const iswall = this.hasColor(index, '', false);
        cellHTML += `<div class="cell ${iswall}" data-id="${index}"></div>`
      }
    }
    this.parent.innerHTML = cellHTML;
    this.addEvent();
  }

  async searchLoad (start, end) {
    // 先进先出，队列
    const { row, col } = this.cfg;
    const queue = new Sorted([start], (a, b) => { return distance(a) - distance(b) });
    const table = Object.create(this.mapData);
    const startIndex = start[0] * row + start[1];
    const endIndex = end[0] * row + end[1];
    this.hasColor(startIndex, 3);
    this.hasColor(endIndex, 3);
    const insetArr = async (x, y, pre) => {
      if (x >= row || x < 0 || y < 0 || y >= col) {
        return
      }
      const index = x * row + y;
      if (table[index] != 0) {
        return
      }
      table[index] = pre;
      this.hasColor(index, 2);
      queue.give([x, y]);
    }

    const distance = (val) => {
      return (val[0] - end[0]) ** 2 + (val[1] - end[1]) ** 2;
    }

    while (queue.length) {
      let [x, y] = queue.take();

      if (x === end[0] && y === end[1]) {
        let path = [];
        while (x !== start[0] || y !== start[1]) {
          const index = x * row + y;
          path.push([x, y]);
          [x, y] = table[index];
          await sleep(30);
          this.hasColor(index, 3);
        }
        console.log(path.length);
        return path;
      }
      // 查找x,y点周围的坐标
      await insetArr(x + 1, y, [x, y]);
      await insetArr(x, y + 1, [x, y]);
      await insetArr(x - 1, y, [x, y]);
      await insetArr(x, y - 1, [x, y]);
      await insetArr(x + 1, y + 1, [x, y]);
      await insetArr(x - 1, y + 1, [x, y]);
      await insetArr(x - 1, y - 1, [x, y]);
      await insetArr(x + 1, y - 1, [x, y]);
    }
    return null;
  }

  addEvent () {
    let setWall = false;
    this.parent.addEventListener('mouseover', (event) => {
      if (!setWall) {
        return
      }
      const { target } = event;
      const dataId = target.attributes['data-id']
      if (!dataId) {
        return;
      }
      const index = dataId.value;
      const { mapData } = this;
      if (mapData[index] == 1) {
        return;
      }
      mapData[index] = 1;
      target.classList.add('iswall');
    });
    this.parent.addEventListener('mousedown', () => {
      setWall = true;
    })
    this.parent.addEventListener('mouseup', () => {
      setWall = false;
    })

  }

  hasColor (index, data, ischange = true) {
    const item = data || this.mapData[index];
    let className = '';
    if (item == 3) {
      className = 'ispath'
    }
    if (item == 2) {
      className = 'isload'
    }
    if (item == 1) {
      className = 'iswall'
    }
    if (ischange) {
      const dom = document.querySelector(`[data-id="${index}"]`);
      dom.classList.add(className);
    }
    return className;
  }

  getMap () {
    const { localName, row, col } = this.cfg;
    const mapData = localStorage.getItem(localName);
    return mapData && mapData.split(',') || new Array(row * col).fill(0);
  }

  saveMap () {
    localStorage.setItem(this.cfg.localName, this.mapData);
    sleep(5000).then(() => {
      requestAnimationFrame(() => {
        this.saveMap();
      })
    })
  }
}

class Sorted {
  constructor(data, compare) {
    this.data = data;
    this.compare = compare || ((a, b) => { return a - b });
  }

  take () {
    let minIndex = 0;
    let min = this.data[minIndex];
    const len = this.data.length;
    for (let i = 0; i < len; i++) {
      if (this.compare(min, this.data[i]) > 0) {
        minIndex = i;
        min = this.data[minIndex];
      }
    }
    this.data[minIndex] = this.data[len - 1];
    this.data.pop();
    return min;
  }
  give (val) {
    this.data.push(val);
  }
  get length () {
    return this.data.length;
  }
}
