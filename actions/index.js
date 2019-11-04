
export const loginUser = (details) => {
    return {
        type: 'LOGIN',
        payload: details
    }
}

export const  logOut = () => {
    return {
        type: 'LOGOUT'
    }
}


export const handleRequest = (details) => {
    return {
        type: details.click_type,
        payload: details.request_id
    }
}