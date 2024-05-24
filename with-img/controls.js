class Controls {
  constructor(type) {
    // memastikan semua nilainya 0 dulu agar mobil diam
    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;

    switch (type) {
      case "KEYS":
        // console.log("ok");
        this.#addKeyboardListeners();
        break;
      case "DUMMY":
        this.forward = true;
        break;
    }
    // this.#addKeyboardListeners();
  }

  #addKeyboardListeners() {
    // ketika ditekan
    document.onkeydown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.reverse = true;
          break;
      }

      // debug
      // console.table(this);
    };

    // ketika ditekan lalu dilepas
    document.onkeyup = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowDown":
          this.reverse = false;
          break;
      }

      // debug
      // console.table(this);
    };
  }
}
