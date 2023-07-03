# React Planner App

So in this project, i have added one main custom widget to the planner app which is:

## Tic Tac Toe Widget

But i also added 3 other widgets as extras which are:

**Stopwatch Widget**
**Photo Widget**
**Location Widget**

Question:
--- Does the custom widget built fit in with the rest of the widgets of the planner app? And how to use it
:

Yes, the Tic Tac Toe Widget seamlessly fit in with the rest of the widgets in the planner app, Here's how it integrates:

## Tic Tac Toe Widget: 

The Tic Tac Toe Widget is a component designed for the planner app, specifically for entertainment purposes and providing a brief mental break from planning tasks. The widget is implemented in the **TicTacToeWidget.js** file.

### Why Tic Tac Toe Widget?

The Tic Tac Toe widget is an appropriate addition to the planner app for several reasons:

1. **Entertainment and Relaxation**: The game allows users to take a short break from their planning activities and engage in a classic and familiar game of Tic Tac Toe. It provides a quick mental refreshment and can help users relax before returning to their tasks.

2. **Visual Balance**: The widget is placed on the left side of the screen to create a visual balance with the rest of the content. By positioning the widget on the left, the planner content can occupy the majority of the screen on the right, allowing users to focus on their tasks while still having the game readily accessible.

3. **Minimized Distraction**: Placing the widget on the left side helps minimize the risk of it becoming a significant distraction. Users can engage with the game if they choose to, but it won't interfere with their primary planning activities. This placement maintains a clear separation between the planner and the game.

4. **User Expectations**: Users often expect interactive elements or additional features to be located on the sides of the screen. Placing the Tic Tac Toe widget on the left side aligns with this expectation and allows users to intuitively find and interact with the game.

### How to Use

1. **Locating the Widget**: The Tic Tac Toe widget, represented by the TicTacToeWidget.js file, is conveniently placed on the left side of the screen within the Planner app. This strategic placement creates visual balance with the rest of the content on the screen. By occupying the left side, it ensures that the game remains accessible without becoming a significant distraction.

2. **Understanding the Gameplay**: Tic Tac Toe is a two-player game played on a 3x3 grid. The players take turns marking cells in the grid, aiming to form a horizontal, vertical, or diagonal line of their respective marks (X or O). In this widget, you'll be playing against a bot, and you'll be represented by the mark "X" while the bot uses "O."

3. **Making a Move**: To make a move, simply click on an empty cell within the grid. The widget will automatically alternate the turns between you and the bot. You cannot place your mark in a cell that is already occupied, and the bot will not make a move if it's not its turn.

4. **Game Outcome**: The game will continue until one of the following conditions is met:

- You win by forming a line of your marks (X) horizontally, vertically, or diagonally.
- The bot wins by forming a line of its marks (O) horizontally, vertically, or diagonally.
- The game ends in a tie if all cells in the grid are filled, and no winner is determined.

5. **Restarting the Game**: After the game ends, you have the option to restart and play again. A "Restart" button will appear, allowing you to reset the game and start a new round.

6. **Adjusting the Difficulty**: The widget provides three levels of difficulty: easy, medium, and hard. You can change the difficulty by using the dropdown menu labeled "Difficulty." Here's an overview of how the bot behaves in each difficulty setting:

- Easy: In the easy mode, the bot makes random moves within the game. It does not employ any advanced strategy or attempt to analyze the game state. As a result, playing against the easy bot provides a less challenging experience. This difficulty level is recommended for users who are new to the game or prefer a more relaxed and casual gameplay session.
  
- Medium: The medium difficulty introduces some strategic decision-making by the bot. It aims to provide a balanced challenge for players with moderate experience in Tic Tac Toe. In this mode, the bot will try to identify your potential winning moves and actively block them. Additionally, it will search for its own winning moves and try to create a line of its marks (O) to win the game. While the medium bot is more challenging than the easy one, it still does not employ advanced algorithms.
  
- Hard: The hard difficulty is designed to offer a highly challenging gameplay experience. In this mode, the bot utilizes a sophisticated algorithm called minimax. The minimax algorithm is a decision-making process that allows the bot to evaluate all possible moves and select the optimal one. It considers all potential outcomes of the game and chooses moves that maximize its chances of winning or minimizing its chances of losing. The hard bot will make strategic moves, anticipate your moves, and actively try to create winning opportunities for itself. It poses a formidable challenge for experienced players and provides an excellent opportunity to test your skills against an advanced AI opponent.

Overall, as a planner app that aims to provide users with a well-rounded experience that includes moments of leisure and relaxation, incorporating a Tic Tac Toe game is be a fun addition. It offers users a way to take a break, relax, and engage in a leisure activity whilist users can enjoy a recreational activity while still having access to their planner and maintaining productivity. It provides a brief diversion and an opportunity to relax before returning to their scheduled tasks and events.

## EXTRAS:

### Stopwatch Widget: 
The StopwatchWidget component is a versatile stopwatch implementation that can be integrated into the Planner app. It allows users to measure elapsed time, record laps, and reset the stopwatch as needed.

#### Why use the Stopwatch Widget?
The Stopwatch Widget offers several benefits for the Planner app:

1. **Time Tracking**: Users can accurately measure and track the time spent on tasks or activities within the app.
2. **Performance Evaluation**: The stopwatch provides a tool for evaluating task efficiency and improving productivity.
3. **Record Laps**: Users can record laps to mark milestones or checkpoints during timed activities.
4. **Flexibility**: The widget's simple and intuitive design allows it to be easily integrated into the Planner app without disrupting the user experience.

#### How to Use

- **Interact with the Stopwatch**: The StopwatchWidget provides the following functionality:
- **Start/Stop**: Click the "Start" button to begin the stopwatch. Click the "Stop" button to pause it.
- **Reset**: Click the "Reset" button to reset the stopwatch and clear recorded laps.
- **Record Laps**: Click the "Lap" button to record a lap. Laps will be displayed below the stopwatch.

### Photo Widget: 
The PhotoWidget component is a simple widget that displays a random photo fetched from the Picsum Photos API. It can be integrated into the Planner app to add visual appeal and provide a dynamic element for users.

#### Why use the Photo Widget?
The Photo Widget offers several benefits for the Planner app:

1. **Visual Enhancement**: The widget enriches the app's user interface by displaying random, high-quality photos.
2. **Aesthetics and Inspiration**: Random photos can inspire creativity and provide a visually stimulating experience for users.
3. **Dynamic Content**: Each time the widget is refreshed, a new random photo is fetched, ensuring fresh and diverse content.
4. **Ease of Integration**: The Photo Widget is easy to integrate into the Planner app and requires minimal configuration.

#### How to Use

1. **Enjoy the Random Photos **: The PhotoWidget component will fetch a random photo from the Picsum Photos API and display it. You can refresh the photo by clicking the "Refresh Photo" button.


### Location Widget: 
The LocationWidget component is a widget that displays the user's current location using the Geolocation API and provides the option to view the location on Google Maps. It can be integrated into the Planner app to enhance user experience and provide geographical context.

#### Why use the Location Widget?

The Location Widget offers several benefits for the Planner app:

1. **Geographical Awareness**: Users can see their current latitude and longitude, giving them a sense of their location within the Planner app.
2. **City and Country Information**: The widget fetches and displays the city and country based on the user's location, providing additional context.
3. **Interactive Map**: The widget includes an interactive Google Maps view, allowing users to visualize their location and explore the surrounding area.
4. **User Engagement**: The Location Widget encourages user interaction by providing a button to open the location on Google Maps, enhancing the overall user experience.

#### How to Use

1. **View Location Information**: Once the component mounts, the user's location details will be fetched and displayed. This includes latitude, longitude, city, and country information.
2. **Open in Google Maps**: Click the "Open in Google Maps" button to open the location on Google Maps in a new browser tab or window.

Overall, each custom widget has been designed to ensure they seamlessly fit in with the rest of the planner app's widgets, maintaining a consistent visual style, user interface, and purpose and also follows the best coding practices and is easy for other developers to understand.

here's the link to the [site](https://roy-planner-app-extended.web.app/)
