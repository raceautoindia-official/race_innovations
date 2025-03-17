    "use client"; 
    import React, { useState, useEffect } from "react";
    import Image from "next/image";
    import Link from "next/link";
    import {
    MdDashboard,
    MdArticle,
    MdAssessment,
    MdImage,
    MdAttachMoney,
    MdHome,
    MdSettings,
    } from "react-icons/md";

    const NavItem = ({ href, icon, text, isCollapsed }) => (
    <li style={navItemStyle}>
        <Link href={href} style={linkStyle}>
        <span style={iconStyle}>{icon}</span>
        {!isCollapsed && <span style={{ color: "black", fontWeight: "500" }}>{text}</span>}
        </Link>
    </li>
    );

    function Report() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={{ display: "flex", width: "100%" }}>
       

        <div style={{ marginLeft: "270px", width: "100%", padding: "20px" }}>
            <div style={buttonContainerStyle}>
            <button style={viewSiteButtonStyle}>View Site</button>
            <button style={addBlogButtonStyle}>Add Report</button>
            </div>
            {[1, 2].map((_, idx) => (
            <div key={idx} className="container">
                <div className="card" style={cardStyle}>
                <div className="row align-items-center">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                    {[
                        {
                        label: "Company Name",
                        value: "Impact of GST on Logistics Sector",
                        },
                        {
                        label: "Project Name",
                        value: "Impact of GST on Logistics Sector",
                        },
                        { label: "Date Of Survey", value: "12/07/2025" },
                        {
                        label: "End Clients",
                        value: "Impact of GST on Logistics Sector",
                        },
                    ].map((item, index) => (
                        <div
                        key={index}
                        style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                        }}
                        >
                        <p>
                            <strong>{item.label}:</strong>
                        </p>
                        <p>{item.value}</p>
                        </div>
                    ))}
                    </div>
                    <div className="col-md-6 text-end">
                    <div style={dimensionContainerStyle}>
                        <p>
                        <strong>Dimension:</strong>
                        </p>
                        {["Width", "Height", "Weight", "Length"].map(
                        (dim, index) => (
                            <div key={index} style={dimensionInputStyle}>
                            <label>{dim}</label>
                            <input type="text" style={inputStyle} />
                            </div>
                        )
                        )}
                    </div>

                    <div style={actionContainerStyle}>
                        {["From", "To"].map((field, index) => (
                        <div key={index} style={dimensionInputStyle}>
                            <label>
                            <strong>{field}:</strong>
                            </label>
                            <input type="text" style={inputStyle} />
                        </div>
                        ))}
                        <button style={editButtonStyle}>Edit</button>
                        <button
                        style={{ ...editButtonStyle, backgroundColor: "#2C75BD" }}
                        >
                        Modify
                        </button>
                        <button style={deleteButtonStyle}>Delete</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            ))}

            {/* Save Changes Button */}
            <button style={saveButtonStyle}>Add Partnership</button>
            <button className="me-4" style={saveButtonStyle}>
            Save Changes
            </button>
        </div>
        </div>
    );
    }

    const sidebarStyle = {
    height: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "15px",
    boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    position: "fixed",
    left: "0",
    top: "0",
    };

    const navItemStyle = {
    textAlign: "center",
    transition: "0.3s",
    cursor: "pointer",
    };

    const iconStyle = { fontSize: "20px", color: "black" };
    const linkStyle = {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    borderRadius: "10px",
    width: "100%",
    };
    const buttonContainerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "10px",
        marginBottom: "20px",
    };
    const viewSiteButtonStyle = {
        backgroundColor: "#f0b249",
        padding: "10px 20px",
        borderRadius: "5px",
        color: "black",
        fontWeight: "bold",
        cursor: "pointer",
    };
    const addBlogButtonStyle = {
        backgroundColor: "#013f7c",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        fontWeight: "bold",
        cursor: "pointer",
    };
    const cardStyle = {
        backgroundColor: "#f5f5f5",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
    };
    const dimensionContainerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "10px",
    };
    const dimensionInputStyle = {
        display: "flex",
        alignItems: "center",
        gap: "5px",
    };
    const inputStyle = { 
        width: "60px", 
        padding: "5px" 
    };
    const actionContainerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "15px",
        marginTop: "10px",
    };
    const editButtonStyle = {
        backgroundColor: "#615c9f",
        padding: "8px 12px",
        borderRadius: "5px",
        color: "white",
        border: "none",
        cursor: "pointer",
    };
    const deleteButtonStyle = {
        backgroundColor: "black",
        padding: "8px 12px",
        borderRadius: "5px",
        color: "white",
        border: "none",
        cursor: "pointer",
    };
    const saveButtonStyle = {
        backgroundColor: "#013f7c",
        color: "white",
        padding: "8px 12px",
        marginTop: "20px",
        borderRadius: "5px",
        cursor: "pointer",
        float: "right",
        border: "none",
        fontWeight: "bold",
    };
    const headerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "20px",
    };
    
    const logoContainerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "10px 0",
    };
    
    const logoTextStyle = {
        marginLeft: "10px",
        fontSize: "18px",
        fontWeight: "bold",
        color: "#333",
    };
    
    const profileImageStyle = {
        borderRadius: "50%",
    };
    
    const adminNameStyle = {
        margin: "10px 0 5px",
        fontSize: "16px",
        fontWeight: "bold",
        color: "#333",
    };   
                
    export default Report;
