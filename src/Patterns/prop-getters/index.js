import React from "react";

import Analytics from './Analytics';

function App() {
  return (
    <Analytics>
      {
        (getAnalyticsProps) => (
          <div>
            <h2>Click on the input field.</h2>
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
          </div>
        )
      }
    </Analytics>
  );
}

export default App;