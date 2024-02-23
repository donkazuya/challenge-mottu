/* eslint-disable @typescript-eslint/no-explicit-any */
import { MetaReducer, createAction, createReducer, on } from "@ngrx/store"
import { Character } from "../models/interfaces/CharactersInterface"
import { actionStore, addCharacter } from "../models/interfaces/StoreInterface"

export interface IAppState {
  favoriteList: Character[]
}

const storage = JSON.parse(sessionStorage.getItem('favoriteList') as string)

export const appInitialState = storage ? storage : {
  favoriteList: [],
}

export const addList = createAction('addList', (character: Character) => ({character}))

export const removeList = createAction('removeList', (characterID) => ({characterID}))

export const appReducer = createReducer(
  appInitialState,
  on(addList, (state: IAppState, character: addCharacter) => {
    
    return {...state, favoriteList: [...state.favoriteList, character.character]}
      
  }),
  on(removeList, (state: IAppState, { characterID }) => {
    const removeCharacter = state.favoriteList.filter((item: Character) => item.id != characterID.id)
    return {...state, favoriteList: removeCharacter}
  })
)

export function persistStateMetaReducer(reducer: any) {
  
  return (state: IAppState, action: actionStore) => {
    
    const nextState = reducer(state, action);

    sessionStorage.setItem('favoriteList', JSON.stringify(nextState.app));

    return nextState;
  };
}
export const metaReducers: MetaReducer<any>[] = [persistStateMetaReducer];