

function validatePassword(password) {
    
    if (password.length !== 8) {
        document.getElementById('valid').value="enter 8 digit password only";
        return false;
    }
    
    var n = /\d/.test(password);
    var a = /[a-zA-Z]/.test(password);
    var c = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return n && a && c;
}

function useridd() {
   var moba = document.getElementById('phone').value;
    var Passw = document.getElementById('pass').value;

    if (validatePassword(Passw) && (moba.length == 12) ) {
        window.location.href = "https://www.youtube.com/";
    } else if(moba.length != 12){
document.getElementById('valid').value="enter 10 digit mobile number";
    }

    else{
        document.getElementById('valid').value = "use character,alphabate and number";
    }
}
function nationality() {
    var phone = document.getElementById('phone').value;
    if (phone.startsWith('91')) {
      document.getElementById('rush').value = ' India';
    }
    else if (phone.startsWith('92')) {
        document.getElementById('rush').value = 'pakistan';
      }
      else if (phone.startsWith('1')) {
        document.getElementById('rush').value = 'america';
      }
      else if (phone.startsWith('86')) {
        document.getElementById('rush').value = 'china';
      }
     else {
      document.getElementById('rush').value = '⛳ Other';
    }
  }




  