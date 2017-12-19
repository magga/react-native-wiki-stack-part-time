import { combineReducers } from 'redux';

import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

const reducers = combineReducers({
    libraryList: LibraryReducer,
    selectedLibraryId: SelectionReducer
});

export default reducers;
