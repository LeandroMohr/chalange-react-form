import { submitForm } from './actionTypes';

export const submitForm = payload => ({
    type: submitForm,
    user: payload.user,
})