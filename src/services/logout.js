
const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.reload();

}
export default handleLogout;

