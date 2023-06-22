
import logo from "../assets/logo.png"
const Hero = () => {
  return (
    <div>
        <div>
          <img src={logo} alt="logo" className="mx-auto my-16 h-24 rounded-full shadow-2xl"/>  
          <h3 >A history of everything you copy</h3>
          <p className="max-w-3xl mx-auto mb-10 text-2xl text-darkGrayishBlue">   Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.</p>
          {/* button container */}
          <div className="btn_container">
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
          >
            Download for iOS
          </a>
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
          >
            Download for Mac
          </a>
        </div>
        </div>
    </div>
  )
}

export default Hero