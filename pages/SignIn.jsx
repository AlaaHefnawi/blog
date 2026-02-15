import Auth from "../components/Auth/Auth"

const SignIn = () => {
  const inputs = [
    {
        type: "email",
        placeholder: "Enter your email",
        required: true
    },
    {
        type: "password",
        placeholder: "Enter your Password",
        required: true
    }]
    
  return (
    <div style={{margin: "197px 0 167px"}}>
      <Auth
       title= "Sign In"
       subtitle= "Enter your email and password to sign in !"
       inputs={inputs}
       btn={{content: "Sign In", url: "/signin"}}
       text="Don't have an account?    "
       link={{url: "/signup", content: "Sign Up"}}
       />
    </div>
  )
}

export default SignIn
