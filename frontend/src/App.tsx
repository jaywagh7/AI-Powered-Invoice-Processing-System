// import { Provider } from 'react-redux';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { store } from './store';
// import FileUpload from './components/FileUpload';
// import InvoicesTab from './components/InvoicesTab';
// import ProductsTab from './components/ProductsTab';
// import CustomersTab from './components/CustomersTab';
// import { FileText, Package, Users } from 'lucide-react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ErrorBoundary from './components/ErrorBoundary';

// function App() {
//   return (
//     <ErrorBoundary>
//       <Provider store={store}>
//         <div className="min-h-screen bg-gray-50">
//           <ToastContainer
//             position="top-right"
//             autoClose={5000}
//             hideProgressBar={false}
//             newestOnTop
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//           />
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h1 className="text-3xl font-bold text-gray-900 mb-8">
//               Invoice Automate
//               </h1>

//               <div className="mb-8">
//                 <FileUpload />
//               </div>

//               <Tabs className="mt-6">
//                 <TabList className="flex border-b border-gray-200 mb-6">
//                   <Tab className="flex items-center px-6 py-3 font-medium text-gray-600 border-b-2 border-transparent cursor-pointer hover:text-gray-900 hover:border-gray-300">
//                     <FileText className="w-5 h-5 mr-2" />
//                     Invoices
//                   </Tab>
//                   <Tab className="flex items-center px-6 py-3 font-medium text-gray-600 border-b-2 border-transparent cursor-pointer hover:text-gray-900 hover:border-gray-300">
//                     <Package className="w-5 h-5 mr-2" />
//                     Products
//                   </Tab>
//                   <Tab className="flex items-center px-6 py-3 font-medium text-gray-600 border-b-2 border-transparent cursor-pointer hover:text-gray-900 hover:border-gray-300">
//                     <Users className="w-5 h-5 mr-2" />
//                     Customers
//                   </Tab>
//                 </TabList>

//                 <TabPanel>
//                   <InvoicesTab />
//                 </TabPanel>
//                 <TabPanel>
//                   <ProductsTab />
//                 </TabPanel>
//                 <TabPanel>
//                   <CustomersTab />
//                 </TabPanel>
//               </Tabs>
//             </div>
//           </div>
//         </div>
//       </Provider>
//     </ErrorBoundary>
//   );
// }

// export default App;


import { Provider } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { store } from "./store";
import FileUpload from "./components/FileUpload";
import InvoicesTab from "./components/InvoicesTab";
import ProductsTab from "./components/ProductsTab";
import CustomersTab from "./components/CustomersTab";
import { FileText, Package, Users } from "lucide-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { motion } from "framer-motion";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 transition-all duration-500">
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-6">
              Invoice Automate
              </h1>

              <div className="mb-6">
                <FileUpload />
              </div>

              <Tabs className="mt-4">
                <TabList className="flex justify-center border-b border-gray-300 dark:border-gray-700">
                  {[
                    { label: "Invoices", icon: FileText },
                    { label: "Products", icon: Package },
                    { label: "Customers", icon: Users },
                  ].map((tab, index) => (
                    <Tab
                      key={index}
                      className="flex items-center px-6 py-3 mx-2 text-lg font-medium text-gray-600 dark:text-gray-300 border-b-2 border-transparent cursor-pointer transition-all duration-300 hover:text-blue-600 hover:border-blue-500 dark:hover:text-blue-400"
                      selectedClassName="border-blue-500 text-blue-600 dark:text-blue-400"
                    >
                      <tab.icon className="w-6 h-6 mr-2" />
                      {tab.label}
                    </Tab>
                  ))}
                </TabList>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <TabPanel>
                    <InvoicesTab />
                  </TabPanel>
                  <TabPanel>
                    <ProductsTab />
                  </TabPanel>
                  <TabPanel>
                    <CustomersTab />
                  </TabPanel>
                </motion.div>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
