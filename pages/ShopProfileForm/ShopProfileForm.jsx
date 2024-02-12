import React, { useState } from "react";
import { AiOutlineShop } from "react-icons/ai"; // Import your icons

// Assume SubMenu component is defined somewhere
const SubMenu = ({ data }) => {
  // Implement your SubMenu component
  return (
    <div>
      <h3>{data.name}</h3>
      {/* Add more logic based on your SubMenu requirements */}
    </div>
  );
};

const ShopProfileForm = () => {
  const [formData, setFormData] = useState({
    logo: "",
    name: "",
    description: "",
    contact: {
      telephone: "",
      mobile: "",
    },
    location: {
      address: "",
      landmark: "",
      street: "",
    },
    shopPhotos: [],
    shopCoverPhoto: "",
    socialLinks: {
      facebook: "",
      twitter: "",
      instagram: "",
    },
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleContactChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      contact: {
        ...prevData.contact,
        [field]: value,
      },
    }));
  };

  const handleLocationChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      location: {
        ...prevData.location,
        [field]: value,
      },
    }));
  };

  const handleSocialLinksChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      socialLinks: {
        ...prevData.socialLinks,
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log("Form submitted:", formData);
    // Reset form data if needed
    setFormData({
      logo: "",
      name: "",
      description: "",
      contact: {
        telephone: "",
        mobile: "",
      },
      location: {
        address: "",
        landmark: "",
        street: "",
      },
      shopPhotos: [],
      shopCoverPhoto: "",
      socialLinks: {
        facebook: "",
        twitter: "",
        instagram: "",
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <SubMenu data={{ name: "Shop Profile", icon: <AiOutlineShop /> }} />

      <div>
        <label>Logo:</label>
        <input
          type="text"
          value={formData.logo}
          onChange={(e) => handleChange("logo", e.target.value)}
        />
      </div>

      <div>
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>

      {/* Add more fields based on your requirements */}
      {/* Example: Description, Contact Details, Location, Photos, Cover Photo, Social Media Links */}

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ShopProfileForm;
