const menuButton = document
  .querySelector(".header-links-small-container")
  .querySelector("button");
const menuModal = document.querySelector(".header-menu-modal");
const wrapper = document.querySelector(".wrapper");
const closeButton = document.querySelector(".close-button");
const modalOptions = document.querySelectorAll(".modal-option");
const radioButtons = document.querySelectorAll(".radio-button");
const backing = document.querySelector(".backing");
const modalWrapper = document.querySelector(".modal-wrapper");
const modalCloseButton = document.querySelector(".close-button");
const promoRewardButton = document.querySelectorAll(".promo-reward-button");
const moneyParagraph = document.querySelector(".money-paragraph");
const backersParagraph = document.querySelector(".backers-paragraph");
const daysParagraph = document.querySelector(".days-paragraph");
const bambooNumber = document.querySelector(".bamboo-number");
const blackEditionNumber = document.querySelector(".black-edition-number");
const mahoganyNumber = document.querySelector(".mahogany-number");
const bambooLeft = document.querySelector(".bamboo-left");
const blackEditionLeft = document.querySelector(".black-edition-left");
const mahoganyLeft = document.querySelector(".mahogany-left");
const successRate = document.querySelector(".success-rate");
const bambooButton = document.querySelector(".bamboo-button");
const blackEditionButton = document.querySelector(".black-edition-button");
const regularButton = document.querySelector(".regular-button");
const mahoganyButton = document.querySelector(".mahogany-button");
const regularInput = document.querySelector(".regular-input");
const bambooInput = document.querySelector(".bamboo-input");
const blackEditionInput = document.querySelector(".black-edition-input");
const mahoganyInput = document.querySelector(".mahogany-input");
const successModalWrapper = document.querySelector(".success-modal-wrapper");
const successButton = document.querySelector(".success-button");
const bookmark = document.querySelector(".bookmark");
const bookmarkSmall = document.querySelector(".bookmark-small");
const bambooLeftSmall = document.querySelector(".bamboo-left-small");
const blackEditionLeftSmall = document.querySelector(
  ".black-edition-left-small"
);
const mahoganyLeftSmall = document.querySelector(".mahogany-left-small");

const updateValues = () => {
  localStorage.setItem("bambooLeft",150)
  localStorage.setItem("blackLeft",150)
  localStorage.setItem("mahoganyLeft",150)
  localStorage.setItem("backers",0)
  localStorage.setItem("ammount",0)
  if (parseInt(localStorage.getItem("bambooLeft")) === 0) {
    bambooLeft.parentElement.parentElement.parentElement.classList.add(
      "disabled"
    );
    bambooNumber.parentElement.parentElement.parentElement.parentElement.classList.add(
      "disabled"
    );
    bambooNumber.parentElement.parentElement.parentElement
      .querySelector(".promo-reward-button")
      .classList.add("gray-button");
    bambooNumber.parentElement.parentElement.parentElement.querySelector(
      ".promo-reward-button"
    ).innerHTML = "Out of Stock";
  } else {
    bambooLeft.parentElement.parentElement.parentElement.classList.remove(
      "disabled"
    );
    bambooNumber.parentElement.parentElement.parentElement.parentElement.classList.remove(
      "disabled"
    );
    bambooNumber.parentElement.parentElement.parentElement
      .querySelector(".promo-reward-button")
      .classList.remove("gray-button");
    bambooNumber.parentElement.parentElement.parentElement.querySelector(
      ".promo-reward-button"
    ).innerHTML = "Select Reward";
  }
  if (parseInt(localStorage.getItem("blackLeft")) === 0) {
    blackEditionLeft.parentElement.parentElement.parentElement.classList.add(
      "disabled"
    );
    blackEditionNumber.parentElement.parentElement.parentElement.parentElement.classList.add(
      "disabled"
    );
    blackEditionNumber.parentElement.parentElement.parentElement
      .querySelector(".promo-reward-button")
      .classList.add("gray-button");
    blackEditionNumber.parentElement.parentElement.parentElement.querySelector(
      ".promo-reward-button"
    ).innerHTML = "Out of Stock";
  } else {
    blackEditionLeft.parentElement.parentElement.parentElement.classList.remove(
      "disabled"
    );
    blackEditionNumber.parentElement.parentElement.parentElement.parentElement.classList.remove(
      "disabled"
    );
    blackEditionNumber.parentElement.parentElement.parentElement
      .querySelector(".promo-reward-button")
      .classList.remove("gray-button");
    blackEditionNumber.parentElement.parentElement.parentElement.querySelector(
      ".promo-reward-button"
    ).innerHTML = "Select Reward";
  }
  if (parseInt(localStorage.getItem("mahoganyLeft")) === 0) {
    mahoganyLeft.parentElement.parentElement.parentElement.classList.add(
      "disabled"
    );
    mahoganyNumber.parentElement.parentElement.parentElement.parentElement.classList.add(
      "disabled"
    );
    mahoganyNumber.parentElement.parentElement.parentElement
      .querySelector(".promo-reward-button")
      .classList.add("gray-button");
    mahoganyNumber.parentElement.parentElement.parentElement.querySelector(
      ".promo-reward-button"
    ).innerHTML = "Out of Stock";
  } else {
    mahoganyLeft.parentElement.parentElement.parentElement.classList.remove(
      "disabled"
    );
    mahoganyNumber.parentElement.parentElement.parentElement.parentElement.classList.remove(
      "disabled"
    );
    mahoganyNumber.parentElement.parentElement.parentElement
      .querySelector(".promo-reward-button")
      .classList.remove("gray-button");
    mahoganyNumber.parentElement.parentElement.parentElement.querySelector(
      ".promo-reward-button"
    ).innerHTML = "Select Reward";
  }
  let singleDay = 24 * 60 * 60 * 1000;
  let currentDate = new Date();
  let targetDate = new Date(2022, 1, 1);
  localStorage.setItem(
    "days",
    Math.round(Math.abs((currentDate - targetDate) / singleDay))
  );
  moneyParagraph.innerHTML = "$" + localStorage.getItem("ammount");
  backersParagraph.innerHTML = localStorage.getItem("backers");
  daysParagraph.innerHTML = localStorage.getItem("days");
  bambooNumber.innerHTML = localStorage.getItem("bambooLeft");
  blackEditionNumber.innerHTML = localStorage.getItem("blackLeft");
  mahoganyNumber.innerHTML = localStorage.getItem("mahoganyLeft");
  bambooLeft.innerHTML =
    localStorage.getItem("bambooLeft") + `<span> left</span>`;
  bambooLeftSmall.innerHTML =
    localStorage.getItem("bambooLeft") + `<span> left</span>`;
  blackEditionLeft.innerHTML =
    localStorage.getItem("blackLeft") + `<span> left</span>`;
  blackEditionLeftSmall.innerHTML =
    localStorage.getItem("blackLeft") + `<span> left</span>`;
  mahoganyLeft.innerHTML =
    localStorage.getItem("mahoganyLeft") + `<span> left</span>`;
  mahoganyLeftSmall.innerHTML =
    localStorage.getItem("mahoganyLeft") + `<span> left</span>`;
  if (parseInt(localStorage.getItem("ammount")) < 100000) {
    successRate.style.width =
      (parseInt(localStorage.getItem("ammount")) / 100000) * 100 + `%`;
  }
};

const donate = (type) => {
  if (type === "basic") {
    if (regularInput.value < 1) {
      regularInput.value = 1;
    }
    let ammountOne =
      parseInt(localStorage.getItem("ammount")) + parseInt(regularInput.value);
    localStorage.setItem("ammount", ammountOne);
  } else if (type === "bamboo") {
    if (bambooInput.value < 25) {
      bambooInput.value = 25;
    }
    let ammountOne =
      parseInt(localStorage.getItem("ammount")) + parseInt(bambooInput.value);
    let minusBamboo = parseInt(localStorage.getItem("bambooLeft")) - 1;
    localStorage.setItem("ammount", ammountOne);
    localStorage.setItem("bambooLeft", minusBamboo);
  } else if (type === "black") {
    if (blackEditionInput.value < 25) {
      blackEditionInput.value = 25;
    }
    let ammountOne =
      parseInt(localStorage.getItem("ammount")) +
      parseInt(blackEditionInput.value);
    let minusBlack = parseInt(localStorage.getItem("blackLeft")) - 1;
    localStorage.setItem("ammount", ammountOne);
    localStorage.setItem("blackLeft", minusBlack);
  } else {
    if (mahoganyInput.value < 25) {
      mahoganyInput.value = 25;
    }
    let ammountOne =
      parseInt(localStorage.getItem("ammount")) + parseInt(mahoganyInput.value);
    let minusMahogany = parseInt(localStorage.getItem("mahoganyLeft")) - 1;
    localStorage.setItem("ammount", ammountOne);
    localStorage.setItem("mahoganyLeft", minusMahogany);
  }
  let backersOne = parseInt(localStorage.getItem("backers")) + 1;
  localStorage.setItem("backers", backersOne);
  modalWrapper.classList.remove("visible-modal-wrapper");
  successModalWrapper.classList.add("visible-success-modal-wrapper");
  document.body.scrollTop = document.documentElement.scrollTop = 0;
};

window.addEventListener("load", () => {
  if (localStorage.getItem("bookmarkChecked") === "true") {
    bookmarkSmall.classList.remove("checked-bookmark");
    bookmark.classList.remove("checked-bookmark");
    bookmark.innerHTML = "Bookmark";
    localStorage.setItem("bookmarkChecked", "true");
  } else {
    bookmarkSmall.classList.add("checked-bookmark");
    bookmark.classList.add("checked-bookmark");
    bookmark.innerHTML = "Bookmarked";
    localStorage.setItem("bookmarkChecked", "false");
  }
  updateValues();
});

const modalOptionChange = (radioButtonValue) => {
  modalOptions.forEach((option) => {
    if (option.querySelector(".radio-button").value === radioButtonValue) {
      option.classList.add("teal-border");
      option
        .querySelector(".modal-donate")
        .classList.add("visible-modal-donate");
      option.querySelector(".radio-button").checked = true;
      option
        .querySelector(".modal-padding-one")
        .classList.add("visible-modal-donate-padding-one");
    } else {
      option.classList.remove("teal-border");
      option
        .querySelector(".modal-donate")
        .classList.remove("visible-modal-donate");
      option.querySelector(".radio-button").checked = false;
      option
        .querySelector(".modal-padding-one")
        .classList.remove("visible-modal-donate-padding-one");
    }
  });
};

backing.addEventListener("click", () => {
  modalWrapper.classList.add("visible-modal-wrapper");
  document.body.scrollTop = document.documentElement.scrollTop = 0;
});

promoRewardButton.forEach((button) =>
  button.addEventListener("click", () => {
    modalWrapper.classList.add("visible-modal-wrapper");
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })
);

modalCloseButton.addEventListener("click", () => {
  modalWrapper.classList.remove("visible-modal-wrapper");
  modalOptions.forEach((option) => {
    option.classList.remove("teal-border");
    option
      .querySelector(".modal-donate")
      .classList.remove("visible-modal-donate");
    option.querySelector(".radio-button").checked = false;
    option
      .querySelector(".modal-padding-one")
      .classList.remove("visible-modal-donate-padding-one");
  });
});

menuButton.addEventListener("click", () => {
  menuButton.querySelector("img").src = "./assets/icon-close-menu.svg";
  menuModal.classList.toggle("header-menu-modal-visible");
  //menuModal.classList.toggle("header-menu-")document.querySelector("body").classList.toggle("wrapper-dark-linear-background")
  if (!menuModal.classList.contains("header-menu-modal-visible")) {
    menuButton.querySelector("img").src = "./assets/icon-hamburger.svg";
  }
});

modalOptions.forEach((option) =>
  option.addEventListener("click", () => {
    modalOptionChange(option.querySelector(".radio-button").value);
    option.classList.add("teal-border");
  })
);

regularButton.querySelector("button").addEventListener("click", () => {
  donate("basic");
});

bambooButton.querySelector("button").addEventListener("click", () => {
  donate("bamboo");
});

blackEditionButton.querySelector("button").addEventListener("click", () => {
  donate("black");
});

mahoganyButton.querySelector("button").addEventListener("click", () => {
  donate("mahogany");
});

successButton.addEventListener("click", () => {
  successModalWrapper.classList.remove("visible-success-modal-wrapper");
  location.reload();
});

bookmark.addEventListener("click", () => {
  if (localStorage.getItem("bookmarkChecked") === "true") {
    bookmarkSmall.classList.add("checked-bookmark");
    bookmark.classList.add("checked-bookmark");
    bookmark.innerHTML = "Bookmarked";
    localStorage.setItem("bookmarkChecked", "false");
  } else {
    bookmarkSmall.classList.remove("checked-bookmark");
    bookmark.classList.remove("checked-bookmark");
    bookmark.innerHTML = "Bookmark";
    localStorage.setItem("bookmarkChecked", "true");
  }
});

bookmarkSmall.addEventListener("click", () => {
  if (localStorage.getItem("bookmarkChecked") === "true") {
    bookmarkSmall.classList.add("checked-bookmark");
    bookmark.classList.add("checked-bookmark");
    bookmark.innerHTML = "Bookmarked";
    localStorage.setItem("bookmarkChecked", "false");
  } else {
    bookmarkSmall.classList.remove("checked-bookmark");
    bookmark.classList.remove("checked-bookmark");
    bookmark.innerHTML = "Bookmark";
    localStorage.setItem("bookmarkChecked", "true");
  }
});
