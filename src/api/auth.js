import { deleteToken, instance, setToken } from "./instance";

export const register = async user => {
    const {data} = await instance.post('/auth/register', user);
    setToken(data.token);
    return data;
};

export const logIn = async user => {
    const {data} = await instance.post('/auth/login', user);
    setToken(data.token);
    return data;
};

export const logOut = async () => {
    await instance.post('/auth/logout');
    deleteToken();
};
