<template>
  <div id="app">
    <div class="container">
      <h1 class="game-title">Simon the game</h1>
      <div class="game-field">
        <ul>
          <li class="btn red" data="1"></li>
          <li class="btn blue" data="2"></li>
          <li class="btn yellow" data="3"></li>
          <li class="btn green" data="4"></li>
        </ul>
      </div>
      <div class="game-menu">
        <div class="game-info">
          <h2 class="info-title">Round: 0</h2>
        </div>
        <button class="btn-start" type="button">Начать</button>
        <div class="lose">Вы проиграли на 0 раунде!</div>
        <h2 class="settings-title">Уровень сложности:</h2>
        <div class="game-settings">
          <label class="settings-item" for="easy">
            <input type="radio" name="difficult" id="easy" class="difficult">
            Легкий
          </label>

          <label class="settings-item" for="medium">
            <input type="radio" name="difficult" id="medium" class="difficult">
            Средний
          </label>

          <label class="settings-item" for="hard">
            <input type="radio" name="difficult" id="hard" class="difficult">
            Сложный
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="sass">
html, body
  font-family: sans-serif
  font-size: 10px
  color: #444

.container
  width: 600px
  margin: 0 auto
  padding: 0 2rem

.game-title
  margin-top: 5rem
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
  position: relative
  border: 1px #000 solid
  margin-right: 4rem

.btn
  position: absolute
  height: 14.8rem
  width: 14.8rem
  opacity: 0.6

.red
  background: red
  top: 0
  right: 0

.blue
  background: blue
  top: 0
  left: 0

.yellow
  background: yellow
  bottom: 0
  left: 0

.green
  background: green
  bottom: 0
  right: 0

.game-menu
  width: 100%
  position: relative

.game-info

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
    box-shadow: 2px 2px 0px 0px rgba(0, 0, 255, .4)
  &:active
    opacity: 0.8
    box-shadow: 0px 0px 0px 0px

.lose
  opacity: 0
  font-size: 1.6rem
  position: absolute
  margin-top: -23px
  right: 20px
  transition: 0.5s

.show
  opacity: 1

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
