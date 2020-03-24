const initialState = {
    ingredients : {
        bacon : 0,
        cheese : 0,
        meat : 0,
        salad : 0,
    },
    totalPrice : 2
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

        case("ADD_INGREDIENTS"):
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

        case("REMOVE_INGREDIENTS"):
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