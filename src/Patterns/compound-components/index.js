import React from "react";

import PrivacySetting from "./PrivacySetting";

function App() {
  return (
    <div>
      <PrivacySetting>
        <PrivacySetting.Checkbox>Make profile public</PrivacySetting.Checkbox>

        <PrivacySetting.Message>
          This will let everyone view your profile.
        </PrivacySetting.Message>
      </PrivacySetting>
    </div>
  );
}

export default App;