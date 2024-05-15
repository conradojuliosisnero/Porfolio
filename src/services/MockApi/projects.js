import { mockUrls } from "./urls";

export default async function getProjects(setError, setProjects, setLoading) {
  try {
    const response = await fetch(mockUrls.projects.all);
    if (response.ok) {
      const data = await response.json();
      setProjects(data);
    } else {
      setError("Error al obtener la data");
    }
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}
