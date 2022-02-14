const app = document.getElementById("app");

let userData;
const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));
};

const userDisplay = async () => {
  await fetchUser();

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("en-EN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };

  app.innerHTML = userData
    .map(
      (user) =>
        `
        <div class="user-card">

            <div class="user-card-header">
                <img src="${user.picture.large}" />
            </div>       

            <div class="user-card-body">
                <span class="username">Username : ${user.login.username}</span>
                <span class="title">From : ${user.location.country}</span>
            </div>
    
            <div class="user-card-footer">
                <span>Contact : ${user.email}</span>
                <span>Registered from : ${dateParser(
                  user.registered.date
                )}</span>
            </div>
        </div>
        `
    )
    .join(" ");
};

userDisplay();
