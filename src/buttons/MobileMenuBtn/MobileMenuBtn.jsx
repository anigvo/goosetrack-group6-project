import { forwardRef } from "react"
import { BurgerIcon, Button } from "./MobileMenuBtn.styled";

export const MobileMenuBtn = forwardRef(({onClick, disabled}, ref) => {
    return (<Button ref={ref} onClick={onClick} disabled={disabled}>
        <BurgerIcon/>
    </Button>)
});
