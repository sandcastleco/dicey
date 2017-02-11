## Server API

### Server-side rendering

* GET '/'
  * Create/load user data
  * Render start-screen.html
* GET '/menu'
  * Load level list
  * Render menu.html
* GET '/level/:levelId/:challengeId'
  * Calculate result
  * Save result
  * Render challenge.html
* GET '/level/:levelId/:challengeId/guess'
  * Render guess.html
* GET '/level/:levelId/:challengeId/result'
  * Render result.html
* POST '/level/:levelId/:challengeId/guess'
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
* Don't allow guess or result until user is done? How to keep track of status? Maybe a temporary session thing?

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
