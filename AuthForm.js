import React, { useState } from 'react';

const AuthForm = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div className={`container relative w-[768px] max-w-full min-h-[480px] bg-white rounded-[10px] overflow-hidden shadow-[0_14px_28px_rgba(0,0,0,0.25),_0_10px_10px_rgba(0,0,0,0.22)] ${isRightPanelActive ? 'right-panel-active' : ''}`} id="main">
      <div className={`sign-up absolute top-0 left-0 h-full transition-all duration-700 ease-in-out ${isRightPanelActive ? 'translate-x-full opacity-100 z-30' : 'w-1/2 opacity-0 z-10'}`}>
        <form action="#" className="bg-white flex flex-col justify-center items-center p-12 h-full text-center">
          <h1 className="font-bold">Create Account</h1>
          <div className="social-container my-5">
            <a href="#" className="social inline-flex items-center justify-center h-10 w-10 m-1 border border-gray-300 rounded-full">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social inline-flex items-center justify-center h-10 w-10 m-1 border border-gray-300 rounded-full">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social inline-flex items-center justify-center h-10 w-10 m-1 border border-gray-300 rounded-full">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="text-sm font-light leading-5 tracking-wide my-4">or use your email for registration</p>
          <input type="text" name="txt" placeholder="Name" className="bg-gray-200 p-3 my-2 w-full rounded-md border-none outline-none" required />
          <input type="email" name="email" placeholder="Email" className="bg-gray-200 p-3 my-2 w-full rounded-md border-none outline-none" required />
          <input type="password" name="pswd" placeholder="Password" className="bg-gray-200 p-3 my-2 w-full rounded-md border-none outline-none" required />
          <button className="text-white bg-red-500 text-sm font-bold py-3 px-14 my-5 rounded-full border border-red-500 outline-none tracking-wider uppercase transition-transform duration-80 ease-in transform active:scale-90">Sign Up</button>
        </form>
      </div>
      <div className={`sign-in absolute top-0 left-0 h-full transition-all duration-700 ease-in-out ${isRightPanelActive ? 'translate-x-full' : 'w-1/2 z-20'}`}>
        <form action="#" className="bg-white flex flex-col justify-center items-center p-12 h-full text-center">
          <h1 className="font-bold">Sign In</h1>
          <div className="social-container my-5">
            <a href="#" className="social inline-flex items-center justify-center h-10 w-10 m-1 border border-gray-300 rounded-full">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social inline-flex items-center justify-center h-10 w-10 m-1 border border-gray-300 rounded-full">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social inline-flex items-center justify-center h-10 w-10 m-1 border border-gray-300 rounded-full">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="text-sm font-light leading-5 tracking-wide my-4">or use your account</p>
          <input type="email" name="email" placeholder="Email" className="bg-gray-200 p-3 my-2 w-full rounded-md border-none outline-none" required />
          <input type="password" name="pswd" placeholder="Password" className="bg-gray-200 p-3 my-2 w-full rounded-md border-none outline-none" required />
          <a href="#" className="text-gray-500 text-sm my-4">Forgot your password?</a>
          <button className="text-white bg-red-500 text-sm font-bold py-3 px-14 my-5 rounded-full border border-red-500 outline-none tracking-wider uppercase transition-transform duration-80 ease-in transform active:scale-90">Sign In</button>
        </form>
      </div>
      <div className={`overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-50${isRightPanelActive ? 'translate-x-[-100%]' : 'translate-x-0'}`}>
        <div className={`overlay relative text-white bg-gradient-to-r from-pink-500 to-pink-700 left-[-100%] h-full w-[200%] transform transition-transform duration-700 ease-in-out translate-x-0 ${isRightPanelActive ? 'translate-x-[50%]' : 'translate-x-0'}`}>
          <div className={`overlay-left absolute flex flex-col items-center justify-center p-10 text-center top-0 h-full w-1/2 transform transition-transform duration-700 ease-in-out translate-x-[-20%] ${isRightPanelActive ? 'translate-x-0' : 'translate-x-[-20%]'}`}>
            <h1>Welcome Back</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button id="signIn" onClick={handleSignInClick} className="mt-4 text-white border border-white px-8 py-3 rounded-full transition-transform duration-80 ease-in transform active:scale-90">Sign In</button>
          </div>
          <div className={`overlay-right absolute flex flex-col items-center justify-center p-10 text-center top-0 right-0 h-full w-1/2 transform transition-transform duration-700 ease-in-out translate-x-0] ${isRightPanelActive ? 'translate-x-[20%]' : 'translate-x-0'}`}>
            <h1>Hello, Friend</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button id="signUp" onClick={handleSignUpClick} className="mt-4 text-white border border-white px-8 py-3 rounded-full transition-transform duration-80 ease-in transform active:scale-90">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

// import React, { useState } from 'react';

// export default function AuthForm() {
//   const [isRightPanelActive, setIsRightPanelActive] = useState(false);

//   const handleSignUpClick = () => {
//     setIsRightPanelActive(true);
//   };

//   const handleSignInClick = () => {
//     setIsRightPanelActive(false);
//   };

//   return (
//     <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="main">
//       <div className="sign-up absolute top-0 left-0 h-full transition-all duration-[600ms] ease-in-out w-1/2 opacity-0 z-10">
//         <form action="#" className="bg-white flex justify-center items-center flex-col p-12 h-full text-center">
//           <h1 className="font-bold">Create Account</h1>
//           <div className="social-container my-4">
//             <a href="#" className="social inline-flex justify-center items-center border border-gray-300 rounded-full h-10 w-10 mx-1"><i className="fab fa-facebook-f"></i></a>
//             <a href="#" className="social inline-flex justify-center items-center border border-gray-300 rounded-full h-10 w-10 mx-1"><i className="fab fa-google-plus-g"></i></a>
//             <a href="#" className="social inline-flex justify-center items-center border border-gray-300 rounded-full h-10 w-10 mx-1"><i className="fab fa-linkedin-in"></i></a>
//           </div>
//           <p className="text-sm font-light leading-5 tracking-wide my-4">or use your email for registration</p>
//           <input type="text" name="txt" placeholder="Name" required className="bg-gray-200 p-3 my-2 w-full rounded-md border-none outline-none" />
//           <input type="email" name="email" placeholder="Email" required className="bg-gray-200 p-3 my-2 w-full rounded-md border-none outline-none" />
//           <input type="password" name="pswd" placeholder="Password" required className="bg-gray-200 p-3 my-2 w-full rounded-md border-none outline-none" />
//           <button className="bg-red-500 text-white p-3 my-4 rounded-full border border-red-500 outline-none uppercase tracking-wider transition-transform duration-[80ms] ease-in transform active:scale-90">Sign up</button>
//         </form>
//       </div>
//       <div className="sign-in absolute top-0 left-0 h-full transition-all duration-[600ms] ease-in-out w-1/2 z-20">
//         <form action="#" className="bg-white flex justify-center items-center flex-col p-12 h-full text-center">
//           <h1 className="font-bold">Sign in</h1>
//           <div className="social-container my-4">
//             <a href="#" className="social inline-flex justify-center items-center border border-gray-300 rounded-full h-10 w-10 mx-1"><i className="fab fa-facebook-f"></i></a>
//             <a href="#" className="social inline-flex justify-center items-center border border-gray-300 rounded-full h-10 w-10 mx-1"><i className="fab fa-google-plus-g"></i></a>
//             <a href="#" className="social inline-flex justify-center items-center border border-gray-300 rounded-full h-10 w-10 mx-1"><i className="fab fa-linkedin-in"></i></a>
//           </div>
//           <p className="text-sm font-light leading-5 tracking-wide my-4">or use your account</p>
//           <input type="email" name="email" placeholder="Email" required className="bg-gray-200 p-3 my-2 w-full rounded-md border-none outline-none" />
//           <input type="password" name="pswd" placeholder="Password" required className="bg-gray-200 p-3 my-2 w-full rounded-md border-none outline-none" />
//           <a href="#" className="text-gray-700 text-sm my-4">Forget your Password</a>
//           <button className="bg-red-500 text-white p-3 my-4 rounded-full border border-red-500 outline-none uppercase tracking-wider transition-transform duration-[80ms] ease-in transform active:scale-90">Sign in</button>
//         </form>
//       </div>
//       <div className="overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-[600ms] ease-in-out z-30">
//         <div className="overlay relative text-white bg-gradient-to-r from-red-500 to-pink-500 left-[-100%] h-full w-[200%] transform translate-x-0 transition-transform duration-[600ms] ease-in-out">
//           <div className="overlay-left absolute flex justify-center items-center flex-col text-center top-0 h-full w-1/2 transform translate-x-[-20%] transition-transform duration-[600ms] ease-in-out">
//             <h1 className="font-bold">Welcome Back</h1>
//             <p className="text-sm font-light leading-5 tracking-wide my-4">To keep connected with us please login with your personal info</p>
//             <button id="signIn" className="bg-transparent border-2 border-white text-white p-3 my-4 rounded-full uppercase tracking-wider" onClick={handleSignInClick}>Sign In</button>
//           </div>
//           <div className="overlay-right absolute flex justify-center items-center flex-col text-center top-0 h-full w-1/2 right-0 transform translate-x-0 transition-transform duration-[600ms] ease-in-out">
//             <h1 className="font-bold">Hello, Friend</h1>
//             <p className="text-sm font-light leading-5 tracking-wide my-4">Enter your personal details and start journey with us</p>
//             <button id="signUp" className="bg-transparent border-2 border-white text-white p-3 my-4 rounded-full uppercase tracking-wider" onClick={handleSignUpClick}>Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

