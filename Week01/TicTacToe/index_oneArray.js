class TicTacToe {
  constructor(dom, config) {
    const defaultCfg = {
      row: 10,
      col: 10,
      size: 5,
      icon: ['', '🍦', '🍧']
    }
    this.parent = document.getElementById(dom);
    this.cfg = Object.assign({}, defaultCfg, config);
    this.reset();
  }

  reset () {
    this.chessList = new Array(this.cfg.row * this.cfg.col).fill(0);
    this.gamePerson = 1;
    this.win = false;
    this.initBoard();
  }

  initBoard () {
    this.parent.innerHTML = '';
    // 双重循环拿到数据
    this.chessList.forEach((item, i) => {
      const cellHtml = document.createElement('div');
      cellHtml.classList.add('cell');
      cellHtml.innerHTML = this.getIcon(item);
      this.parent.append(cellHtml);
      cellHtml.addEventListener('click', () => {
        this.move(i);
      });
    });
  }

  move (i) {
    if (this.hasPoint(this.chessList, i)) {
      alert('此处已被对方占领!');
      return;
    }
    this.setPoint(i);
    if (!this.checkWin()) {
      this.computerMove();
    };
  }
  checkWin () {
    const { chessList, gamePerson } = this;
    const { size } = this.cfg;
    this.initBoard();
    if (this.check(chessList, gamePerson, size)) {
      this.getInfo('is win');
      setTimeout(() => {
        this.reset()
      }, 1000);
      return true;
    }
    const will = this.willWin(chessList, gamePerson);
    if (!!will) {
      this.getInfo('will win')
    }
    this.changePerson();
    return false;
  }

  computerMove () {
    const { point } = this.bestChioce(this.chessList, this.gamePerson, 1);
    if (typeof point === 'number') {
      this.setPoint(point);
    } else {
      this.setPoint(parseInt(Math.random() * this.chessList.length));
    }
    this.checkWin();
  }



  check (list, value, number) {
    if (this.checkRows(list, value, number)) {
      return true;
    }
    if (this.checkCols(list, value, number)) {
      return true;
    }
    if (this.checkKitty1(list, value, number)) {
      return true;
    }
    if (this.checkKitty2(list, value, number)) {
      return true;
    }
    return false;
  }

  willWin (listarr, value) {
    const { row, col, size } = this.cfg;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        const point = i * row + j;
        if (this.hasPoint(listarr, point)) {
          continue;
        }
        const clonelist = this.clone(listarr);
        clonelist[point] = value;
        if (this.check(clonelist, value, size - 1)) {
          return point;
        }
      }
    }
    return null;
  }

  bestChioce (list, value, depth) {
    const len = this.chessList.length;
    let point = this.willWin(list, value);
    if (!!point) {
      return {
        point,
        result: 1
      };
    }
    let result = -2;
    top: for (let i = 0; i < len; i++) {
      if (this.hasPoint(list, i)) {
        continue;
      }
      const clonelist = this.clone(list);
      clonelist[i] = value;
      if (depth < 2) {
        // 查看对方最后的策略
        const opp = this.bestChioce(clonelist, 3 - value, depth + 1);
        // 如果对方最坏的结果是我们最好的结果,所以要取反.
        if (opp && -opp.result) {
          point = opp.point;
          result = -opp.result;
        }
      }
      if (result === 1) {
        break top;
      }
    }
    return {
      point,
      result: point ? result : 0
    }
  }

  checkRows (list, value, number) {
    const { row, col } = this.cfg;
    for (let i = 0; i < row; i++) {
      let acc = 0;
      for (let j = 0; j < col; j++) {
        const cell = list[i * row + j];
        if (cell === value) {
          acc++;
        } else {
          acc = 0;
        }
        if (acc === number) {
          return this.win = true;
        }
      }
    }
  }
  checkCols (list, value, number) {
    const { row, col } = this.cfg;
    for (let i = 0; i < row; i++) {
      let acc = 0;
      for (let j = 0; j < col; j++) {
        const cell = list[j * row + i];
        if (cell === value) {
          acc++;
        } else {
          acc = 0;
        }
        if (acc === number) {
          return this.win = true;
        }
      }
    }
  }
  checkKitty1 (list, value, number) {
    const { row } = this.cfg;
    let acc = 0;
    for (let i = 0; i < row; i++) {
      const cell = list[i * row + i];
      if (cell === value) {
        acc++;
      } else {
        acc = 0;
      }
      if (acc === number) {
        return this.win = true;
      }
    }
  }
  checkKitty2 (list, value, number) {
    const { row } = this.cfg;
    let acc = 0;
    for (let i = 0; i < row; i++) {
      const cell = list[i * row - i];
      if (cell === value) {
        acc++;
      } else {
        acc = 0;
      }
      if (acc === number) {
        return this.win = true;
      }
    }
  }
  clone (list) {
    return JSON.parse(JSON.stringify(list));
  }
  getInfo (info) {
    alert(`${this.getIcon(this.gamePerson)} ${info}`);
  }
  getIcon (value) {
    return value ? (value === 1 ? '🍦' : '🍧') : '';
  }

  hasPoint (list, i) {
    return !!list[i];
  }

  setPoint (i) {
    this.chessList[i] = this.gamePerson;
  }

  changePerson () {
    console.log(1111111)
    this.gamePerson = 3 - this.gamePerson;
  }
}
