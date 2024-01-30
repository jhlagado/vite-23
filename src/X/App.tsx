import { useState } from "react";
import "./App.css";

export default function App() {
  const [message, setMessage] = useState(23);

  return (
    <>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Email</label>
          <input type="password" name="password" />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" name="confirm-password" />
        </div>
        <div id="error-message"></div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </>
  );
}
