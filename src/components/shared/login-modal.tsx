// export default function LoginModal() {
//   return <div className="relative z-10"></div>;
// }

// export default function LoginModal() {
//   return (
//     <div
//       className="relative z-10"
//       aria-labelledby="modal-title"
//       role="dialog"
//       aria-modal="true"
//     >
//       {/* <!--
//     Background backdrop, show/hide based on modal state.

//     Entering: "ease-out duration-300"
//       From: "opacity-0"
//       To: "opacity-100"
//     Leaving: "ease-in duration-200"
//       From: "opacity-100"
//       To: "opacity-0"
//   --> */}
//       <div
//         className="fixed inset-0 bg-gray-500/75 transition-opacity"
//         aria-hidden="true"
//       ></div>

//       <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//         <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//           {/* <!--
//         Modal panel, show/hide based on modal state.

//         Entering: "ease-out duration-300"
//           From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//           To: "opacity-100 translate-y-0 sm:scale-100"
//         Leaving: "ease-in duration-200"
//           From: "opacity-100 translate-y-0 sm:scale-100"
//           To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//       --> */}
//           <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
//             <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//               <div className="sm:flex sm:items-start">
//                 <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
//                   <svg
//                     className="size-6 text-red-600"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                     data-slot="icon"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
//                     />
//                   </svg>
//                 </div>
//                 <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                   <h3
//                     className="text-base font-semibold text-gray-900"
//                     id="modal-title"
//                   >
//                     Deactivate account
//                   </h3>
//                   <div className="mt-2">
//                     <p className="text-sm text-gray-500">
//                       Are you sure you want to deactivate your account? All of
//                       your data will be permanently removed. This action cannot
//                       be undone.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//               <button
//                 type="button"
//                 className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
//               >
//                 Deactivate
//               </button>
//               <button
//                 type="button"
//                 className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function LoginModal() {
//   return (
//     <>
//       <button
//         className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         type="button"
//         data-modal-toggle="authentication-modal"
//       >
//         Toggle login modal
//       </button>
//       <div
//         id="authentication-modal"
//         aria-hidden="true"
//         className="hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center"
//       >
//         <div className="relative w-full max-w-md px-4 h-full md:h-auto">
//           <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
//             <div className="flex justify-end p-2">
//               <button
//                 type="button"
//                 className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
//                 data-modal-toggle="authentication-modal"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
