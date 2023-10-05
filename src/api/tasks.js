import { instance } from "./instance";


export const getTasks = async () => {
    const {data} = await instance.get('/tasks');
    return data;
}

export const createTask = async task => {
    const {data} = await instance.post('/tasks', task);
    return data;
};

export const updateTask = async (task, id) => {
    const {data} = await instance.patch(`/tasks/${id}`, task);
    return data;
}

export const deleteTask = async id => {
    await instance.delete(`/tasks/${id}`);
}