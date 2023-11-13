import { Input } from "antd";
import "../css/style.css";

import React, { useState } from "react";
import SignIn from "../service/SignIn";
import { Link } from "react-router-dom";

const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SignIn(value);
  };

  return (
    <div style={{ fontFamily: "CPAC MODERN MEDIUM" }}>
      <div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />

          <div>
            <Input
              id="email-address"
              name="email"
              required
              addonAfter={"@scg.com"}
              placeholder="Username"
              onChange={handleChange}
              size="large"
            />

            <div style={{ marginTop: "5px" }}>
              <Input.Password
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                onChange={handleChange}
                size="large"
              />
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <Link to="/forgotpass" type="button" className="text-muted">
              ลืมรหัสผ่าน
            </Link>
          </div>
          <hr className="mt-3" />
          <button type="submit" className="btn bg-warning w-100">
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
