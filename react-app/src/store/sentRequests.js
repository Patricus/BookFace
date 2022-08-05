// constants
const READ_SENT_REQUESTS = "request/READ_SENT_REQUESTS";

const readRequests = requests => ({
    type: READ_SENT_REQUESTS,
    payload: requests,
});

export const getSentRequests = () => async dispatch => {
    const response = await fetch(`/api/friends/requests/sent/`);
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
        case READ_SENT_REQUESTS:
            const readState = {};
            action.payload.friend_requests.forEach(request => {
                readState[request.id] = request;
            });
            return readState;
        default:
            return state;
    }
}
