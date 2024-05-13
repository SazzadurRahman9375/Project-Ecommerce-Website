$(() => {
    var users = [];
    var userlist = localStorage.getItem('user-data');
    if(userlist){
        users = JSON.parse(userlist);
    }
   
    $('#frm-register').validate();
    
    $("#register-btn").click(()=>{
        console.log('log')
        if($('#frm-register').valid())
        {
            var data = {username: $("#rusername").val(), password: $("#rpassword").val()}
            users.push(data);
            localStorage.setItem('user-data', JSON.stringify(users));
            $('#frm-register').trigger('reset');
            window.location.href ="login.html";
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
