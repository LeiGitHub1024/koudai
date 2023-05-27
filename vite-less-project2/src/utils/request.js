
export default async function request(formData, apiName) {
  try {
    const response = await fetch('http://localhost:5000/'+apiName, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    // console.log(data)
    return data;
  } catch (error) {
    return error
  }
}