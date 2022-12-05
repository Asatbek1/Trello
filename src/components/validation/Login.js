import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import Form from "./Form";
import styled from "styled-components";
const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert("invalid user"));
  };
  return<LoginRouter LoginRouter><Form title="Войти" handleClick={handleLogin} /></LoginRouter> ;
};
export default Login;
const LoginRouter = styled.div`
display:inline-block;


`
