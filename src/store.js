import {createStore} from 'redux';
import { incDec } from './reducer/incDec';

const store=createStore(incDec);
export default store;