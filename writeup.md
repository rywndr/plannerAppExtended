# React Planner App

So in this project, i have added 5 extra widgets to the planner app, before, the planner app only have 4 widgets, by adding 5 more that makes this planner app have 9 widgets, the widgets that i have added are :

1. Stopwatch Widget
2. Notes Widget
3. Tic Tac Toe Widget
4. Photo Widget
5. Location Widget

### By default, it only shows the basic 4 widgets and the stopwatch widget i built, to view the rest of the widget, you will need to add it by the ( + Add Widget) button, i do this to prevent too much widget displayed at once when the planner app is opened.

Question:
--- Does the custom widget built fit in with the rest of the widgets of the planner app? And how to use it
:

Yes, all of the five custom widgets, including the Stopwatch Widget, Notes Widget, Tic Tac Toe Widget, Photo Widget, and Location Widget, seamlessly fit in with the rest of the widgets in the planner app, such as the Calendar Widget, Timer Widget, Clock Widget, and Reminder Widget. Here's how they integrate:

## 1. Stopwatch Widget: 
The Stopwatch Widget complements the Timer Widget by providing additional time measurement functionality. It follows the same design language, using a clear and easy-to-read display with intuitive controls. Users can conveniently track elapsed time for various activities, enhancing their productivity and time management within the planner app. The Stopwatch Widget is a valuable addition to the planner app as it enables users to effectively track and manage their time. This widget is particularly useful for tasks that require precise timing, such as workouts, presentations, or cooking. To use the Stopwatch Widget, simply open it from the widget menu. Click the "Start" button to initiate the stopwatch, "Pause" to temporarily halt the timer, and "Reset" to restart the stopwatch.

## 2. Notes Widget:
The Notes Widget seamlessly integrates with the planner app's organization and productivity features. Users can quickly jot down important information, reminders, or ideas directly within the widget. It maintains consistency with other text-based widgets, such as the Reminder Widget, by utilizing a similar text input and formatting options. The Notes Widget provides a convenient way for users to capture and organize important information within the planner app. It is ideal for jotting down quick thoughts, ideas, to-do lists, or reminders. To use the Notes Widget, select it from the widget menu. Create a new note by clicking the "New Note" button and start typing.

## 3. Tic Tac Toe Widget: 
While offering a recreational element, the Tic Tac Toe Widget is designed to coexist harmoniously with other widgets. It adheres to the app's overall visual style, including consistent typography, colors, and layout. Users can enjoy a game of Tic Tac Toe without compromising the app's productivity-oriented environment. The Tic Tac Toe Widget is an exciting addition to the planner app, offering users the opportunity to engage in a classic game of Tic Tac Toe with a bot. This widget combines entertainment with strategic thinking, making it a valuable component of the planner app. By playing against the bot, users can challenge themselves and enhance their problem-solving skills.

To utilize the Tic Tac Toe Widget, simply select it from the widget menu. The grid will appear, allowing users to take turns placing their X or O marks. The objective is to create a line of three marks horizontally, vertically, or diagonally. However, what sets this widget apart is the advanced AI bot that serves as the opponent.

The bot within the Tic Tac Toe Widget is designed to provide users with an engaging and competitive gaming experience. It employs an algorithm that analyzes the game board, predicts the user's moves, and strategically counters them. The bot can identify winning moves, block the user's attempts, and even make its own winning moves.

## 4. Photo Widget: 
The Photo Widget aligns with the planner app's emphasis on personalization and visual content. Users can easily  display photos within the widget, providing a customizable touch to their planner interface. It maintains consistency with other media-related widgets, such as the Calendar Widget's photo integration or the Clock Widget's background image options. It utilizes the Lorem Picsum service. the integration of the Lorem Picsum service ensures a seamless user experience, as the widget automatically fetches the selected image and optimizes it for display within the planner app. 

## 5. Location Widget: 
The Location Widget complements the planner app's functionality by offering a convenient way to track and display location-related information. It integrates smoothly with the app's map and geolocation features, allowing users to view their current location within the widget. The design and interaction patterns align with other map-based widgets, The Location Widget is a valuable addition to the planner app that utilizes the geolocation API and Google Map's services to display the user's current location information. Upon rendering, it retrieves the latitude and longitude coordinates using the geolocation API and fetches the corresponding city and country details from the "geocode.xyz" API. The widget dynamically renders the location information, including latitude, longitude, city, and country. It also provides a clickable link to open the current location in Google Maps. The Location Widget's code effectively utilizes React's hooks to handle asynchronous operations and manage state, enhancing the planning experience by providing real-time location data within the app.

Overall, each custom widget has been designed to ensure they seamlessly fit in with the rest of the planner app's widgets, maintaining a consistent visual style, user interface, and purpose and also follows the best coding practices and is easy for other developers to understand.

here's the link to the [site](https://roy-planner-app-extended.web.app/)
