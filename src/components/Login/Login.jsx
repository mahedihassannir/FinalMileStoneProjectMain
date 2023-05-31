
import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { contexM } from '../AuthProvider/ContexSuplier';
import { Link, useLocation, useNavigate } from 'react-router-dom';




const Login = () => {

    const { LoginUserWIthPopUp } = useContext(contexM)


    // thsis is for navigate

    const navigate = useNavigate()

    const location = useLocation()

    const from = location.state?.from?.pathname || '/'
    console.log(from);
    // thsis is for navigate ends

    const { LoginUser } = useContext(contexM)

    useEffect(() => {

        loadCaptchaEnginge(6);


    }, [])


    const HandlePOPUPLOIN = () => {
        LoginUserWIthPopUp()
            .then(res => {
                const user = res.user
                console.log(user);

                const usersInfo = { email: user.email, img: user.photoURL, name: user.displayName }
                console.log(usersInfo);
                fetch(`http://localhost:5000/users`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(usersInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })


                navigate(from)
            })
            .catch(err => {
                console.log(err);
            })
    }


    const captchaRef = useRef()

    const handleLogin = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password);
        LoginUser(email, password)
            .then(res => {
                const user = res.user
                // console.log(user);
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err);
            })

    }

    const [disabled, Setdisabled] = useState(true)

    const handleValidateCaptcha = () => {

        const user_captcha_value = captchaRef.current.value

        console.log(user_captcha_value);

        // console.log(validateCaptcha);

        if (validateCaptcha(user_captcha_value, false) == true) {

            Setdisabled(false)
        }

        else {
            Setdisabled(true)

        }

    }

    return (
        <div className="flex items-center justify-center h-screen">


            <form onSubmit={handleLogin} className="bg-white w-1/2 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-400">
                <h2 className="text-2xl mb-6 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="email"
                        placeholder="Enter your username"
                        name="email"
                    />

                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                    />
                    <div className='mt-10'>

                        <LoadCanvasTemplate />
                        <button onClick={handleValidateCaptcha} className='btn btn-xs'>
                            validate
                        </button>

                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        validate
                    </label>
                    <input

                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="validate"
                        ref={captchaRef}
                        type="text"
                        placeholder="validate"
                        name="validate"
                    />

                </div>
                <div className="flex items-center justify-between">
                    <button
                        // to :: do to disable
                        disabled={false}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign In
                    </button>
                    <a
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="#"
                    >
                        Forgot Password?
                    </a>
                    <Link to="/Register">
                        <p className='link'><small>new here create a new account</small></p>
                    </Link>

                    <Link to='/'>
                        <p>back to home </p>
                    </Link>


                    <div>
                        <button onClick={HandlePOPUPLOIN} className="btn btn-primary">
                            google

                        </button>
                    </div>



                </div>
            </form>

        </div>
    );
};

export default Login;