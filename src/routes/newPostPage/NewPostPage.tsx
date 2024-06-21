import { useState } from "react";
import "./newPostPage.css";
function NewPostPage() {
  const [error, setError] = useState<boolean>(false);
  return (
    <div className="new-post-page">
      <div className="form-container">
        <h2>Add New Post</h2>
        <form>
          <div className="item">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </div>
          <div className="item">
            <label htmlFor="price">Price</label>
            <input type="text" id="price" name="price" />
          </div>
          <div className="item">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" />
          </div>
          <div className="item description">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description"></textarea>
          </div>
          <div className="item">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" />
          </div>
          <div className="item">
            <label htmlFor="bedroom">Bedroom Number</label>
            <input type="text" min={1} id="bedroom" name="bedroom" />
          </div>
          <div className="item">
            <label htmlFor="bathroom">Bathroom Number</label>
            <input type="text" min={1} id="bathroom" name="bathroom" />
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

          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="side-container">
        <input type="file" name="images" id="images" />
      </div>
    </div>
  );
}

export default NewPostPage;
