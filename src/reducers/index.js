
import { combineReducers } from "redux";
import kimlikdogrulamaReducers from "./KimlikdogrulamaReducers";
import StudentsListReducers from "./StudentsCreateReducers"; 
import StudentsDataReducers from "./StudentsDataReducers"; 
import StudentsUpdateReducers from "./StudentsUpdateReducers"

export default combineReducers({
    kimlikdogrulamaResponse: kimlikdogrulamaReducers,
    studentListResponse: StudentsListReducers,
    studentDataResponse: StudentsDataReducers,
    studentUpdateResponse: StudentsUpdateReducers,
});