
import axios from "axios";

export const getArticles = async () => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5d8b7e7ec17844138b9970e9d95b30ca"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// export const getPostById = async (id) => {
//   try {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts/${id}`
//     );

//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };