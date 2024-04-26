export async function deleteUser(id) {
  // const urlApiDelete = `http://localhost:3000/users/${id}`;
  const urlApiDelete = `https://my-json-server.typicode.com/MejiaLuigi/Challenge_v3.0_Globant/users/${id}`;

  const peticonDelete = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  try {
    const deleteResponse = await fetch(urlApiDelete, peticonDelete);
    console.log(deleteResponse);
    if (deleteResponse.ok) {
      return id;
    } else {
      console.log("error");
    }
  } catch (error) {
    throw error;
  }
}
