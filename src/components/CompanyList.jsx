export default function CompanyList({ companies, onDelete, onEdit }) {
    return (
        <div className="p-4">
            {companies.map((company) => (
                <div key={company._id} className="border p-4 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold">{company.name} {company.surname}</h2>
                        <p>Age: {company.age}, City: {company.city}</p>
                        <p>Mobile: {company.mobile_no}</p>
                        <p>Courses: {company.courses.join(", ")}</p>
                    </div>
                    <div className="space-x-2">
                        <button className="p-2 bg-green-500 text-white" onClick={() => onEdit(company)}>Edit</button>
                        <button className="p-2 bg-red-500 text-white" onClick={() => onDelete(company._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
