import axios from '../../../../axios-orders';

export const Addingredient = "ADD_INGREDIENTS";
export const Removeingredient = "REMOVE_INGREDIENTS";
export const Loadingredient =  "LOAD_INGREDIENTS";
export const FetchingIngredientserror = "FETCHING_INGREDIENTS_ERROR"
export const Purchaseable = "PURCHASEABLE";

export const addIngredient = (ingredientName)=>{
    return{
        type : Addingredient,
        ingredientName : ingredientName
    }
}

export const removeIngredient = (ingredientName)=>{
    return {
        type : Removeingredient,
        ingredientName : ingredientName
    }
}

const saveIngredient =(ingredients)=> {
    return {
        type : Loadingredient,
        ingredients : ingredients
    }
}

const fetchIngredientsError = ()=>{
    return{
        type : FetchingIngredientserror
    }
}

export const loadIngredient = ()=>{
    return dispatch=>{
        axios
        .get("/ingredients.json")
        .then(response => {
            dispatch(saveIngredient(response.data))
      })
      .catch(error => {
          dispatch(fetchIngredientsError())
        });
    }
}

export const purchaseableHandler = (value)=>{
    return{
        type : Purchaseable,
        value : value
    }
}