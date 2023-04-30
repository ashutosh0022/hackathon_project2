import React from "react";
import "./login.css";
import Lottie from "lottie-react";
import Loginlottie from "../../../assets/login.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getuser } from "../../../Redux/Actions/userAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../../Redux/Actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEye } from "react-icons/ai";

const Login = () => {
  const { error, userToken, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [shw, setshw] = useState(false);

  // useEffect(() => {
  //   if (userToken) {
  //     // dispatch(getuser());
  //     // if (userInfo) {
  //       navigate("/dashboard");
  //     // }
  //   }
  //   if (error) {
  //     console.log(error);
  //     toast.error(error);
  //   }
  // }, [userToken, error, navigate]);

  // useEffect(() => {
  //   if (userToken) {
  //     dispatch(getuser());
  //   }
  //   if (userInfo) {
  //     navigate("/dashboard");
  //   }
  //   if (error) {
  //     console.log(error);
  //     toast.error(error);
  //   }
  // }, [navigate, error, userToken, dispatch, userInfo]);

  useEffect(() => {
    if (userToken) {
      dispatch(getuser());
    }
    if (error) {
      // console.log(error);
      toast.error(error);
    }
  }, [dispatch, userToken, error]);

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.error("Fill all the fields");
    } else {
      dispatch(userLogin({ email, password }));
    }
  };
  return (
    <>
      <div className="login-container">
        <div className="l1">
          <div className="login1">
            <Lottie
              className="login-w"
              animationData={Loginlottie}
              loop={true}
            />
          </div>
          <div className="login2">
            {/* <div className="login21"> */}
            <form method="POST" className="login21">
              <label>
                <input
                  type="email"
                  placeholder="EMAIL"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </label>

              <label className="pss">
                {/* <div className="pss"> */}
                <input
                  type={shw ? "text" : "password"}
                  placeholder="PASSWORD"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
                <AiFillEye
                  className="i "
                  onClick={() => {
                    setshw(!shw);
                  }}
                />
              </label>

              <input
                type="submit"
                className="btn sub2"
                value="LOGIN"
                onClick={handlesubmit}
              />
              <ToastContainer position="top-center" theme="dark" />
              {/* </div> */}
            </form>
            <div className="no-ac">
              <p>
                Dont have account?
                <Link to={`/signup`}> Signup</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
