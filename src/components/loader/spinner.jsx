import { FaSpinner } from "react-icons/fa"


const Spinner = ({designs}) => {
  return (
    <div className={`${designs} w-full grid place-items-center`}>
        <FaSpinner className="animate-spin" />
    </div>
  )
}

export default Spinner