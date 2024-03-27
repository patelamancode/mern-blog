import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex  max-w-3xl p-3 mx-auto flex-col  md:flex-row md:items-center gap-5">
        {/* left content */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              MERN
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            consequatur ea rerum mollitia sequi, expedita a quam eaque pariatur,
            tempore commodi explicabo iste?
          </p>
        </div>

        {/* right content */}
        <div className="flex-1">
          <form className=" flex flex-col gap-5">
            <div>
              <Label value="Your Username"/>
              <TextInput 
                id="username"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <Label value="Email"/>
              <TextInput 
                id="email"
                type="text"
                placeholder="Enter your email ID"
              />
            </div>
            <div>
              <Label value="Password"/>
              <TextInput 
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">Sign up</Button>
          </form>
          <div className="flex gap-3 text-sm mt-5">
            <span>Already have an  account ? </span>
            <Link to="/signin" className="text-blue-500">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
