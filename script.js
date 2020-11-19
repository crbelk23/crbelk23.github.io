var header = document.getElementById('header');
window.onscroll = function() {
  headscroll();
};
function headscroll() {
  if (window.pageYOffset!= 0) {
    header.classList.add("sticky");
    if (window.pageYOffset < header.offsetHeight - document.getElementsByTagName("nav")[0].offsetHeight) {
      header.style.top = (-1*window.pageYOffset).toString()+"px";
    } else {
      header.style.top = (document.getElementsByTagName("nav")[0].offsetHeight - header.offsetHeight).toString()+"px";
    }
    document.getElementById("pagetitle").style.marginTop = header.offsetHeight.toString()+"px";
  } else if (window.pageYOffset == 0) {
    header.classList.remove("sticky");
    document.getElementById("pagetitle").style.marginTop = "0px";
  }
}
