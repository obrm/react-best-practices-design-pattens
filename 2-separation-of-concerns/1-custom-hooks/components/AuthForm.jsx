import React from "react";
import useForm from "../hooks/useForm";

function AuthForm({ isLogin }) {
  const initialValues = { username: "", email: "", password: "" };
  const [values, handleChange, resetForm] = useForm(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    resetForm();
  };

  const inputs = [
    {
      label: 'User name',
      type: "text",
      name: "username",
      value: values.username,
      onChange: handleChange,
    },
    {
      label: 'Email',
      type: "email",
      name: "email",
      value: values.email,
      onChange: handleChange,
    },
    {
      label: 'Password',
      type: "password",
      name: "password",
      value: values.password,
      onChange: handleChange,
    }
  ];

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => {
        const { label, type, name, value, onChange } = input;
        if (isLogin && label === 'User name') return null;
        return (
          <>
            <label htmlFor="username">{label}</label>
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
            />
          </>
        );
      })}
      <button type="submit">Register</button>
    </form>
  );
}

export default AuthForm;
