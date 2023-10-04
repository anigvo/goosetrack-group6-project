import { Puff } from "react-loader-spinner"
import { LoaderPosition } from "./Loader.styled.jsx"

export const Loader = () => {
  return (
    <LoaderPosition>
      <Puff
        width='200'
        color="white"
        ariaLabel="puff-loading"
      />
    </LoaderPosition>
  )
}