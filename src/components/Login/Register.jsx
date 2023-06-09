import { useContext } from "react";
import { contexM } from "../AuthProvider/ContexSuplier";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { data } from "autoprefixer";



const Register = () => {

    const navigate = useNavigate()

    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    // here is teh contex create user 

    const { createUser, LoginUserWIthPopUp, UpdateUserProfile } = useContext(contexM)

    // here is teh contex create user  ends

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target

        const name = form.name.value
        const photo = form.url.value
        const email = form.email.value
        const password = form.password.value
        // console.log(photo, name, email, password);

        createUser(email, password)
            .then(res => {
                const user = res.user
                console.log(user);
                console.log(user.email);

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

                UpdateUserProfile(name, photo)

                    .then(() => {

                        console.log("user info updated");


                        navigate(from)


                    })

                    .catch(err => {
                        console.log(err);
                    })


            })


    }

    const HandlePOPUPLOIN = () => {
        LoginUserWIthPopUp()
            .then(res => {
                const user = res.user
                // console.log(user);
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



    return (
        <div className="hero h-screen bg-base-200">

            <div className="hero-content w-1/2">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="url" name="url" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            <button onClick={HandlePOPUPLOIN} className="btn btn-primary">
                                google

                            </button>
                        </div>
                        <Link to="/login">
                            <p className="link">
                                have an account

                            </p>
                        </Link>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;