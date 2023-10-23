import lws_logo from '../assets/img/lws-logo.svg';

export default function Header() {
   return (
      <header id="header">
         <div className="container">
            <img src={lws_logo} alt="logo" className="logo" />
            <div className="flex items-center">
               <a className="text-white min-w-[50px] font-medium" href="#">
                  Home
               </a>
               <button className="log-btn btn">Login</button>
            </div>
         </div>
      </header>
   );
}
