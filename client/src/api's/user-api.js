import ArtBackend from "./Backend";

export const loginUser = async (email, password) =>{
    const {data} = await ArtBackend.post('/users/login',
        {
            email,
            password,
        }
    );
    return data;
}

export const signupUser = async (userData) =>{
    const {data} = await ArtBackend.post('/users/signup', userData);
    return data;
}

export const logoutUser = async () => {
    const response = await ArtBackend.get('/users/logout');
    return response;
}
 
