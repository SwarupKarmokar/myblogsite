import Home from "../../pages/home/Home"
import Register from "../../pages/register/Register"
import { useContext } from "react";
import { Context } from "../../context/Context";

const IsRegistered = () => {
    // const user = false;
    // const user = true;
    const { user } = useContext(Context);

    return (
        <div>
            {
                user ? <Home /> : <Register />
            }
        </div>
    )
}

export default IsRegistered