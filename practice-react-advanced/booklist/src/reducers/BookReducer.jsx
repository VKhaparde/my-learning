import uuid from '../../node_modules/uuid/dist/v1';

export const BookReducer = (state,action)=>{
  console.log('state in bookReducer',state)
  switch(action.type){
    case 'ADD_BOOK' :{
      return [...state,{
        title : action.book.title,
        author : action.book.author,
        id : uuid()
      }]
    }
    case 'REMOVE_BOOK' :{
      return state.filter(book => book.id !== action.id)
    }
    default : {
      return state;
    }
  }
}
