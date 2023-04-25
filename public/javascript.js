class Allform{
    constructor(loginUsername, loginPassword, registerFname,registerSname, registerUsername, registerPassword, post1  ){
        this.loginUsername = loginUsername;
        this.loginPassword = loginPassword;
        
        this.registerFname = registerFname;
        this.registerSname = registerSname;
        this.registerUsername = registerUsername;
        this.registerPassword = registerPassword;

        this.post1 = post1;

    }
       
    //getter method for login

    getLoginUsername(){
        return this.loginUsername;
    }
    getLoginPassword(){
        return this.loginPassword;
    }

    //getter method for register

    getRegisterFname(){
        return this.registerFname;
    }
    getRegisterSname(){
        return this.registerSname;
    }
    getRegisterUsername(){
        return this.registerUsername;
    }
    getRegisterPassword(){
        return this.registerPassword;
    }
    //getter method for post
    getPost1(){
        return this.post1;
    }


}

let Login= document.getElementById("login_form");
if(Login) Login.addEventListener('submit', loginForm);

function loginForm(e){
    e.preventDefault();

    let loginUsername = document.getElementById('username').value;
    let loginPassword = document.getElementById('password').value;
    let LOGINobj = new Allform(loginUsername, loginPassword);
    console.log(LOGINobj);
    document.getElementById("login_form").reset();
}

const Register = document.getElementById("register_form");
if(Register) Register.addEventListener('submit', RegisterForm);

function RegisterForm(e){
    e.preventDefault();
    

    let registerFname = document.getElementById('fname').value;
    let registerSname = document.getElementById('sname').value;
    let registerUsername = document.getElementById('username').value;
    let registerPassword = document.getElementById('password').value;
    let REGISTERobj = new Allform('','', registerFname, registerSname,registerUsername, registerPassword,'');
    console.log(REGISTERobj);
    document.getElementById("register_form").reset();
}

const Post = document.getElementById("post_form");
if(Post) Post.addEventListener('submit', postForm);

function postForm(e){
    e.preventDefault();

    let post1 = document.getElementById('post1').value;
    let POSTobj = new Allform('', '', '', '', '', '', post1);
    console.log(POSTobj);
    document.getElementById("post_form").reset();
}

//--------------------------------------------------------------------------------------------
const usersBtn = document.getElementById("users-btn");
document.getElementById("users-btn").addEventListener('click', getAllUsers);

function getAllUsers() {
  //e.preventDefault();
  
    fetch('http://localhost:3000/users')
    .then((res) => res.json()) //JSON.parse(res)
    .then((data) => {
        let ul = document.getElementById("allUsers");
        data.forEach((user) => {
            let li = document.createElement('li');
            let text = document.createTextNode(user.userName);
            li.appendChild(text);
            ul.appendChild(li);
        })

    })

    .catch(err => console.log('err! ${err}'));
    
    
}