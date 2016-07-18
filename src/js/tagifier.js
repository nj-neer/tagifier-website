var apiUri = "https://api.github.com/repos/Cyriaqu3/tagifier/releases/latest";

$.get( apiUri, function( data ) {
  var setupUrl = data.assets[1].browser_download_url;
  $("#dl-url").attr("href", setupUrl).attr("target", "_blank").fadeTo(1.0, 500);
  console.log("Release link URL :");
  console.log(setupUrl);
});

$(document).ready(function() {
  setTimeout(function(){
      $("#screen").addClass("animated fadeInLeft");
  },1000);
});
