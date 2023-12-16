import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const handleOnClick = () => {
    setAlertVisible(true);
  };
  const [alertVisible, setAlertVisible] = useState(false);

  const handleOnClose = () => {
    setAlertVisible(false);
  };

  return (
    <div>
      {alertVisible && <Alert onClose={handleOnClose}>Oh, an alert!</Alert>}
      <Button onClick={handleOnClick}>My Button</Button>
    </div>
  );
}

export default App;
