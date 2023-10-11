import { GoogleButton } from "./GoogleBtn.styled";
import { FcGoogle } from 'react-icons/fc';

export const GoogleBtn = () => {
    return (
        <GoogleButton href="https://backend-goosetrack.onrender.com/auth/google">Google<FcGoogle size={20}/></GoogleButton>
    )
};
