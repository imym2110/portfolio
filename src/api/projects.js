import { collection, getDocs, query } from "firebase/firestore";
import { FirebaseApp } from "../utils/firebase";

export class ProjectsAPI {
  static async fetchAll() {
    const response = await getDocs(
      query(collection(FirebaseApp.db, "projects"))
    );
    return response.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  }
}
