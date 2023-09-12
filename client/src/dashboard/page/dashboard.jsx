import React from 'react';
import '../style/dashboard.css';
import Navbar from '../component/nav_bar'
import MainDash from '../component/MainDash';

function App() {

  return (
    <div className='flex'>
      <Navbar/>
      {/* Content */}
      <MainDash/>
    </div>
  );
}

export default App;







// import React from 'react';
// import {FaHome,FaChartLine, FaSignOutAlt} from "react-icons/fa";

// function App() {
//   return (
//     <div className="flex">
//         <nav>
//       {/* Sidebar */}
//       <div className="bg-gray-800 text-white h-screen w-44 justify-between">
//         <div className="p-4 flex flex-col text-xl">
//           {/* Sidebar links */}
//           <a href="/" className="text-white hover:text-blue-400 py-4 "><FaHome/>Home</a>
//           <a href="/dashboard" className="text-white hover:text-blue-400 py-4"><FaChartLine/>Dashboard</a>
//         </div>
//         <div className="pl-4 absolute bottom-0 left-0 h-16 w-16 text-xl">
//           {/* Hamburger button */}
//           <button className="text-white hover:text-blue-400">
//           <FaSignOutAlt/>Logout
//         </button>
//         </div>
//       </div>
//         </nav>
//       {/* Content */}
//       <main className="bg-gray-200 flex-1 p-4">
//         {/* Your content goes here */}
//         <h1>Content Here</h1>
//       </main>
//     </div>
//   );
// }

// export default App;