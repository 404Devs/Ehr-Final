import React, { useState } from "react";
import "./Login.css"
import { User, Lock, Eye, EyeOff, IdCard, Fingerprint, LogIn } from "lucide-react";

const Login = () => {
  const [loginMethod, setLoginMethod] = useState("userid");
  const [showPassword, setShowPassword] = useState(false);

  const styles = {
    body: {
      fontFamily: "'Roboto', sans-serif",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      margin: 0,
      overflow: "hidden",
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      padding: "1rem",
    },
    loginBox: {
      // linear-gradient(25deg, #498169, #2e6596)linear-gradient(25deg, #498169, #2e6596)
      backdropFilter: "blur(12px)",
      padding: "3rem",
      borderRadius: "15px",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
      width: "500px",
      textAlign: "center",
    },
    toggleWrapper: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "1rem",
    },
    toggleButton: (active) => ({
      flex: 1,
      padding: "14px",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
      background: active ? "linear-gradient(135deg, #498169, #2e6596)" : "rgba(255, 255, 255, 0.4)",
      color: "#fff",
      borderRadius: "12px",
      backdropFilter: "blur(6px)",
      boxShadow: active ? "0 4px 10px rgba(0, 0, 0, 0.3)" : "none",
      margin: "10px",
    }),
    formGroup: {
      marginBottom: "15px",
      textAlign: "left",
    },
    inputWrapper: {
      display: "flex",
      alignItems: "center",
      background: "rgba(255, 255, 255, 0.3)",
      backdropFilter: "blur(6px)",
      padding: "14px",
      borderRadius: "12px",
      border: "1px solid rgba(255, 255, 255, 0.6)",
    },
    input: {
      width: "100%",
      background: "transparent",
      border: "none",
      color: "#fff",
      outline: "none",
      fontSize: "16px",
      fontWeight: "500",
    },
    passwordIcon: {
      cursor: "pointer",
      color: "#fff",
      marginLeft: "10px",
    },
    buttonWrapper: {
      marginTop: "2rem",
    },
    loginButton: {
      width: "100%",
      background: "linear-gradient(135deg, #498169, #2e6596)",
      color: "#fff",
      border: "none",
      padding: "1rem",
      borderRadius: "12px",
      cursor: "pointer",
      fontSize: "18px",
      fontWeight: "bold",
      transition: "all 0.3s ease-in-out",
      boxShadow: "0 5px 12px rgba(0, 0, 0, 0.3)",
    },
    loginButtonHover: {
      background: "#3b6d87",
      transform: "scale(1.06)",
    },
    signupText: {
      marginTop: "1.5rem",
      textAlign: "center",
      fontSize: "14px",
      fontWeight: "600",
      color: "#fff",
    },
    signupLink: {
      color: "#fff",
      fontWeight: "bold",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.loginBox} className="logincon">
          <h2 style={{ color: "#fff" }}>Sign-In</h2>
          <br/>
          <div style={styles.toggleWrapper}>
            <button
              style={styles.toggleButton(loginMethod === "userid")}
              onClick={() => setLoginMethod("userid")}
            >
              <IdCard size={16} /> User ID
            </button>
            <button
              style={styles.toggleButton(loginMethod === "aadhaar")}
              onClick={() => setLoginMethod("aadhaar")}
            >
              <Fingerprint size={16} /> Aadhaar ID
            </button>
          </div>
          <form>
            <div style={styles.formGroup}>
              <label style={{ color: "#fff", fontSize: "14px", fontWeight: "bold" }}>
                {loginMethod === "userid" ? "User ID" : "Aadhaar ID"}
              </label>
              <div style={styles.inputWrapper}>
                <User size={16} color="white" style={{ marginRight: "12px" }} />
                <input
                  type="text"
                  placeholder={loginMethod === "userid" ? "Enter your User ID" : "Enter your Aadhaar ID"}
                  style={styles.input}
                />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={{ color: "white", fontSize: "14px", fontWeight: "bold" }}>Password</label>
              <div style={styles.inputWrapper}>
                <Lock size={16} color="white" style={{ marginRight: "12px" }} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  style={styles.input}
                />
                <span
                  style={styles.passwordIcon}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} color="#fff" /> : <Eye size={16} color="#fff" />}
                </span>
              </div>
            </div>
            <div style={styles.buttonWrapper}>
              <button
                style={styles.loginButton}
                onMouseEnter={(e) => (e.target.style.background = styles.loginButtonHover.background)}
                onMouseLeave={(e) => (e.target.style.background = styles.loginButton.background)}
                type="submit"
              >
                <LogIn size={16} /> Login
              </button>
            </div>
          </form>
          <p style={styles.signupText}>
            New user? <a href="#" style={styles.signupLink}>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
