import React from "react";

import PrivacySetting from "./PrivacySetting";

function App() {
  return (
    <PrivacySetting>
      <PrivacySetting.Checkbox>Make profile public</PrivacySetting.Checkbox>

      <PrivacySetting.Message>
        This will let everyone view your profile.
      </PrivacySetting.Message>
    </PrivacySetting>
  );
}

export default App;