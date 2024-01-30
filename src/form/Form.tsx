import { useState } from "react";
import "./App.css";

export default function Form() {
  const [message] = useState(23);

  return (
    <>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" />
        </div>
        <div id="error-message">{message}</div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </>
  );
}
