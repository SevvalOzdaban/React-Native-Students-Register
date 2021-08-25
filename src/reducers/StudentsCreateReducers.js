import { STUDENT_CHANGE, CREATE_REQUEST, CREATE_REQUEST_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    isim: '',
    soyisim: '',
    ogrencinumara: '',
    sube: '',
    loading: false
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STUDENT_CHANGE:
            return{...state, [action.payload.props]: action.payload.value}
        case CREATE_REQUEST:
            return{...state, loading: true}; 
        //giriş başarılı olduğunda textboxları sıfırlamak için INITIAL_STATE'e döndük.
        case CREATE_REQUEST_SUCCESS:
            return INITIAL_STATE; 
        default:
            return state;
    }
};