import Auth from "../components/Auth/Auth"

const SignUp = () => {
  const inputs = [
    {
        type: "text",
        placeholder: "Enter your username",
        required: true
    },
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
    <div style={{margin: "197px 0 100px"}}>
      <Auth
       title= "Sign Up"
       subtitle= "Enter your email and username , password to sign up!"
       inputs={inputs}
       btn={{content: "Sign Up", url: "/signup"}}
       text="Have an account?    "
       link={{url: "/signin", content: "Log in"}}
       />
    </div>
  )
}

export default SignUp
