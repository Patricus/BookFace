// constants
const READ_USERS = "user/READ_USERS";

const readUsers = users => ({
    type: READ_USERS,
    payload: users,
});

export const getUsers = () => async dispatch => {
    const response = await fetch(`/api/users/`);
    if (response.ok) {
        const data = await response.json();
        dispatch(readUsers(data));
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
};

const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case READ_USERS:
            const readState = { ...state };
            action.payload.users.forEach(user => {
                readState[user.id] = user;
            });
            return readState;
        default:
            return state;
    }
}
