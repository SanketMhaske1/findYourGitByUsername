const wrapper = document.querySelector(".wrapper");
const darkLightButton = document.querySelector("[darkLight-button]");
const darkLightText = document.querySelector("[darkLight-text]");
const darkLightImg = document.querySelector("[darkLight-img]");
const serachUser = document.querySelector("[serachUser]");
const serachUsername = document.querySelector("[serachUsername]");

const currentUserImage = document.querySelector("[currentUserImage]");
const currentUserName = document.querySelector("[currentUserName]");
const currentUserJoinedDate = document.querySelector("[currentUserJoinedDate]");
const currentLoginName = document.querySelector("[currentLoginName]");
const currentUserBio = document.querySelector("[currentUserBio]");
const currentUserRepos = document.querySelector("[currentUserRepos]");
const currentUserFollwers = document.querySelector("[currentUserFollwers]");
const currentUserFollowing = document.querySelector("[currentUserFollowing]");
const currentUserLoaction = document.querySelector("[currentUserLoaction]");
const currentUserLink = document.querySelector("[currentUserLink]");
const currentUserTwitterLink = document.querySelector(
  "[currentUserTwitterLink]"
);

const currentUserCompany = document.querySelector("[currentUserCompany]");

darkLightButton.addEventListener("click", (e) => {
  console.log(darkLightButton);
  if (darkLightText.innerText == "Dark") {
    darkLightText.innerText = "Light";
    darkLightImg.src = "assets/sun.svg";
    wrapper.classList.add("active");
  } else {
    darkLightText.innerText = "Dark";
    darkLightImg.src = "assets/night-mode.png";
    wrapper.classList.remove("active");
  }
});

serachUser.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    if (serachUsername.value) {
      let currentUserName = serachUsername.value;
      findUser(currentUserName);
      serachUsername.value = "";
    }
  } catch (error) {
    console.log("Enter the Name ", error);
  }
});

async function findUser(currentUserName) {
  let url = await fetch(`https://api.github.com/users/${currentUserName}`);
  let userData = await url.json();
  findUserInfo(userData);
  console.log(userData);
}

function findUserInfo(userData) {
  currentUserImage.src = userData.avatar_url;
  currentUserName.innerText = userData.name;
  currentUserJoinedDate.innerText = userData.created_at;
  currentLoginName.innerText = userData.login;
  currentUserBio.innerText = userData.bio;
  currentUserRepos.innerText = userData.public_repos;
  currentUserFollwers.innerText = userData.followers;
  currentUserFollowing.innerText = userData.following;
  currentUserLoaction.innerText =
    userData.location !== null ? userData.location : "Not Avilable";
  currentUserLink.innerText =
    userData.email !== null ? userData.email : "Not Avilable";
  currentUserTwitterLink.innerText =
    userData.twitter_username !== null
      ? userData.twitter_username
      : "Not Avilable";
  currentUserCompany.innerText =
    userData.company !== null ? userData.company : "Not Avilable";
}
