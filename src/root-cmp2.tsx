// import React, { useContext } from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './store';
// import Header from './cmps/Header';
// import HomePage from './pages/HomePage';
// import UserProvider  from './context/userContext';
// import PhotoPage from './pages/PhotoPage'

// export function RootCmp() {
//   return (
//     <React.StrictMode>
//       <UserProvider>
//         <BrowserRouter>
//           <Header />
//           <main className="main-element">
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/:id" element={<PhotoPage />} />
//             </Routes>
//           </main>
//         </BrowserRouter>
//       </UserProvider>
//     </React.StrictMode>
//   );
// }