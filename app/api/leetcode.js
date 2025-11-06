// pages/api/leetcode.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    const query = `
      {
        matchedUser(username: "samarpitnandanwar") {
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
    `;

    const response = await axios.post("https://leetcode.com/graphql", {
      query,
    });

    const data = response.data.data.matchedUser.submitStats.acSubmissionNum;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
}
