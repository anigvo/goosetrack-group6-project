import { instance } from "./instance";


export const getAll = async () => {
    const {data} = await instance.get('/reviews');
    return data;
}

export const getReview = async () => {
    const {data} = await instance.get('/reviews/own');
    return data;
};

export const createReview = async (review) => {
    const {data} = await instance.post('/reviews/own', review);
    return data;
};

export const updateReview = async (review) => {
    const {data} = await instance.patch('/reviews/own', review);
    return data;
}

export const deleteReview = async () => {
    await instance.delete('reviews/own');
}