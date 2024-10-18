const setUser = document.getElementById('save.btn');
const displayName = document.getElementById('display-name');
const clearUser = document.getElementById('clear.btn');
const userName = document.getElementById('username');


setUser.addEventListener("click", setItem);

function setItem() {
    const user = document.getElementById('username').value
    localStorage.setItem(userName, user);
    window.location.reload();
};

function displayUser(){
    const userFromStorage = localStorage.getItem(userName)
    if (userFromStorage){
        displayName.textContent = userFromStorage
        
    }
};

displayUser();

clearUser.addEventListener('click', clearItem)

function clearItem() {
    localStorage.removeItem(userName);
    window.location.reload();
}
