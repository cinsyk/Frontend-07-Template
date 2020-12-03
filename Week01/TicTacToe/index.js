class TicTacToe {
  constructor(dom) {
    this.parent = document.getElementById(dom);
    this.chessList = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    this.gamePerson = 1;
  }

  initBoard() {
    this.parent.innerHTML = '';
    // 双重循环拿到数据
    this.chessList.forEach((item, i) => {
      const len = item.length;
      for (let j = 0; j < len; j++) {
        const cellHtml = document.createElement('div');
        cellHtml.classList.add('cell');
        cellHtml.innerHTML = this.getIcon(item[j]);
        this.parent.append(cellHtml);
        cellHtml.addEventListener('click', () => {
          this.move(i, j);
        });
      }
    });
  }

  move(i, j) {
    const { chessList, gamePerson } = this;
    if (this.hasPoint(i, j)) {
      alert('此处已被对方占领!');
      return;
    }
    this.setPoint(i, j);
    this.initBoard();
    if (this.check(chessList, gamePerson)) {
      this.getInfo('is win');
    }
    this.willWin(chessList, gamePerson);
    this.changePerson();
    this.bestChioce(chessList, gamePerson);
  }

  check(list, value) {
    if (this.checkRows(list, value)) {
      return true;
    }
    if (this.checkCols(list, value)) {
      return true;
    }
    if (this.checkKitty1(list, value)) {
      return true;
    }
    if (this.checkKitty2(list, value)) {
      return true;
    }
    return false;
  }

  willWin(listarr, value) {
    const len = listarr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (this.hasPoint(i, j)) {
          continue;
        }
        const clonelist = this.clone(listarr);
        clonelist[i][j] = value;
        if (this.check(clonelist, value)) {
          return [i, j];
        }
      }
    }
    return null;
  }

  bestChioce(list, value) {
    let p = this.willWin(list, value);
    if (!!p) {
      this.getInfo('will win');
      return {
        point: p,
        result: 1
      };
    }
  }
  
  checkRows(list, value) {
    const len = list.length;
    for (let i = 0; i < len; i++) {
      let win = true;
      for (let j = 0; j < len; j++) {
        const cell = list[i][j];
        if (cell !== value) {
          win = false;
        }
      }
      if (win) {
        return win;
      }
    }
  }
  checkCols(list, value) {
    const len = list.length;
    for (let i = 0; i < len; i++) {
      let win = true;
      for (let j = 0; j < len; j++) {
        const cell = list[j][i];
        if (cell !== value) {
          win = false;
        }
      }
      if (win) {
        return win;
      }
    }
  }
  checkKitty1(list, value) {
    const len = list.length;
    let win = true;
    for (let i = 0; i < len; i++) {
      const cell = list[i][i];
      if (cell !== value) {
        win = false;
      }
    }
    if (win) {
      return win;
    }
  }
  checkKitty2(list, value) {
    const len = list.length;
    let win = true;
    for (let i = 0; i < len; i++) {
      const cell = list[i][len - i - 1];
      if (cell !== value) {
        win = false;
      }
    }
    if (win) {
      return win;
    }
  }
  clone(list) {
    return JSON.parse(JSON.stringify(list));
  }
  getInfo(info) {
    alert(`${this.getIcon(this.gamePerson)} ${info}`);
  }
  getIcon(value) {
    return value ? (value === 1 ? '🍦' : '🍧') : '';
  }

  hasPoint(i, j) {
    return !!this.chessList[i][j];
  }

  setPoint(i, j) {
    this.chessList[i][j] = this.gamePerson;
  }

  changePerson() {
    this.gamePerson = 3 - this.gamePerson;
  }
}
