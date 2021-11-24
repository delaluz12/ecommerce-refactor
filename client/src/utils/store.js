// Creates a Redux store that holds the state of the app. 
import {createStore} from 'redux';

import reducers from './reducers';

const store = createStore(reducers)

// export default createStore(reducers)

export default store; 