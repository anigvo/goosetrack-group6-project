import { instance, setToken } from "./instance";

export const refresh = async (token) => {
    setToken(token);
    const {data} = await instance.get('/users/current');
    return data;
};

export const edit = async user => {
    const {data} = await instance.patch('/users/edit', user);
    return data;
};
