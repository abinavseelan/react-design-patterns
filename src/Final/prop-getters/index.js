import React from "react";
import ReactDOM from "react-dom";

import Analytics from './Analytics';

function App() {
  return (
    <Analytics>
      {
        (getAnalyticsProps) => (
          <React.Fragment>
            <input
                {
                    ...getAnalyticsProps({
                        onClick: () => {
                            console.log('user controlled click handler')
                        },
                        type:"text",
                        placeholder: "name",
                        name: "name",
                    })
                }
            />
          </React.Fragment>
        )
      }
    </Analytics>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
