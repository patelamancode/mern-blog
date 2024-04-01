import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInStart, signInFailure, signInSuccess } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Oauth from "../components/Oauth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { loading , error: errorMessage} = useSelector((state) => state.user)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("click happen")
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill out all fields.'))
    }
    try {
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return dispatch(signInFailure(data.message))
      }
      if(res.ok) {
        dispatch(signInSuccess(data))
        navigate('/');
      }
    } catch (error) {
      return dispatch(signInFailure(error.message))
    }
  };

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
          <form className=" flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <Label value="Email" />
              <TextInput
                id="email"
                type="email"
                placeholder="Enter your email ID"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                id="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              {loading ? (
              <>
                <Spinner />
                <span>Loading..</span>
              </>):('Sign In')}
            </Button>
            <Oauth />
          </form>
          <div className="flex gap-3 text-sm mt-5">
            <span>{`Don't have an account ?`}</span>
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}


