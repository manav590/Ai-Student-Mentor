import React, { useState } from "react";
import axios from "axios";

function InfoCollect({ onProfileCreated }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    course: "",
    semester: "",
    college: "",
    email: "",
    phone: ""
  });

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});
  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/complete-profile", form, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
    if (onProfileCreated) onProfileCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Full Name" onChange={handleChange} required />
      <input name="age" placeholder="Age" type="number" onChange={handleChange} required />
      <input name="gender" placeholder="Gender" onChange={handleChange} />
      <input name="course" placeholder="Course/Stream" onChange={handleChange} required />
      <input name="semester" placeholder="Semester/Year" onChange={handleChange} required />
      <input name="college" placeholder="College/School" onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} readOnly />
      <input name="phone" placeholder="Phone (optional)" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InfoCollect;
