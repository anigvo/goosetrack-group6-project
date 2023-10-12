import { BtnWrapper, GoogleButton, Span } from "./GoogleBtn.styled";
import { FcGoogle } from 'react-icons/fc';

export const GoogleBtn = ({ children }) => {
    return (<BtnWrapper>
        <Span>or</Span>
        <GoogleButton aria-label="google authorization" href="https://backend-goosetrack.onrender.com/auth/google">{children}<FcGoogle size={20} /></GoogleButton>
    </BtnWrapper>

    )
};
