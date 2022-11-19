
const getFilterFromState = state => state.filter;
const getIsLoggedIn = state => state.auth.isLogin;
const getUserName = state => state.auth.user.name;
const getContacts = state => state.contacts.items;
const getLoadingUserStatus = state => state.auth.isLoadingUser;
const getUserEmail = state => state.auth.user.email;

const selectors = {
    getFilterFromState,
    getIsLoggedIn,
    getUserName,
    getContacts,
    getLoadingUserStatus,
    getUserEmail
};

export default selectors
