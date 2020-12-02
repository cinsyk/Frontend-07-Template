class TicTacToe {
  constructor(dom) {
    this.parent = document.getElementById(dom);
    this.chessList = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    this.gamePerson = 0;
  }

  initBoard() {
    // 双重循环拿到数据
    this.chessList.forEach(item => {
      item.forEach(cell => {
        // 判断数据，填充不同的物体
        const cellHtml = `<div class="cell">${this.setIcon()}</div>`;
        this.parent.innerHTML += cellHtml;
      });
    });
    this.gamePerson = 1;
    this.addEvent();
  }

  addEvent() {
    const that = this;
    this.parent.addEventListener('click', function(event) {
      let inner = event.target.innerHTML;
      if (!inner) {
        event.target.innerHTML = that.setIcon();
      } else {
        alert('此处已被对方占领!');
      }
    });
  }

  setIcon() {
    if (this.gamePerson === 1) {
      this.gamePerson = 2;
      return '🍦';
    }
    if (this.gamePerson === 2) {
      this.gamePerson = 1;
      return '🍧';
    }
    return '';
  }
}
