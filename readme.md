# Welcome to Ingredient Hero!

Ever wonder what to do with your soon-to-be expired perishable food items? Ingredient Hero is your savior that will compile all of your food items in one place and recommend 
recipes that take the food you already have to avoid waste. After shopping you will select the drop-down menu to input your perishable items with recommended expiry dates. Recipes will begin to build based off of the items that will soon expire, rather than later. More items that expire the better the recommended recipe will populate. 





User Stories

As a user, I want to create an account and successfully log in.
As a user, I want to see a dashboard of recipes and pantry items.
As a user, I want to add and remove items from my pantry.
As a user, I want to get notifications of items expiring soon.
As a user, I want to get recipes based on the items in my pantry.
As a user, I want a simple and easy to use page.


Coming Soon

As a user, I want to be able to share my recipes with other users.
As a user, I want to rate the recipes that I use and see my top-rated options.
As a user, I want to see recipes based on my food allergies and preferences.


Stack


Front-End

In order to build a single-page app, we utilized React to separate our components where needed for a cohesive product that loads quickly and efficiently. 

Back-End

User information and pantry information was stored in our SQL database. Additionally, we utilized Spoonacular API to gather queries related to food items in the users pantry and recommend recipes. On the server side, we chose to use Express in order to simplify our code.

Deployment

In deploying Ingredient Hero, we used AWS EC2 using PM2 for running our server and routed our traffic through NGINX.

APIs

For recipes, we utilized Spoonacular's API for a comprehensive list that worked with the user's needs.


Work Flow

This project was managed using git workflow, tracked with Git Graph:


We have one development branch that branches out specific features. When they are ready to be deployed, features are deployed as follows:
1. The branch is rebased to consolidate commit history and ensure only working code is pushed to the dev branch.
2. The branch is pushed.
3. A pull request is made.
4. Another member of the team is to perform a review before merging the branch into developer.
5. At the end of a sprint, the developer branch is merged into production.

In addition to git, we also used Trello to manage pending tasks, bugs and feedback.

Trello Board: https://trello.com/b/swETQG26/ingredient-hero-project



Challenges & Learning

This project was created by a group of Army veterans that were passionate about developing and learning new technologies. This app was an opportunity for us to showcase 
our skills the developed as a team and culminated in this project.

Challenges

• On the Front End, we attempted to use Boot Box in order to build our modal windows. This proved to be a challenge as we strived to edit and modify the content while attempting to give the user a more streamlined experience.
• On the Back End, our initial query string setup and configurations seemed promising, but after further research, we needed to simplify and break down each line in order to save and access information in the database.
• Overall, deployment had an initial struggle in learning the ins and outs of AWS and working with NGINX in the terminal.

Learnings

• Over time, we learned that stricter code reviews within GitHub was an absolute must before adding outside code to the development branch, and then the master branch.
• Communication was a key for the team to reach better understanding of where the app was at and where it was going. Knowing aspects of development in the full stack allowed for a better understanding of how to make the app work as a cohesive piece.
• Tickets on Trello assisted the team in planning and production. Utilizing Trello kept us organized and accountable in creating and developing a production level application.


Contributors

Collin Fairlie, Shawn-Kieth Goforth, Andrew Herrera, Wesley Riley, Arjun Sharma, Herman Williams