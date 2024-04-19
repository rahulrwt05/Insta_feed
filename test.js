// Get elements
let fors = document.querySelector("#fors");
let button = document.querySelector("button");
let flag = 0;

// Add event listener for button click
button.addEventListener("click", () => {
  if (flag == 0) {
    // If not friends, change button text and status
    button.innerHTML = "Remove Friend";
    button.style.backgroundColor = "red";
    fors.innerHTML = "Friends";
    fors.style.color = "green";
    flag = 1;
  } else {
    // If friends, revert changes
    button.innerHTML = "Add Friend";
    button.style.backgroundColor = "green";
    fors.innerHTML = "Stranger";
    fors.style.color = "red";
    flag = 0;
  }
});

// Get elements for like functionality
let clicklike = document.querySelector("#clicklike");
let heart = document.querySelector("#liked");

// Add event listener for double click to like
clicklike.addEventListener("dblclick", function () {
  // Show heart icon and animate
  heart.style.opacity = 0.8;
  heart.style.transform = `scale(1)`;
  // Hide heart icon after animation
  setTimeout(() => {
    heart.style.opacity = 0;
  }, 1000);
  setTimeout(() => {
    heart.style.transform = `scale(0)`;
  }, 2000);
});

// Array of DP and story objects
const dpstory = [
  {
    dp: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQlj3rCfLHry58AtJ8ZyBEAFPtChMddDSUSjt7C7nV3Nhsni9RIx5b0-n7LxfgerrPS6b-P-u3BOM3abuY",
    story: "https://pbs.twimg.com/media/C9IWt9bXcAAMHWK?format=jpg&name=medium",
  },
  {
    dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKgpLZo0JjvGMwTy1pLjDJ-D5_XTexJhjtg&s",
    story:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_IKR-hDO8MbSSkqdSBHiaHMYFw9oFPw8vw&s",
  },
  {
    dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC61BTYC9Ifu3AM_w-z0NxwZx2v87V5BVuEw&s",
    story:
      "https://i.guim.co.uk/img/media/e6749ab0a87858d43fa267a71e90a5c113f14338/0_250_4099_2459/master/4099.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ac931c8437f07941d49872d6dafcfbb3",
  },
  {
    dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH9r3Rpu316MUo_7giCg3Zgt4NTamVw_IMKg&s",
    story:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxIC9c0TC2QUPga1VnUcF5xfPiqnN3k2l2A&s",
  },
  {
    dp: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQlj3rCfLHry58AtJ8ZyBEAFPtChMddDSUSjt7C7nV3Nhsni9RIx5b0-n7LxfgerrPS6b-P-u3BOM3abuY",
    story: "https://pbs.twimg.com/media/C9IWt9bXcAAMHWK?format=jpg&name=medium",
  },
  {
    dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKgpLZo0JjvGMwTy1pLjDJ-D5_XTexJhjtg&s",
    story:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_IKR-hDO8MbSSkqdSBHiaHMYFw9oFPw8vw&s",
  },
  {
    dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC61BTYC9Ifu3AM_w-z0NxwZx2v87V5BVuEw&s",
    story:
      "https://i.guim.co.uk/img/media/e6749ab0a87858d43fa267a71e90a5c113f14338/0_250_4099_2459/master/4099.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ac931c8437f07941d49872d6dafcfbb3",
  },
  {
    dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH9r3Rpu316MUo_7giCg3Zgt4NTamVw_IMKg&s",
    story:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxIC9c0TC2QUPga1VnUcF5xfPiqnN3k2l2A&s",
  },
];

// Populate navigation with stories
var nav = "";
dpstory.forEach(function (e, index, arr) {
  nav += `  <div  class="story"><img src="${e.dp}"id="${index}" /></div>`;
});
var navstory = document.querySelector(".nav");
navstory.innerHTML = nav;

// Add event listener for story click
navstory.addEventListener("click", function (e) {
  // Show fullscreen story
  document.querySelector(".fullscreen").style.display = "block";
  document.querySelector(".fullscreen").style.backgroundImage = `url(${
    dpstory[e.target.id].story
  })`;
  // Hide fullscreen story after 2 seconds
  setTimeout(function () {
    document.querySelector(".fullscreen").style.display = "none";
  }, 2000);
});
