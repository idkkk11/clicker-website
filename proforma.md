# Computing 2 Submission Proforma

**CID:** 01722608

For each section, write a maximum of 200 words.

## Brief
*State what you set out to acomplish with this web app.*

This app, inspired by Orteil's "Cookie Clicker", is a game that was developed for the Computing 2 assignment. During the release of the assignment, I was playing the Cookie Clicker game due to its addicting nature. This web app has the same concept with different elements. Additionally, this WebApp - a game - also implements a
leaderboard to allow users to compete for the top scorers.

This web app is a game that aspires to be an addicting clicker game. The app allows the user to click the computer image, adding the users money by £1 for every click. The user can then buy items in the shop to boost their money as the items give the user a certain amount of money every second, depending on what item and how many of it they have. As the user's assets grow, they will earn money at a faster rate. The user can compete with other users by sending their score to the leaderboard.

## Coding
*Highlight your approach to coding in this project.*

The javascript source code of this project is mostly consisted of functions. The structure of the code is relatively dense but simple to understand and does not make use of classes or methods. In this program, the declared variables, declared with let, are processed in the fuctions. The global variables are changed within the functions as the history of the variables are not of any use. 

Asynchronous code is used through callbacks in processing the server data when the user sends and receives the scores to and from the server and its database to update the leaderboard. This is done in order to assure that data is being sent back and forth. The source code also makes extensive use of setTimeout and setInterval in order to achieve the needs of the user and server. DOMContentLoaded is also made use of to make sure all elements of the html is loaded, ensuring all the event loaders and the entire program in general works.

## UX/UI
*Outline the key elements of your UX/UI design.*

The user is presented with large buttons and text to allow for easy reading. Texts are also put in white background in most places of the code for maximum contrast when reading. Buttons also change the cursor on hover to familiarise users with the interface of the game. A status bar is also available to allow the users to see a few updates for added assurance.

The UI of this game is loaded when all the HTML content is loaded. This allows all the functions to work as intended without disturbing the users' experience when playing the game. 

The interaction between users arise in the use of the leaderboard in the game. The leaderboard shows the top users in the game. The scores are not sent in real-time but rather when the user chooses to send their score. When the user sends their score, not only does it do that, it also updates the leaderboard to make sure the user knows the newest top players.

## Data
*Explain how you structure and process your data.*

There is a database file which consists of users' scores and names.

When the game is launched, the database loads the top 5 players from the database.
In the program, when the user clicks the "Send Score" Button, the score they have achieved is sent to the server.
During this period in time, the server adds the user's score into the database and re-manipulates the data.

Firstly, the database sorts the data in descending order of Money (the score). The database is then filtered to only take the first 5 records of the database. This data (Name and Money) of top 5 scorers is then sent back to the user in the form of an updated leaderboard for the user to see.

## Debugging
*Describe how you used debugging practices and tools and how they helped you overcome a bug or conceptual issue.*

Problem 1.
TypeError: can't access property "addEventListener"
When executing the code, this error has appeared multiple times.
After reading on it, it is fixed by adding DOMContentLoaded to make sure the HTML items are fully loaded so that the event listener could get access to it.

Problem 2.
Uncaught (in promise) ReferenceError: assignment to undeclared variable item
This problem from line 238 of the UI file, for(var item of data), arose which led to the leaderboard not showing. It was fixed by adding var in front of item of data.

Problem 3.
Uncaught ReferenceError: can't access lexical declaration 'callingFactory' before initialization
This problem appeared when function callingFactory was called before it was initialised. It was fixed by moving the function above the call.

Problem 4. A big problem.
When moving the functions into seperate files, they had to take in parameters and return values. In this process, the numbers became their own variables. What this meant was by calling a "Buy Function", it made its own variable - making the global variable constant. This meant money from the Building and Factory (example) was seperated from each other. 
To fix this was to keep all the functions in a single file to make sure the global variable is the one being taken and updated in every function.

Problem 5 in Unittest.
Error: Property failed after 1 tests
{ seed: 169289130, path: "0:0:0", endOnFailure: true }
Counterexample: [0,0]
Shrunk 2 time(s)
Got error: Property failed by returning false

Was missing the declaration of the arbitrary value.
Added the arbitrary value to fix it.

Unittest. - In Folder
As all the functions require the editting of global variables in the UI file, it cannot be accessed (everything inside init). To resolve this, a new file is created (AllFunctions.js) to allow the unittest to check that file instead. The functions are copied from the main UI file. A few parameters are also changed to accomodate for the lack of global variables in the scheme.

Using this, it confirms that the shop buttons are working in the assumption that the user has enough money to buy the product.

## Best Practice
*Outline your use of software development best practices*

The entire main code of the program is commented and contains headings set as comments to describe the function of the code and that section. Repeated codes are not commented on.

The file is divided into seperate files: html, css, and js. The js is further divided into main and UI.

The accesibility issues that arose are buttons that are not accessible by keyboard. The game, however, does not allow users to use keyboard buttons as a click as it is not the intention of the game.

Furthermore, code in html and css is grouped by/sorted with the position, intention and logic of the program.
