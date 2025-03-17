"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function Slide() {
  const [sliderImages, setSliderImages] = useState([]);
  const [editingImage, setEditingImage] = useState(null);
  const [newImageFile, setNewImageFile] = useState(null);

  useEffect(() => {
    fetchSliderImages();
  }, []);

  const fetchSliderImages = async () => {
    try {
      const res = await fetch("/api/slider");
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      const data = await res.json();
      if (!Array.isArray(data)) throw new Error("Invalid JSON format received");

      setSliderImages(data);
    } catch (error) {
      console.error("Error fetching images:", error.message);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this image?")) {
      try {
        await fetch(`/api/slider?id=${id}`, { method: "DELETE" });
        setSliderImages(sliderImages.filter((image) => image.id !== id));
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }
  };

  const handleEdit = (image) => {
    setEditingImage(image);
    setNewImageFile(null);
  };

  const handleSaveEdit = async () => {
    if (!editingImage || !newImageFile) {
        console.error("Error: Missing editingImage or newImageFile");
        return;
    }
    const formData = new FormData();
    formData.append("file", newImageFile);
    try {
        const uploadRes = await fetch("/api/slider", { 
            method: "POST",
            body: formData,
        });

        if (!uploadRes.ok) {
            throw new Error(`Upload failed: ${uploadRes.status}`);
        }
        const uploadData = await uploadRes.json();
        console.log("Upload Response:", uploadData); 

        if (!uploadData.imageUrl) {
            throw new Error("Upload response missing imageUrl");
        }
        console.log("Updating with:", { id: editingImage.id, image_url: uploadData.imageUrl });
        const updateRes = await fetch(`/api/slider?id=${editingImage.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: editingImage.id, image_url: uploadData.imageUrl }),
        });

        if (!updateRes.ok) {
            throw new Error(`Update failed: ${updateRes.status}`);
        }
        setSliderImages(
            sliderImages.map((img) =>
                img.id === editingImage.id ? { ...img, image_url: uploadData.imageUrl } : img
            )
        );

        setEditingImage(null);
    } catch (error) {
        console.error("Error updating image:", error);
    }
};




  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ marginLeft: "270px", width: "100%", padding: "20px" }}>
        <button style={viewSiteButtonStyle}>View Site</button>

        <div className="container">
          <div className="row mb-4">
            {sliderImages.map((image) => (
              <div key={image.id} className="col-md-4 text-center">
                <Image src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}${image.image_url}`} alt="Slider Image" width={400} height={400} className="img-fluid" />
                <div>
                  <button className="btn text-light mt-2 me-2" style={{ backgroundColor: "#615c9f" }} onClick={() => handleEdit(image)}>
                    Edit
                  </button>
                  <button className="btn text-light mt-2" style={{ backgroundColor: "black" }} onClick={() => handleDelete(image.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {editingImage && (
          <div style={modalStyle}>
            <div style={modalContentStyle}>
              <h3>Edit Image</h3>
              <input type="file" accept="image/*" onChange={(e) => setNewImageFile(e.target.files[0])} style={fileInputStyle} />
              <div style={{ marginTop: "10px" }}>
                <button style={{ ...saveButtonStyle, marginRight: "10px" }} onClick={handleSaveEdit}>
                  Save
                </button>
                <button style={deleteButtonStyle} onClick={() => setEditingImage(null)}>
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
  border: "none",
  borderRadius: "5px",
  color: "black",
  fontSize: "16px",
  fontWeight: "bold",
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
};

const deleteButtonStyle = {
  backgroundColor: "red",
  color: "white",
  padding: "8px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
};

const fileInputStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  fontSize: "16px",
  outline: "none",
  cursor: "pointer",
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
};

const modalContentStyle = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "15px",
  textAlign: "center",
  width: "500px",
  maxWidth: "90%",
};

export default Slide;
