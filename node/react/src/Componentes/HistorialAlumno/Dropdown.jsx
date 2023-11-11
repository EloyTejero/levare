import Select from "react-select";

const Dropdown = () => {
  const options = [
    { value: "aprobado", label: "Aprobado" },
    { value: "desaprobado", label: "Desaprobado" }
  ];
  return (
    <>
    <div className="dropdown" >
      <Select options={options} placeholder="Seleccionar" />
      </div>
    </>
  );
};
export default Dropdown;
