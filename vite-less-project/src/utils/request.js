
export default async function request(props) {
  const formData = new FormData();
  formData.append('user_id', 1);
  try {
    const response = await fetch('http://localhost:5000/getMessage', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return error
  }
}