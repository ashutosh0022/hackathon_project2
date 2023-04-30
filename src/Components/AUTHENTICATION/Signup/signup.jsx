import "./signup.css";
import Lottie from "lottie-react";
import Signuplottie from "../../../assets/signup.json";
import { Link, useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../Redux/Actions/userAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye } from "react-icons/ai";
const Signup = () => {
  const [shw, setshw] = useState(false);
  const [shwf, setshwf] = useState(false);
  const {success, error, successmsg } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    cnfpassword: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (success) {
      toast.success(successmsg);
      console.log(successmsg);
      navigate("/login");
    }
    if (error) {
      console.log(error);
      toast.error(error);
    }
  }, [navigate, success, error, successmsg]);

  const handlesubmit = (e) => {
    e.preventDefault();

    if (
      formdata.name === "" ||
      formdata.email === "" ||
      formdata.password === "" ||
      formdata.contact === "" ||
      formdata.cnfpassword === ""
    ) {
      toast.error("Fill all the fields");
    } else {
      dispatch(registerUser(formdata));
    }
  };

  return (
    <>
      <div className="container-signup">
        <div className="container-signup-2">
          <div className="main-container1">
            {/* -------------form starts here----------- */}
            <form method="POST" className="ct3">
              <label>
                <input
                  type="text"
                  placeholder="NAME"
                  name="name"
                  value={formdata.name}
                  onChange={(e) =>
                    setformdata({
                      ...formdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                <input
                  type="email"
                  placeholder="EMAIL"
                  name="email"
                  value={formdata.email}
                  onChange={(e) =>
                    setformdata({
                      ...formdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                <input
                  type="number"
                  placeholder="CONTACT"
                  name="contact"
                  value={formdata.contact}
                  onChange={(e) =>
                    setformdata({
                      ...formdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </label>
              <label className="psss">
                <input
                  type={shw ? "text" : "password"}
                  placeholder="PASSWORD"
                  name="password"
                  value={formdata.password}
                  onChange={(e) =>
                    setformdata({
                      ...formdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <AiFillEye
                  className="ii "
                  onClick={() => {
                    setshw(!shw);
                  }}
                />
              </label>
              <label className="psss">
                <input
                  type={shwf ? "text" : "password"}
                  placeholder="CONFIRM PASSWORD"
                  name="cnfpassword"
                  value={formdata.cnfpassword}
                  onChange={(e) =>
                    setformdata({
                      ...formdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <AiFillEye
                  className="ii "
                  onClick={() => {
                    setshwf(!shwf);
                  }}
                />
              </label>
              <input
                type="submit"
                className="btn sub"
                value="SIGNUP"
                onClick={handlesubmit}
              />
              <ToastContainer position="top-center" theme="dark" />
              <div className="no-ac">
                <p>
                  Already have an account?
                  <Link to={`/login`}> Login</Link>
                </p>
              </div>
            </form>
            {/* ------------------------------------------------ */}
          </div>

          <div className="main-container2">
            <Lottie
              className="signup-w"
              animationData={Signuplottie}
              loop={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
