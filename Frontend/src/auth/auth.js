function isAuthenticated() {
    return (localStorage.getItem("access_token") && localStorage.getItem("access_token")!=null);
}

export default isAuthenticated;