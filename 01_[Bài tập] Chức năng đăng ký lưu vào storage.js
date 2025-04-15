const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cPassword = document.querySelector('#c_password');
const form = document.querySelector('form');

const functButton = ()=>{
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(email.value !==''&& password.value !==''&& cPassword.value!==''){
            if(password.value===cPassword.value){
                let emailCheck =localStorage.getItem(email.value);
                if(emailCheck!==null){
                    alert('Email đã tồn tại!!!');
                    console.log(emailCheck);
                    return;
                }
                else{
                    const user = {
                        email: email.value,
                        password: password.value
                    };
                    localStorage.setItem(email.value,JSON.stringify(user));
                    alert('Lưu thành công');
                    email.value='';
                    password.value='';
                    cPassword.value='';
                }
            }
            else{
                alert('Mật khẩu xác nhận không giống nhau!!!')
            }
        }
        else{
            alert('Hãy nhập lại !!!');
            return;
        }
    })
}
functButton();