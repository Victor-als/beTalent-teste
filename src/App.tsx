import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import { getEmployees } from "./services/api";
import searchIcon from "./assets/search.svg"
import { formatPhoneNumber } from "./utils/format-phone-number";

interface Employees {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

function App() {
  const [employees, setEmployees] = useState<Employees[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEmployees();
      setEmployees(data);
    };

    fetchData();
  }, []);

  const removePhoneFormatting = (phone: string) => {
    return phone.replace(/\D/g, ""); 
  };

  const filteredEmployees = employees.filter((employee) => {
    const lowercasedSearchTerm = searchTerm.toLowerCase().trim();
    const phoneWithoutFormat = removePhoneFormatting(employee.phone);
    const searchWithoutFormat = removePhoneFormatting(searchTerm);
  
    if (isNaN(Number(searchTerm)) || searchTerm.trim() === "") {
      return (
        employee.name.toLowerCase().includes(lowercasedSearchTerm) ||
        employee.job.toLowerCase().includes(lowercasedSearchTerm)
      );
    }
  
    return phoneWithoutFormat.includes(searchWithoutFormat);
  });


  return (
    <>
      <Header />

      <main>
        <div className="container-input">
          <h1>Funcionários</h1>

          <div className="input-search">
            <input
              placeholder="Pesquisar"
              type="text"
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
              <img className="icon" src={searchIcon} alt="icone de lupa" />
          </div>
        </div>

        <Table employees={filteredEmployees} formatPhoneNumber={formatPhoneNumber}/>
      </main>
    </>
  );
}

export default App;
