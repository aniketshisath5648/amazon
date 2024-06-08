var user="aniket"
var pasw="ansh0708"

function useridd(){
    if((document.getElementById('userid').value==user) && (document.getElementById('pass').value==pasw))
        {
            window.location.href="https://www.youtube.com/";
        }
        else{
            document.getElementById('valid').value=" INVALID"
        }
}
