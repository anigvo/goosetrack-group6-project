import { Global, css, useTheme } from "@emotion/react";

export const GlobalStyles = () => {
    const theme = useTheme();
    return (
        <>
            <Global styles={
                css`
                body {
                    background-color: ${theme.mainBackground};
                    color: ${theme.mainFont};
                    &::-webkit-scrollbar {
                        background-color: ${theme.taskScrollBarBackground};
                        border-radius: 12px;
                        width: 6px;
                    }
                    &::-webkit-scrollbar-thumb {
                        background-color: ${theme.taskScrollbarColor};
                        width: 6px;
                        border-radius: 12px;
                    }}
            `
            } />
        </>
    )
};
