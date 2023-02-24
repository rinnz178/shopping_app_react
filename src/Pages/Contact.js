import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const Contact = () => {
  const [data, setData] = useState([]);
  const onFetch = useCallback(() => {
    const { limit, start } = {
      limit: "24",
      start: "0",
    };
    const headers = {
      "X-RapidAPI-Key": "fc1240834fmsh41d297db09a1647p13c14djsnd74a9d5d7eb1",
      "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
    };
    axios
      .get(
        `https://yummly2.p.rapidapi.com/feeds/list?limit${limit}&start=${start}`,
        {
          headers,
        }
      )
      .then((res) => {
        setData(res.data.feed);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    onFetch();
  }, []);
  return (
    <div style={{ minHeight: "85vh" }}>
      <div>
        {data.map((d, index) => {
          return <div key={index}>{d.display.displayName}</div>;
        })}
      </div>
    </div>
  );
};

export default Contact;
