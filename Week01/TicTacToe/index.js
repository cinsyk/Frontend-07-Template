class TicTacToe {
  constructor(dom) {
    this.parent = document.getElementById(dom);
    this.reset();
  }

  reset () {
    this.chessList = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    this.gamePerson = 1;
    this.initBoard();
  }

  initBoard () {
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

  move (i, j) {
    if (this.hasPoint(this.chessList, i, j)) {
      alert('此处已被对方占领!');
      return;
    }
    this.setPoint(i, j);
    if (!this.checkWin()) {
      this.computerMove();
    };
  }

  computerMove () {
    const { point, result } = this.bestChioce(this.chessList, this.gamePerson);
    console.log(point);
    if (point) {
      this.setPoint(...point);
    }
    this.checkWin();
  }

  checkWin () {
    const { chessList, gamePerson } = this;
    this.initBoard();
    if (this.check(chessList, gamePerson)) {
      this.getInfo('is win');
      setTimeout(() => {
        this.reset()
      }, 1000);
      return true;
    }
    // if (!!this.willWin(chessList, gamePerson)) {
    //   this.getInfo('will win')
    // }
    this.changePerson();
  }

  check (list, value) {
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

  willWin (listarr, value) {
    const len = listarr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (this.hasPoint(listarr, i, j)) {
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

  bestChioce (list, value) {
    let point = this.willWin(list, value);
    if (!!point) {
      return {
        point,
        result: 1
      };
    }
    const len = list.length;
    let result = -2;
    top: for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (this.hasPoint(list, i, j)) {
          continue;
        }
        const clonelist = this.clone(list);
        clonelist[i][j] = value;
        // 查看对方最后的策略
        const opp = this.bestChioce(clonelist, 3 - value).result;
        // 如果对方最坏的结果是我们最好的结果,所以要取反.
        if (-opp > result) {
          point = [i, j];
          result = -opp;
        }
        if (result === 1) {
          break top;
        }
      }
    }
    return {
      point,
      result: point ? result : 0
    }
  }

  checkRows (list, value) {
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
  checkCols (list, value) {
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
  checkKitty1 (list, value) {
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
  checkKitty2 (list, value) {
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
  clone (list) {
    return JSON.parse(JSON.stringify(list));
  }
  getInfo (info) {
    alert(`${this.getIcon(this.gamePerson)} ${info}`);
  }
  getIcon (value) {
    return value ? (value === 1 ? '🍦' : '🍧') : '';
  }

  hasPoint (list, i, j) {
    return !!list[i][j];
  }

  setPoint (i, j) {
    this.chessList[i][j] = this.gamePerson;
  }

  changePerson () {
    this.gamePerson = 3 - this.gamePerson;
  }
}
