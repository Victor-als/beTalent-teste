import { useEffect, useState } from "react";
import "./style.css";
import EmployeeRow from "./EmployeeRow";

interface Employees {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

interface ITableProps {
  employees: Employees[];
  formatPhoneNumber: (phone: string) => string;
}

export default function Table({ employees, formatPhoneNumber }: ITableProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [loading, setLoading] = useState(true); 
  const [filteredEmployees, setFilteredEmployees] = useState<Employees[]>(employees);

  useEffect(() => {
     const handleResize = () => {
       setIsMobile(window.innerWidth < 768);
     };

     handleResize();
     window.addEventListener("resize", handleResize);

     return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setLoading(true);
    const delay = setTimeout(() => {
      setFilteredEmployees(employees);
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(delay);
  }, [employees]);
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>FOTO</th>
          <th>NOME</th>
          <th className="hide-mobile">CARGO</th>
          <th className="hide-mobile">DATA DE ADMISSÃO</th>
          <th className="hide-mobile">TELEFONE</th>
          <th className="circle arrow-header">•</th>
        </tr>
      </thead>
      <tbody className="scrollable-body">
        {loading ? (
          <tr>
            <td colSpan={6}>
              <div className="loading-row">
                <div className="spinner"></div>
              </div>
            </td>
          </tr>
        ) : filteredEmployees.length === 0 ? (
          <tr>
            <td colSpan={6} className="no-results">Nenhum funcionário encontrado</td>
          </tr>
        ) : (
          filteredEmployees.map((employee) => (
            <EmployeeRow
              key={employee.id}
              employee={employee}
              formatPhoneNumber={formatPhoneNumber}
              isMobile={isMobile}
            />
          ))
        )}
      </tbody>
    </table>
    </>
  );
}