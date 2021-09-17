const constants = {
    API_BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001',
    API_USERS_ENDPOINT: 'users/',
    PAGINATION_DEFAULT_PAGE_SIZE: 10,
    PAGINATION_DEFAULT_ROWS_PER_PAGE: [5, 10, 25, 50]
};

export default constants;
