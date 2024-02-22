import { createAction, createReducer, on } from "@ngrx/store"

export interface IAppState {
  favoriteList: any[]
}

export const appInitialState: IAppState = {
  favoriteList: [
    {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
          "name": "unknown",
          "url": ""
      },
      "location": {
          "name": "Citadel of Ricks",
          "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      "episode": [
          "https://rickandmortyapi.com/api/episode/1",
      ],
      "url": "https://rickandmortyapi.com/api/character/2",
      "created": "2017-11-04T18:50:21.651Z"
    },
  ]
}

export const addList = createAction('addList')

export const removeList = createAction('removeList')

export const appReducer = createReducer(
  appInitialState,
  on(addList, (state: any) => {
    return state
  }),
  on(removeList, (state: any) => {
    return state
  })
)