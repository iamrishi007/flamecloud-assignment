import React from "react";

const Loading = ({ message = "Please wait..." }) => {
     return (
          <div
               style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                    fontFamily: "Arial, sans-serif",
               }}
          >
               <div
                    style={{
                         border: "4px solid #f3f3f3",
                         borderTop: "4px solid #3498db",
                         borderRadius: "50%",
                         width: "40px",
                         height: "40px",
                         animation: "spin 1s linear infinite",
                         marginBottom: "15px",
                    }}
               />
               <p>{message}</p>

               <style>
                    {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
               </style>
          </div>
     );
};

export default Loading;
