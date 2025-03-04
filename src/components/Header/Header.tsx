import logo from "../../assets/images/Logo.png"
import "./style.css"
export default function Header() {
  return (
      <header>
         <img 
          className="logo-img" 
          src={logo}
          alt="Logo" 
        />
      </header>
  )
}