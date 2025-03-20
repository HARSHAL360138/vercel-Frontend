import { useEffect, useState } from "react";
import { getCompanies, createCompany, updateCompany, deleteCompany } from "./api/companyApi";
import CompanyForm from "./components/CompanyForm";
import CompanyList from "./components/CompanyList";

export default function App() {
    const [companies, setCompanies] = useState([]);
    const [editCompany, setEditCompany] = useState(null);

    useEffect(() => {
        fetchCompanies();
    }, []);

    const fetchCompanies = async () => {
        try {
            const response = await getCompanies();
            setCompanies(response.data);
        } catch (error) {
            console.error("Error fetching companies:", error);
        }
    };

    const handleAddOrUpdateCompany = async (companyData) => {
        try {
            if (editCompany) {
                await updateCompany(editCompany._id, companyData);
                setEditCompany(null);
            } else {
                await createCompany(companyData);
            }
            fetchCompanies();
        } catch (error) {
            console.error("Error saving company:", error);
        }
    };

    const handleEditCompany = (company) => {
        setEditCompany(company); // Load data into the form
    };

    const handleDeleteCompany = async (id) => {
        try {
            await deleteCompany(id);
            fetchCompanies();
        } catch (error) {
            console.error("Error deleting company:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-4">IT Companies Management</h1>
                <CompanyForm onSubmit={handleAddOrUpdateCompany} editCompany={editCompany} />
                <CompanyList companies={companies} onDelete={handleDeleteCompany} onEdit={handleEditCompany} />
            </div>
        </div>
    );
}
