import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StoreSchema';

export function createReduxStore(initialState?:StateSchema) {
    const rootReducer : ReducersMapObject<StateSchema> = {
        user: userReducer,
        counter: counterReducer,

    };
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
