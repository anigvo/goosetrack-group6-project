import { forwardRef } from "react"
import { BurgerIcon, Button } from "./MobileMenuBtn.styled";

export const MobileMenuBtn = forwardRef(({onClick, disabled}, ref) => {
    return (<Button aria-label="open mobille sidebar" ref={ref} onClick={onClick} disabled={disabled}>
        <BurgerIcon/>
    </Button>)
});
