$(() => {
    var users = [];
    var userlist = localStorage.getItem('user-data');
    if(userlist){
        users = JSON.parse(userlist);
    }
    $('#frm-login').validate();
    $('#frm-register').validate();
    $("#login-btn").click(()=>{
        console.log('log')
        if($('#frm-login').valid())
        {
            var match = false;
            users.forEach(u=>{
                if(u.username == $('#lusername').val() && u.password == $('#lpassword').val()) {
                    match = true;
                   
                }
            });
            if(match){
                let l = {username: $('#lusername').val()}
                sessionStorage.setItem("login-data", JSON.stringify(l));
                window.location.href="index.html"
            }
        }
    })
    ///////////////////////////
    let data = sessionStorage.getItem("login-data");
    let isLoggedIn = false;
    if (data) {
      data = JSON.parse(data);
      isLoggedIn = true;
    }
    if (isLoggedIn) {
      $("#admin").show();
      $("#login").hide();
      $("#register").hide();

    } else {
      $("#admin").hide();
      $("#login").show();
      $('#register').show();

    }
  });
