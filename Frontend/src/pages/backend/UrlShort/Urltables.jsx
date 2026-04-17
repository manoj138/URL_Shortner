import React, { useEffect, useState } from "react";
import Table from "../../../components/common/Table";
import { Api, handleApiError } from "../../../components/common/Api/api";
import Button from "../../../components/common/Button";

const Urltables = () => {
  const [urls, setUrls] = useState([]);

  // 🔹 Fetch all URLs
  const fetchUrls = async () => {
    try {
      const res = await Api.get("/url");
      setUrls(res.data.data);
    } catch (error) {
      handleApiError(error);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  // 🔹 Delete URL
  const handleDelete = async (id) => {
    try {
      await Api.delete(`/url/${id}`);
      fetchUrls(); // refresh table
    } catch (error) {
      handleApiError(error);
    }
  };

  // 🔹 Table columns (Clicks removed ❌)
  const columns = [
    {
      header: "Original URL",
      accessor: "originalUrl",
    },
    {
      header: "Short URL",
      accessor: "shortCode",
      render: (val) => {
        const shortUrl = `http://localhost:4000/${val}`;
        return (
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
        );
      },
    },
    {
      header: "Actions",
      accessor: "_id",
      render: (id) => (
        <Button onClick={() => handleDelete(id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>All URLs</h2>

      <Table
        columns={columns}
        data={urls}
        hoverable
        striped
      />
    </div>
  );
};

export default Urltables;