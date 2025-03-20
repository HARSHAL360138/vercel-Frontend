import { useState, useEffect } from "react";

export default function CompanyForm({ onSubmit, editCompany }) {
    const [formData, setFormData] = useState({
        name: "", surname: "", age: "", city: "", mobile_no: "", courses: ""
    });

    // Load data when editing
    useEffect(() => {
        if (editCompany) {
            setFormData(editCompany);
        } else {
            setFormData({ name: "", surname: "", age: "", city: "", mobile_no: "", courses: "" });
        }
    }, [editCompany]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...formData, courses: formData.courses.split(",") });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 space-y-2">
            <input className="p-2 border" type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            <input className="p-2 border" type="text" placeholder="Surname" value={formData.surname} onChange={(e) => setFormData({ ...formData, surname: e.target.value })} required />
            <input className="p-2 border" type="number" placeholder="Age" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} required />
            <input className="p-2 border" type="text" placeholder="City" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} required />
            <input className="p-2 border" type="text" placeholder="Mobile No" value={formData.mobile_no} onChange={(e) => setFormData({ ...formData, mobile_no: e.target.value })} required />
            <input className="p-2 border" type="text" placeholder="Courses (comma separated)" value={formData.courses} onChange={(e) => setFormData({ ...formData, courses: e.target.value })} required />
            <button className="p-2 bg-blue-500 text-white" type="submit">{editCompany ? "Update" : "Add"} Company</button>
        </form>
    );
}
