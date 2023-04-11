export async function getCourse() {
    const response = await fetch(`${process.env.API_URL}/course?populate=image`);
    return await response.json();
}