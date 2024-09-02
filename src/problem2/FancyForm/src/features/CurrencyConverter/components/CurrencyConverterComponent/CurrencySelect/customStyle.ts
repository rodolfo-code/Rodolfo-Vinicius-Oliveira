export const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "transparent",
    borderColor: "transparent",
    boxShadow: "none",
    minHeight: "auto",
    "&:hover": {
      borderColor: "transparent",
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    marginLeft: 0,
  }),
  input: (provided: any) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    padding: 0,
  }),

  menuList: (provided: any) => ({
    ...provided,
    padding: 0,
    width: "auto",
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: "0.5rem",
    width: "160%",
    transform: "translateX(-28%)", // Alternativa para mover 20% para a esquerda
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? "rgb(209 213 219)" : "white",
    color: "rgb(75 85 99)",
    "&:hover": {
      backgroundColor: "rgb(243 244 246)",
    },
  }),
};
