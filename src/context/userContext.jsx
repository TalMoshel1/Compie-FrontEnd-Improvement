import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const UserContext = createContext({
  photos: [],
  addComment: () => {return }
});


const UserProvider = ({ children }) => {
  const navigate = useNavigate(); // redirect to other components
  const location = useLocation(); // react router hook
  const [photos, setPhotos] = useState(null);

  async function fetchData() {
    let returnedData;
    fetch("http://localhost:3000/api/photo")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((res) => {
        returnedData = res;
      })
      .catch((error) => {
        console.error(error);
      });

    return returnedData;
  }

  function addComment(_id, comment, user) {
    axios
      .put("http://localhost:3000/api/photo", {
        _id: _id,
        comment: comment,
        user: user,
      })
      .then((res) => {
        return res.json();
      })
      .then(res)

      .catch((error) => {
        console.error("Error updating photo:", error);
        // Handle error response here
      });
  }

  useEffect(() => {
    setPhotos(fetchData());
  }, []);

  return (
    <UserContext.Provider value={{ photos: photos, addComment }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
