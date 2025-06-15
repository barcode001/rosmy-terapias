export const capitalize = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};


// Example: 

// import { capitalize } from "../utils/capitalize";

// const name = "services";

// return (
// services.map(service => (
//   <div key={uuid()}>
//     <h3>{capitalize(service.name)}</h3>
//     <p>Price: {formatPrice(service.price)}</p>
//   </div>
// ));
