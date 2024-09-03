import { useEffect, useState } from "react";
import axios from "axios";

function Form() {
  // State variables for form inputs
  const [name, setName] = useState("anup");
  const [email, setEmail] = useState("aanup@gmail.com");
  const [password, setPassword] = useState("asdasdasddas");

  // State variables for validation messages
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Helper function to validate email format
  //   const validateEmail = (email) => {
  //     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     return re.test(String(email).toLowerCase());
  //   };

  useEffect(() => {
    console.log("first render");

    return () => {
      console.log("cleaning up");
    };
  }, []);

  // Helper function to validate password strength
  const validatePassword = (password) => {
    return password.length >= 8;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    // Reset validation messages
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setSuccessMessage("");

    // Validate name
    if (name.trim() === "") {
      setNameError("Name is required.");
      valid = false;
    }

    // Validate email
    // if (!validateEmail(email)) {
    //   setEmailError("Please enter a valid email address.");
    //   valid = false;
    // }

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters long.");
      valid = false;
    }

    // If all inputs are valid, submit the form
    if (valid) {
      const formData = { name, email, password };

      try {
        // API call using axios
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          formData
        );

        console.log(response);

        // Handle the response
        if (response.status === 200) {
          setSuccessMessage("Registration successful!");
        } else {
          setSuccessMessage("Registration failed. Please try again.");
        }
      } catch (error) {
        // Handle error cases
        setSuccessMessage("Registration failed. Please try again.");
        console.error("There was an error!", error);
      }
    }
  };

  // Mock API call function
  const mockApiCall = (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success response
        resolve("Success");
      }, 5000);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "10px 10px",
      }}
    >
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p style={{ color: "red" }}>{nameError}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
}

export default Form;
