const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('form');
const eye = document.querySelector('.eye');
const functButton = ()=>{
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(email.value !==''&& password.value !==''){
                let emailCheck =localStorage.getItem(email.value);
                
                if(emailCheck===null){
                    alert('Email hoặc mật khẩu không hợp lệ');
                    return;
                }
                else{
                    let userCheck = JSON.parse(emailCheck)
                    let passwordCheck = userCheck.password;
                    if(passwordCheck===password.value){
                        alert('Đăng nhập thành công');
                        email.value='';
                        password.value='';
                        window.location.href='https://google.com'
                    }
                    else{
                        alert('Email hoặc mật khẩu không hợp lệ');
                        return;
                    }
                  
                }
        }
        else{
            alert('Hãy nhập lại !!!');
            return;
        }
    })

}


const showPassword =()=>{
    eye.addEventListener('click',()=>{
        if(password.type==='password'){
            password.type='text';
        }
        else{
            password.type='password';
        }
    })
}
functButton();
showPassword();