import { Client, Databases, ID, Query } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = "metrics";

const client = new Client()
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

const databases = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
  //1. Use Appwrite SDk to check if the search term already exists in the database
  try {
    const result = await databases.listDocuments(DATABASE_ID, TABLE_ID, [
      Query.equal("searchTerm", searchTerm),
    ]);

    //2. If it exists, update the count
    if (result.documents.length > 0 && result.documents[0].title === movie.title) {
      const doc = result.documents[0];
      await databases.updateDocument(DATABASE_ID, TABLE_ID, doc.$id, {
        count: doc.count + 1,
      });
    }
    //3. If it doesn't exist, create a new record with count = 1
    else {
      await databases.createDocument(DATABASE_ID, TABLE_ID, ID.unique(), {
        searchTerm,
        count: 1,
        movie_id: movie ? movie.id : null,
        title: movie ? movie.title : null,
        poster_url: movie ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null,
      });
    }
  } catch (error) {
    console.error("Error updating search count:", error);
  }
};

export const getTrendingMovies = async () => {
  try {
    const result = await databases.listDocuments(DATABASE_ID, TABLE_ID, [
      Query.orderDesc("count"),
      Query.limit(5),
    ]);

    return result.documents;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
}
