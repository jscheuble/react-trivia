# Tandem Trivia

This trivia application was built using React.js and styled using CSS and the Styled-Components library.

### Assumptions

- Round of trivia has 10 Questions
- All questions are multiple-choice questions
- Your score does not need to update in real time
- Results can update on form submit, button click, or any iteraction you choose
- Questions and answers are provided

### Acceptance Criteria

- A user can view questions
- Questions with their multiple choice options must be displayed one at a time
- Questions should not repeat in a round
- A user can select only 1 answer out of the 4 possible answers
The correct answer must be revealed after a user has submitted their answer
A user can see the score they received at the end of the round
Additional considerations

Unit tests and automated test coverage

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

## Future Development
 
- Currently, the desktop and tablet versions are working as expected. The mobile version, however, intermittently has trouble rendering the correct answers when a new question is loaded. I would like to fix this in a future iteration.
- I also would like to polish the layout on mobile and desktop so the button rendering does not create the need to scroll. Most desktop and some mobile sizes are able to hold all of the elements within the screen view, but I would like to assure that all screen sizes have this feature.