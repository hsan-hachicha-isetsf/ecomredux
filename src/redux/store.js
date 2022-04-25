import { configureStore } from '@reduxjs/toolkit'
import articleReducer from '../features/articleSlice'
import categorieReducer from "../features/categorieSlice"
import scategorieReducer from "../features/scategorieSlice"
import userReducer from "../features/userSlice"
import authReducer from "../features/AuthSlice"
 const store = configureStore({
  reducer: {
    articles:articleReducer,
    categories:categorieReducer,
    scategories:scategorieReducer,
    users:userReducer,
    auth:authReducer,
  
  }
})
export default store