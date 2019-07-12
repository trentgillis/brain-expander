# Notes!
* Redux cycle
  * Action Creator -> Action -> dispatch -> Reducers -> State
    ^ Its mapping to the insurance company analogy is as follows:
    Person dropping off the form === Action Creator
    Action === the form
    dispatch === the form receiver
    Reducers === Departments
    State === Compiled department data
  * An action creator is a function that is going to create/return a plain JavaScript object
    * Purpose of the action creator is to create the action
  * An action is the plain JavaScript object returned by the Action Creator. It has a type property and a payload property
    * The purpose of an action is to describe some change to the data inside of our application
  * The dispatch function takes an action, makes copies of the action and passes it off to the reducers
  * Reducers are function that are responsible for taking in an action and a some existing amount of data. It processes that action and makes some change to the data and returns the changed data to a central data repository
  * In redux the State property is a central repository of all of the data returned by the reducers