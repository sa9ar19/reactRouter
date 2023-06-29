import { useNavigate, Outlet } from "react-router-dom"

export const Contact = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    console.log("----")
    navigate("/")
  }

  return (
    <div className="components">
      <div>Contact</div>
      < Outlet />
      <button onClick={handleClick}>Submit</button>
    </div>
   
  )
}
