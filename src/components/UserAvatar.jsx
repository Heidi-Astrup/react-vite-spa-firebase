import { useState, useEffect } from "react";

export default function UserAvatar({ uid }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUser() {
      const url =
        "https://firstfirebase-7cec2-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json";
      const response = await fetch(url);
      const data = await response.json();
      console.log("User data:", data);
      setUser(data);
    }
    getUser();
  }, [uid]);

  return (
    <section>
      <p>
        User {user.name} info kommer her (uid: {uid}){" "}
      </p>
    </section>
  );
}
