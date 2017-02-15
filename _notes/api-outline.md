# API Outline

## Canvas

### Methods

* Create element

## Game

### Properties

* Levels
* Element

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
* Color
* Result

### Methods

* draw
* createMesh
* init

## Level

### Properties

* ID
* Challenges
* Name

## Challenge

### Properties

* ID
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

### Methods

* Draw
