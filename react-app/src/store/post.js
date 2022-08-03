// constants
const CREATE_POST = "post/CREATE_POST";
const READ_POST = "post/READ_POST";
const UPDATE_POST = "post/UPDATE_POST";
const DELETE_POST = "post/DELETE_POST";

const createPost = post => ({
    type: CREATE_POST,
    payload: post,
});

const readPosts = () => ({
    type: READ_POST,
});

const updatePost = post => ({
    type: UPDATE_POST,
    payload: post,
});

const deletePost = id => ({
    type: DELETE_POST,
    payload: id,
});

export const makePost = (text, image_link) => async dispatch => {
    const response = await fetch("/api/posts/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, image_link }),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(createPost(data));
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

export const getPosts = () => async dispatch => {
    const response = await fetch("/api/posts/");
    if (response.ok) {
        const data = await response.json();
        dispatch(readPosts(data));
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

export const editPost = (postId, user_id, title, text, image_link) => async dispatch => {
    const response = await fetch(`/api/posts/${postId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id, title, text, image_link }),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(updatePost(data));
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

export const removePost = postId => async dispatch => {
    const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postId),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(deletePost(data));
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
        case CREATE_POST:
            const post = ([action.payload.id] = action.payload);
            return { ...state, post };
        case READ_POST:
            const readState = {};
            action.payload.forEach(post => {
                readState[action.payload.id] = action.payload;
            });
            return readState;
        case UPDATE_POST:
            const updateState = { ...state };
            updateState[action.payload.id] = action.payload;
            return updateState;
        case DELETE_POST:
            const deleteState = { ...state };
            delete deleteState[action.payload];
            return deleteState;
        default:
            return state;
    }
}
