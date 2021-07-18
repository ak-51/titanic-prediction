# Titanic Survival Prediction

![Example Image](https://github.com/ak-51/titanic-prediction/blob/main/backend/images/img1.PNG)

### Overview

This web application uses Machine Learning to predict the chances of survival of a person aboard the Titanic. It takes the characteristics of a person as input from the user. These characteristics include Gender, Age, Cost of Ticket, Number of siblings/children/parents etc. A model is trained with a training dataset which then develops a prediction based on the data given by the user. It uses Linear Regression to make this prediction. When ran with an evaluation dataset, it had an accuracy of 75%. People can use this proejct to play out scenarios and try to predict the chances of survival of a person that might have been on the Titanic.


### How the Frontend and Backend Interact

React sends the user input to the Node.js backend, which sends this data to the Python script. This Python script uses Tensorflow to train and evaluate data. Once the prediction has been made, it is sent back to the Node.js backend, which is then sent to the React frontend where it is diplayed to the user.