import configureStore from './ConfigureStore';

import initialStore from './InitialStore';

const store = configureStore(initialStore);

export default store;