## Server API

### Server-side rendering

* GET '/'
  * Create/load user data
  * Render start-screen.html
* GET '/level/:levelId/challenge/:challengeId'
  * Calculate result
  * Save result
  * Render challenge.html
* GET '/level/:levelId/challenge/:challengeId/guess'
  * Render guess.html
* POST '/level/:levelId/challenge/:challengeId/guess'
  * Save score
  * Render result.html

### JSON API

* GET '/api/levels'
  * Return JSON for all levels
* GET '/api/level/:levelId'
  * Return JSON for level
* GET '/api/challenge/:challengeId'
  * Return JSON for challenge
* GET '/api/user/:userId'
  * Return JSON for user (including score/level)
* POST '/api/user'
  * Create user
* PUT '/api/user'
  * Update user score
* More for admin creating levels/challenges/etc.

### Questions

* How to keep track of answer?
* Keep track of user data with cookies for now?
* Protect score updating?

### Flow

* go to '/'
* click 'play'
* go to 'menu'
* select challenge
* go to 'level/1/challenge/1'
* server saves answer
* redirect after X seconds
* go to 'level/1/challenge/1/guess'
* go to 'result'
* go to next challenge or try again
