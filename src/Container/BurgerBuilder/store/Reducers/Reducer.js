//Burger Builder Reducer

import * as actionType from '../Actions/Actions'

const initialState = {
    ingredients : null,
    totalPrice : 2,
    error : false,
    purchaseable : false
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
                totalPrice : 2,
                error : false
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

        case(actionType.FetchingIngredientserror):{
            return {
                ...state,
                error : true
            }
        }

        case(actionType.Purchaseable):{
            return {
                ...state ,
                purchaseable : action.value
            }
        }

        default : 
            return state;
    }
}

export default reducer;