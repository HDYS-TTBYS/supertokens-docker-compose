import React from 'react'
import { signOut } from "supertokens-auth-react/recipe/emailpassword";

const Navbar = () => {
  async function onLogout() {
    await signOut();
    window.location.href = "/";
  }
  return (
    <div>
      <ul>
        <li>Home</li>
        <li onClick={onLogout}>Logout</li>
        <li><a href="/auth/reset-password">Reset Password</a></li>
      </ul>
    </div>
  )
}

export default Navbar
