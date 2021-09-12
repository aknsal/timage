import React from 'react'

function Login () {
    
    
    return (
        <div>
           <div class="full">
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<input id="name_signup" type="text" placeholder="Name" />
			<input id="email_signup" type="email" placeholder="Email" />
			<input id="password_signup" type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		
		<form action="#">
			<h1>Sign in</h1>
			<input id="email_signin" type="email" placeholder="Email" />
			<input id="pass_signin" type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost1" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h2 style="color: black;">Already have an account!</h2>
				<h3 style="color: black;">Wanna sign up either?</h3>
				<b><button  style="color: black;" class="ghost2" id="signUp">Sign Up</button></b>
			</div>
		</div>
	</div>
</div>
</div> 
        </div>
    )
}

export default Login 
