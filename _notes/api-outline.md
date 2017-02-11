# API Outline

## Game

### Properties

* Levels

### Methods

* loadData
* checkUserLevel
* saveScore
* getScore
* setScene
* playAudio

## Die

### Properties

* Number of sides
* Result

## Level

### Properties

* Challenges

## Challenge

### Properties

* Parameters
  * Time
  * Dice
  * Attempts
* Answer

### Methods

* startChallenge
  * rollDice
  * startTimer
* startGuess

## Player

### Properties

* High score
* Highest level

### Methods

* attemptAnswer

## Scene

### Properties

* Content
