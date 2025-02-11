import * as React from "react";

// Corrected function name
function fetchUser () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Item 1", "Item 2", "Item 3"]);
    }, 1000); 
  });
}

function UnorderedList() {
  const [items, setItems] = React.useState([]); 
  const [loading, setLoading] = React.useState(true); 
  const [error, setError] = React.useState(null); 

  // Added dependency array to useEffect
  React.useEffect(() => {
    fetchUser ()
      .then((data) => {
        setItems(data); 
        setLoading(false); 
      })
      .catch((err) => {
        setError("Failed to fetch data"); 
        setLoading(false); 
      });
  }, []); // Added missing closing parenthesis

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>{error}</p>; 
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default UnorderedList;