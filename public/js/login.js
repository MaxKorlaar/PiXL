$("form").on("submit",function(e){var s,a;return e.preventDefault(),s=$(".login-form").height(),a=$(".login-form").width(),$(".login-form").addClass("hide"),$(".loader-wrapper").css({height:s+"px",width:a+"px"}).removeClass("hide"),$(".card-action .btn").addClass("disabled"),$.ajax({url:window.auth.doLoginUrl,type:"POST",dataType:"json",data:$("form").serialize(),success:function(e){console.info(e),e.success&&($(".login-card").addClass("green"),window.location.href=e.redirect)},error:function(e){"undefined"!=typeof e.responseJSON?("undefined"!=typeof e.responseJSON.success&&Materialize.toast(e.responseJSON.error,1e4),403==e.status&&($("#password").addClass("invalid"),$("#username").addClass("invalid")),"undefined"!=typeof e.responseJSON.password&&(Materialize.toast(e.responseJSON.password[0],1e4),$("#password").addClass("invalid")),"undefined"!=typeof e.responseJSON.username&&(Materialize.toast(e.responseJSON.username[0],1e4),$("#username").addClass("invalid"))):200!==e.status?Materialize.toast("Unknown response: "+e.status,1e4):($(".login-card").addClass("green"),window.location.href=window.auth.homeUrl),$(".card-action .btn").removeClass("disabled"),$(".login-form").removeClass("hide"),$(".loader-wrapper").addClass("hide")}}),!1}),$(document).ready(function(){Materialize.updateTextFields()});