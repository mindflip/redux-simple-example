# Redux simple example

implement simple insurance system using redux

## What I learned

### redux flow

`action creator` -> `action` -> `dispatch` -> `reducer` -> `state`

- action creator defines and returns action
- dispatch actions
- reducer processes the actions
- update state

### action creator

- return an action (object)
- action consists of type and payload
- type is string to be distinguished by reducer
- payload is data

### redcer

- distinguish action type, and process
- return state
- can be combined multiple reducers using `combindeReducers`

### store

- store is state which consists of reducers
- managing state by dispatching actions (=> operate reducer)
