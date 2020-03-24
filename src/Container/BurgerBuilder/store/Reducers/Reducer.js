import * as actionType from '../Actions/Actions'

const initialState = {
    ingredients : {},
    totalPrice : 2,
}

const ingredientsPrice = {
    salad: 1,
    bacon: 2,
    cheese: 1.5,
    meat: 4.5
  };

const reducer = (state = initialState,action)=>{
    switch(action.type)
    {
        case(actionType.Loadingredient):
        {
            return{
                ...state,
                ingredients : action.ingredients,
                totalPrice : 2
            }
        }
        
        case(actionType.Addingredient):
        {
            return {
                ...state,
                ingredients :{
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1,
                },
                totalPrice : state.totalPrice + ingredientsPrice[action.ingredientName]  
            }
        }

        case(actionType.Removeingredient):
        {
            return {
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] - 1,
                },
                totalPrice : state.totalPrice - ingredientsPrice[action.ingredientName]  
            }
        }


        default : 
            return state;
    }
}

export default reducer;