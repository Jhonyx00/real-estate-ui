import { useState } from "react";
import "./newPostPage.css";

import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useNavigate } from "react-router-dom";
function NewPostPage() {
  const [error, setError] = useState<string>("");

  const [value, setValue] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputs = Object.fromEntries(formData);

    console.log(formData);

    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price as string),
          images: images,
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom as string),
          bathroom: parseInt(inputs.bathroom as string),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
        },
        postDetail: {
          description: inputs.description,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size as string),
          school: parseInt(inputs.school as string),
          bus: parseInt(inputs.bus as string),
          restaurant: parseInt(inputs.restaurant as string),
        },
      });
      navigate("/" + res.data.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="new-post-page">
      <div className="form-container">
        <h2>Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="item">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </div>
          <div className="item">
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price" />
          </div>
          <div className="item">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" />
          </div>
          <div className="item description">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="item">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" />
          </div>
          <div className="item">
            <label htmlFor="bedroom">Bedroom Number</label>
            <input type="number" min={1} id="bedroom" name="bedroom" />
          </div>
          <div className="item">
            <label htmlFor="bathroom">Bathroom Number</label>
            <input type="number" min={1} id="bathroom" name="bathroom" />
          </div>
          <div className="item">
            <label htmlFor="latitude">Latitude</label>
            <input type="text" id="latitude" name="latitude" />
          </div>
          <div className="item">
            <label htmlFor="longitude">Longitude</label>
            <input type="text" id="longitude" name="longitude" />
          </div>
          <div className="item">
            <label htmlFor="type">Types</label>
            <select name="type" id="type">
              <option value="rent" defaultChecked>
                Rent
              </option>
              <option value="buy">Buy</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="property">Property</label>
            <select name="property" id="property">
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>

          <div className="item">
            <label htmlFor="utilities">Utilities Policy</label>
            <select name="utilities" id="utilities">
              <option value="owner">Owner is responsible</option>
              <option value="tenant">Tenant is responsible</option>
              <option value="shared">Shared</option>
            </select>
          </div>

          <div className="item">
            <label htmlFor="pet">Pet Policy</label>
            <select name="pet" id="pet">
              <option value="allowed">Allowed</option>
              <option value="not-allowed">Not Allowed</option>
            </select>
          </div>

          <div className="item">
            <label htmlFor="income">Income Policy</label>
            <input type="text" id="income" name="income" />
          </div>

          <div className="item">
            <label htmlFor="size">Total Size (sqft/m2)</label>
            <input type="number" min={0} id="size" name="size" />
          </div>

          <div className="item">
            <label htmlFor="school">School (distance)</label>
            <input type="number" min={0} id="school" name="school" />
          </div>

          <div className="item">
            <label htmlFor="bus">Bus (distance)</label>
            <input type="number" min={0} id="bus" name="bus" />
          </div>

          <div className="item">
            <label htmlFor="restaurant">Restaurant (distance)</label>
            <input type="number" min={0} id="restaurant" name="restaurant" />
          </div>

          <button className="send-button">Add</button>

          {error && <span className="error">{error}</span>}
        </form>
      </div>
      <div className="side-container">
        <UploadWidget
          multiple={true}
          currentImage={images}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPostPage;
