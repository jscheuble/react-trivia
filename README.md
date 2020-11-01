# Tandem Trivia



## Deploy Link

https://neon-trivia.vercel.app/


## Installation/Setup

```shell
$ npm install
$ npm start
```

## Run Tests
```shell
$ npm test
```

## How to Use

- Click the play button! Once the game begins, it will display a question and 3-4 answer choices.
- After selecting an answer, a submit button will appear. You can change your answer as many times as you would like before submitting.
- After submitting, the card will flip and reveal whether your selected answer was correct or incorrect.
- If an incorrect answer is selected, the correct answer will be highlighted in green. 
- After 10 questions have been answered and submitted, a view score button will appear. Clicking this button will reveal your score out of 10 and render a button that allows you to play another game.

## Current Features

- Randomly generates an index to select a question from the list of questions, and removes question from list to avoid duplicates.
- Shuffles array of answers prior to rendering so the correct answer appears in different locations throughout the game.
- A progress bar at the bottom shows the user how many questions they have answered.


## Testing

- If I had more time to build on this project, I would like to implement more tests. Due to the dynamic page load and the randomly generated questions, I was struggling to find a way to simulate clicking on an answer choice to trigger a state change. Because the snapshot looks different almost every time the page loads, I have yet to find a way to test this part of the application. After this experience, I am going to learn more about test driven development and integrate those practices into my future projects to hopefully avoid this issue moving forward. 