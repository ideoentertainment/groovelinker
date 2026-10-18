// Store badges. Both are always offered; the one for the visitor's own phone
// goes first. They stay hidden unless this is clearly a browser — never inside
// an app's web view (Android marks those "; wv)", and an iOS web view has no
// "Safari/" in its user agent).
(function () {
  var ua = navigator.userAgent || "";
  var android = /Android/i.test(ua);
  var ios = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  var webview = (android && /; wv\)/.test(ua)) || (ios && !/Safari\//.test(ua));
  if (webview) return;
  var boxes = document.querySelectorAll(".stores");
  for (var i = 0; i < boxes.length; i++) {
    var el = boxes[i];
    if (android) el.insertBefore(el.querySelector(".play"), el.firstChild);
    el.hidden = false;
  }
})();
