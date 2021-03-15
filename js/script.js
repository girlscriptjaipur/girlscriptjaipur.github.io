function showPresent() {
  document.getElementById("hidePresent").style.display = "inline-block";
  document.getElementById("showbtnPresent").style.display = "none";
  document.getElementById("hidebtnPresent").style.display = "inline-block";
}

function hidePresent() {
  document.getElementById("hidePresent").style.display = "none";
  document.getElementById("showbtnPresent").style.display = "inline-block";
  document.getElementById("hidebtnPresent").style.display = "none";
}

function readmore(n) {
  document.getElementById("read" + n).style.display = "inline-block";
  document.getElementById("rode" + n).style.display = "none";
}

function showPast() {
  document.getElementById("hidePast").style.display = "inline-block";
  document.getElementById("pastbtnShow").style.display = "none";
  document.getElementById("pastbtnHide").style.display = "inline-block";
}

function hidePast() {
  document.getElementById("hidePast").style.display = "none";
  document.getElementById("pastbtnShow").style.display = "inline-block";
  document.getElementById("pastbtnHide").style.display = "none";
}
