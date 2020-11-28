<template>
  <div id="app">
    <audio id="1" src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"/>
    <audio id="2" src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"/>
    <audio id="3" src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"/>
    <audio id="4" src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"/>
    <div class="container">
      <h1 class="game-title">Simon the game</h1>
      <div v-bind:class="{'btn-lock': btnLock}" class="game-field">
        <ul>
          <li @click="++pressCount; check($event)" id="top-right" class="btn red" data="1"></li>
          <li @click="++pressCount; check($event)" id="top-left" class="btn blue" data="2"></li>
          <li @click="++pressCount; check($event)" id="bottom-left" class="btn yellow" data="3"></li>
          <li @click="++pressCount; check($event)" id="bottom-right" class="btn green" data="4"></li>
        </ul>
      </div>
      <div class="game-menu">
        <div class="game-info">
          <h2 class="info-title">Round: {{ round }}</h2>
        </div>
        <button @click="startGame()" class="btn-start" type="button">Начать</button>
        <div v-bind:class="{flash: lose}" class="lose">Вы проиграли на {{ round }} раунде!</div>
        <h2 class="settings-title">Уровень сложности:</h2>
        <div class="game-settings">
          <label class="settings-item" for="easy">
            <input @change="changeDifficult(1500)" type="radio" name="difficult" id="easy" class="difficult">
            Легкий
          </label>

          <label class="settings-item" for="medium">
            <input @change="changeDifficult(1000)" type="radio" name="difficult" id="medium" class="difficult" checked>
            Средний
          </label>

          <label class="settings-item" for="hard">
            <input @change="changeDifficult(400)" type="radio" name="difficult" id="hard" class="difficult">
            Сложный
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      round: 0,
      pressCount: 0,
      userSequence: [],
      simonSequence: [],
      timeout: 1000,
      btnLock: true,
      lose: false
    };
  },
  methods: {
    startGame() {
      this.clear();
      this.play();
    },
    play() {
      let randomNum = Math.floor(Math.random() * 4) + 1 + "";
      this.simonSequence.push(randomNum); // Запись рандомных чисел в массив Simon
      this.replay();
      this.round++;
      this.pressCount = 0;
    },
    replay() {
      const btns = document.querySelectorAll(".btn");
      this.btnLock = true

      for (let i = 0; i < this.simonSequence.length; i++) {
        setTimeout(() => {
          btns.forEach(btn => {
            if (this.simonSequence[i] === btn.getAttribute("data")) {
              setTimeout(() => {
                this.playSound(btn);
                btn.classList.add("flash");

                setTimeout(() => {
                  btn.classList.remove("flash");
                }, this.timeout);
              }, i * this.timeout);
            }
          });
        }, i * this.timeout);
      }
      setTimeout(() => {
        this.btnLock = false
      }, this.simonSequence.length * this.timeout)
    },
    playSound(pressedBtn) {
      let sound = document.getElementById(pressedBtn.getAttribute("data"));
      sound.currentTime = 0;
      sound.play();
    },
    check(event) {
      let pressedBtn = event.target;
      if (!this.btnLock) {
        this.playSound(pressedBtn);

        if (!(pressedBtn.getAttribute("data") ===
            this.simonSequence[this.pressCount - 1])) {
          this.lose = true;
        }

        if (this.pressCount === this.simonSequence.length) {
          this.userSequence.push(pressedBtn.getAttribute("data"));

          if (
              JSON.stringify(this.userSequence) ===
              JSON.stringify(this.simonSequence)
          ) {
            setTimeout(() => {
              this.play();
            }, this.timeout);
          } else {
            this.lose = true;
          }
        }
      }
    },
    clear() {
      (this.round = 0);
        (this.userSequence = []);
        (this.simonSequence = []);
        (this.lose = false);
    },
    changeDifficult(ms) {
      this.timeout = ms;
    }
  }
};
</script>

<style lang="sass">
html, body
  font-family: sans-serif
  font-size: 10px
  color: #444
  z-index: 0

#app
  height: 100vh
  display: flex
  justify-content: center
  align-items: center

.container
  width: 600px
  padding: 0 2rem

.game-title
  margin-bottom: 5rem
  font-size: 4rem
  font-weight: bold
  text-align: center

.game-field
  width: 30rem
  height: 30rem
  border-radius: 50%
  float: left
  overflow: hidden
  z-index: 1
  position: relative
  border: 1px #000 solid
  margin-right: 4rem

.btn
  position: absolute
  height: 14.8rem
  width: 14.8rem
  opacity: .55
  cursor: pointer
  transition: .1s
  &:hover
    opacity: .6
  &:active
    opacity: 1
    background: #fff

.btn-lock
  z-index: 0 !important

.red
  background: red
  top: 0
  right: 0
  border-top-right-radius: 100%

.blue
  background: blue
  top: 0
  left: 0
  border-top-left-radius: 100%

.yellow
  background: yellow
  bottom: 0
  left: 0
  border-bottom-left-radius: 100%

.green
  background: green
  bottom: 0
  right: 0
  border-bottom-right-radius: 100%

.game-menu
  width: 100%
  min-height: 300px
  position: relative

.info-title
  font-size: 2.5rem
  font-weight: bold
  padding-top: 3rem
  padding-bottom: 1rem

.btn-start
  border: none
  color: #fff
  background: #888
  padding: 1rem 2rem
  margin-bottom: 3rem
  border-radius: 15px
  cursor: pointer
  outline: none
  font-size: 2rem
  font-weight: bold
  opacity: 0.9
  transition: 0.15s
  &:hover
    opacity: 1
    box-shadow: 2px 2px 0 0 rgba(0, 0, 255, .4)
  &:active
    opacity: 0.8
    box-shadow: 0 0 0 0

.lose
  opacity: 0
  color: red
  font-size: 1.6rem
  position: absolute
  margin-top: -23px
  right: 20px
  transition: 0.5s

.flash
  opacity: 1
  background: #fff

.settings-title
  font-size: 1.6rem
  font-weight: bold
  padding-bottom: 1rem

.game-settings
  display: flex
  flex-direction: column

.settings-item
  display: flex
  align-items: center
  height: 2rem
  font-size: 1.6rem
  cursor: pointer
  transition: 0.2s
  &:hover
    opacity: 0.7
    color: blue

.difficult
  margin-right: .5rem
</style>
