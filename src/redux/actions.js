export const GET_EMAIL = 'GET_EMAIL';

export const getEmail = (payload)=>{
    return{
        type: GET_EMAIL, 
        payload
    }
}
