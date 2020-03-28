import axios from '../../../../axios-orders'

export const Loadorders = "LOAD_ORDERS";

const saveOrders = (orders,loadingValue)=>{
    return {
        type : Loadorders,
        orders : orders,
        loadingValue : loadingValue
    }
}

export const loadOrders = (token,userId)=>{
    return dispatch =>{
        let queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        console.log(queryParams);
        
        axios.get("/orders.json" + queryParams)
        .then(res=>{
            let orders = []
            for(let ingredientname in res.data)
            {
                orders.push({
                    ...res.data[ingredientname],
                    id : ingredientname
                })
            }
            dispatch(saveOrders(orders,false));
        })
        .catch(err=>{
            console.log(err)
        }
        )
    }

}

