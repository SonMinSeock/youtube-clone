const settingIcon = document.querySelector(".video__info__setting__icon");
const settingInfo = document.querySelector(".video__info__setting");
const overlay = document.querySelector(".overlay");

const onSettingClick = (event) => {
  if (settingInfo.classList[1] === "hidden") {
    overlay.classList.remove("hidden");
    settingInfo.classList.remove("hidden");
  } else {
    settingInfo.classList.add("hidden");
    overlay.classList.add("hidden");
  }
  console.log(event);
};

settingIcon.addEventListener("click", onSettingClick);
overlay.addEventListener("click", onSettingClick);
