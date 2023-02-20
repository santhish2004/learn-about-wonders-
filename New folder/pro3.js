function showMoreInfo() {
    var moreInfo = document.getElementById("moreInfo");
    if (moreInfo.style.display === "none") {
      moreInfo.style.display = "block";
    } else {
      moreInfo.style.display = "none";}
  image.addEventListener("mouseover", function() {
    image.classList.add("flipped");
  })
  image.addEventListener("mouseout", function() {
    image.classList.remove("flipped");
  })
}