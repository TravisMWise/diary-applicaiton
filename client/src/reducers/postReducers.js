const reducer = (posts = [], action) => {
    switch (action.type) {
        case 'DELETE':
            // Return all posts except the one with the id that we just deleted
            // action.payload is the id of the post we just deleted
            return posts.filter((post) => post._id !== action.payload);
        case 'UPDATE':
        case 'LIKE': // LIKE and UPDATE have the same functionality
            /** If the id of the post matches the id of the post we changed
             * then return the post we changed
             * else just return the orignal post
             */
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}

export default reducer;