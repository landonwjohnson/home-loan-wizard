import store from './store';
import { createSttore } from 'redux';
import reducer from './ducks/reducer';


export default createSttore( reducer );