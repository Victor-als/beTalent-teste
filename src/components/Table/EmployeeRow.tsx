import { useState } from "react";
import chevronUp from "../../assets/chevron-up.svg";
import chevronDown from "../../assets/chevron-down.svg";

interface Employee {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

interface EmployeeRowProps {
  employee: Employee;
  formatPhoneNumber: (phone: string) => string;
  isMobile: boolean;
}

export default function EmployeeRow({ employee, formatPhoneNumber, isMobile }: EmployeeRowProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleRow = () => {
    if (isMobile) setExpanded((prev) => !prev);
  };

  return (
    <>
      <tr onClick={toggleRow}>
        <td>
          <img src={employee.image} alt={employee.name} />
        </td>
        <td>{employee.name}</td>
        <td className="hide-mobile">{employee.job}</td>
        <td className="hide-mobile">
          {new Date(employee.admission_date).toLocaleDateString("pt-BR")}
        </td>
        <td className="hide-mobile">{formatPhoneNumber(employee.phone)}</td>
        <td className="arrow-cell">
          <span>
            <img
              className="icon-img"
              src={expanded ? chevronUp : chevronDown}
              alt="seta"
            />
          </span>
        </td>
      </tr>

      {expanded && (
        <tr className="dropdown-row">
          <td colSpan={6}>
            <span className="dropdown-content">
              <strong>Cargo:</strong> {employee.job}
            </span>
            <span className="dropdown-content">
              <strong>Data de Admissão:</strong>{" "}
              {new Date(employee.admission_date).toLocaleDateString("pt-BR")}
            </span>
            <span className="dropdown-content">
              <strong>Telefone:</strong> {formatPhoneNumber(employee.phone)}
            </span>
          </td>
        </tr>
      )}
    </>
  );
}