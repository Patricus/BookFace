// constants
const READ_FRIEND_REQUESTS = "request/READ_FRIEND_REQUESTS";

const readRequests = requests => ({
    type: READ_FRIEND_REQUESTS,
    payload: requests,
});

export const getRequests = () => async dispatch => {
    const response = await fetch(`/api/friends/requests/`);
    if (response.ok) {
        const data = await response.json();
        dispatch(readRequests(data));
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
        case READ_FRIEND_REQUESTS:
            const readState = {};
            action.payload.friend_requests.forEach(request => {
                readState[request.id] = request;
            });
            return readState;
        default:
            return state;
    }
}
