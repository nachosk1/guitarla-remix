export async function getGuitars() {
    const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
    return result = await response.json();
}