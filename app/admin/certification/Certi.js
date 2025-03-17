"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Client() {
  const pathname = usePathname();
  const [images, setImages] = useState([]);
  const [editingImage, setEditingImage] = useState(null);
  const [newImageFile, setNewImageFile] = useState(null);
  const [isAdding, setIsAdding] = useState(false); // ✅ Added state

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch("/api/certification");
      if (!response.ok) throw new Error("Failed to fetch images");
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleEdit = (image) => {
    setEditingImage(image);
    setNewImageFile(null);
  };

  const handleFileChange = (event) => {
    setNewImageFile(event.target.files[0]);
  };

  const handleSaveEdit = async () => {
    if (!editingImage || !newImageFile) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("file", newImageFile);

    try {
      const uploadRes = await fetch("/api/certification", {
        method: "POST",
        body: formData,
      });

      if (!uploadRes.ok) throw new Error(`Upload failed: ${uploadRes.status}`);

      const uploadData = await uploadRes.json();
      if (!uploadData.imageUrl)
        throw new Error("Upload response missing imageUrl");

      const updateRes = await fetch("/api/certification", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingImage.id,
          image_url: uploadData.imageUrl,
        }),
      });

      if (!updateRes.ok) throw new Error(`Update failed: ${updateRes.status}`);

      setImages(
        images.map((img) =>
          img.id === editingImage.id
            ? { ...img, image_url: uploadData.imageUrl }
            : img
        )
      );

      setEditingImage(null);
    } catch (error) {
      console.error("Error updating image:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      const response = await fetch(`/api/certification?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete image");

      alert("Image deleted successfully!");
      fetchImages();
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Error deleting image. Please try again.");
    }
  };

  const handleAddClient = async (event) => {
    event.preventDefault();

    if (!newImageFile) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", newImageFile);

    try {
      const uploadRes = await fetch("/api/certification", {
        method: "POST",
        body: formData,
      });

      if (!uploadRes.ok) throw new Error("Upload failed");

      const uploadData = await uploadRes.json();
      if (!uploadData.imageUrl)
        throw new Error("Upload response missing imageUrl");

      alert("Client added successfully!");
      fetchImages();
      setNewImageFile(null);
      setIsAdding(false); 
    } catch (error) {
      console.error("Error adding client:", error);
      alert("Error adding client. Please try again.");
    }
  };

  const settingsMenu = [
    { name: "Slider", path: "/admin/" },
    { name: "Partnership", path: "/admin/partner" },
    { name: "Clients", path: "/admin/clients" },
    { name: "Testimonial", path: "/admin/testimonials" },
    { name: "Certification", path: "/admin/funding/settings/" },
  ];

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ marginLeft: "270px", width: "100%", padding: "20px" }}>
        <button style={viewSiteButtonStyle}>View Site</button>

        <div className="container">
          <ul style={settingsMenuStyle}>
            {settingsMenu.map((item) => (
              <li key={item.path} style={listItemStyle}>
                <Link
                  href={item.path}
                  style={pathname === item.path ? activeLinkStyle : linkStyle}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button style={saveButtonStyle} onClick={() => setIsAdding(true)}>
            Add Certification
          </button>

          <div className="row">
            {images.map((image) => (
              <div className="col-md-4 text-center" key={image.id}>
                <div
                  style={{
                    backgroundColor: "#6c757d",
                    padding: "15px",
                    borderRadius: "10px",
                  }}
                >
                  <Image
                   src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}${image.image_url}`}
                    alt="Client"
                    width={400}
                    height={400}
                    className="img-fluid"
                  />
                </div>
                <div>
                  <button
                    className="btn text-light mt-2 me-2"
                    style={{ backgroundColor: "#615c9f" }}
                    onClick={() => handleEdit(image)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn text-light mt-2"
                    style={{ backgroundColor: "black" }}
                    onClick={() => handleDelete(image.id)}
                  >
                    Delete
                  </button>
                 
                </div>
              </div>
            ))}
          </div>
        </div>

        {(isAdding || editingImage) && (
          <div
            style={modalStyle}
            onClick={() => {
              setIsAdding(false);
              setEditingImage(null);
            }}
          >
            <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
              <h3>{editingImage ? "Edit Image" : "Add Client Image"}</h3>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={fileInputStyle}
              />
               <div style={{ marginTop: "10px" }}>
                <button
                  style={{ ...saveButtonStyle, marginRight: "10px" }}
                  onClick={editingImage ? handleSaveEdit : handleAddClient}
                >
                  {editingImage ? "Save" : "Upload"}
                </button>
                <button
                  style={deleteButtonStyle}
                  onClick={() => {
                    setIsAdding(false);
                    setEditingImage(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Styles
const viewSiteButtonStyle = {
  backgroundColor: "#f0b249",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  marginBottom: "20px",
  display: "block",
  marginLeft: "auto",
};
const saveButtonStyle = {
  backgroundColor: "#013f7c",
  color: "white",
  padding: "8px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  float: "right",
};
const modalStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "9999",
};
const modalContentStyle = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "15px",
  textAlign: "center",
  width: "500px",
  maxWidth: "90%",
};
const fileInputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ddd",
};
const deleteButtonStyle = {
  backgroundColor: "red",
  color: "white",
  padding: "8px 15px",
  borderRadius: "5px",
  cursor: "pointer",
};
const settingsMenuStyle = {
  display: "flex",
  flexWrap: "wrap",
  listStyle: "none",
  padding: "0",
  margin: "0",
};
const listItemStyle = { 
  textAlign: "center", 
  padding: "10px", 
  color: "black" 
};
const linkStyle = {
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "10px",
  padding: "10px",
  borderRadius: "10px",
  width: "100%",
  color: "black", // Ensure text is visible
};
const activeLinkStyle = {
  textDecoration: "none",
  padding: "10px 15px",
  borderRadius: "5px",
  backgroundColor: "#615c9f",
  fontWeight: "bold",
  color: "white",
};

export default Client;
