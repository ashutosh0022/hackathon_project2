import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Reducers/userSlice'
import hosteventreducer from './Reducers/eventSlice'
// import { hostevent } from './Actions/eventAction'

const store = configureStore({
  reducer: {
    user: userReducer,
    event: hosteventreducer,
  }
})
export default store