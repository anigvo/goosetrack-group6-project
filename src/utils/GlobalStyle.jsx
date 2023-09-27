import { Global, css, useTheme } from "@emotion/react";

export const GlobalStyles = () => {
    const theme = useTheme();
    return (
        <>
            <Global styles={
                css`
                body {
                    background-color: ${theme.mainBackground};
                    color: ${theme.mainFont}}
            `
            } />
        </>
    )
};
