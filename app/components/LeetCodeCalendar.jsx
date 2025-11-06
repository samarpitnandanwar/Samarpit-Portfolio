// components/LeetCodeCalendar.jsx
"use client"; // This line makes the component run on the client side

import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import axios from "axios";

const LeetCodeCalendar = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Fetch the submission data from the API
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get("/api/leetcode");
        const data = response.data;

        // Prepare data for the heatmap
        const formattedData = data.map((submission) => ({
          date: submission.date,
          count: submission.count,
        }));

        setSubmissions(formattedData);
      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div>
      <h2>LeetCode Submissions Calendar</h2>
      <CalendarHeatmap
        startDate={
          new Date(new Date().setFullYear(new Date().getFullYear() - 1))
        }
        endDate={new Date()}
        values={submissions}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${Math.min(value.count, 4)}`;
        }}
      />
      <style jsx>{`
        .color-empty {
          fill: #ebedf0;
        }
        .color-scale-1 {
          fill: #c6e48b;
        }
        .color-scale-2 {
          fill: #7bc96f;
        }
        .color-scale-3 {
          fill: #239a3b;
        }
        .color-scale-4 {
          fill: #196127;
        }
      `}</style>
    </div>
  );
};

export default LeetCodeCalendar;
