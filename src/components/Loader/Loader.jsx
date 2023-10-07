import { Puff } from "react-loader-spinner"
import { LoaderPosition, SuspenseLoader } from "./Loader.styled.jsx"

export const Loader = ({ type }) => {
  if (type === 'suspense') {
    return (
      <SuspenseLoader>
        <Puff
          width='200'
          color="#3E85F3"
          ariaLabel="puff-loading"
        />
      </SuspenseLoader>
    )
  }
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