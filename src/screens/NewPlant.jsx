import axios from "axios";
import React, { useState } from "react";
import BASE_URL from "../constants";
import ValidatePlantForm from "../utils/ValidatePlantForm";
import Toast from "../loaders/Toast";
import { useDispatch } from "react-redux";
import { fetchPlants } from "../redux/plantSlice";


const NewPlant = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]); // store multiple categories
  const [image, setImage] = useState("");
  const [about, setAbout] = useState("");
  const [available, setAvailable] = useState(false);
  const [error, setError] = useState("");
  const [errors,setErrors]=useState({})
  const [showToast, setShowToast] = useState(false);
   const dispatch=useDispatch()

  const handleSave = async () => {
   
    setError("");

    const errors = ValidatePlantForm({ name, price, categories, image, about });
    setErrors(errors);
    if (Object.keys(errors).length > 0) return;

    try {
      const res = await axios.post(
        BASE_URL + "/newPlant",
        { name, price, categories, available, about, image },
        { withCredentials: true }
      );
      dispatch(fetchPlants())
      setShowToast(true)
      setTimeout(()=>{
      setShowToast(false)
      },5000)
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      console.log(err.response?.data?.message);
    }
  };

  // toggle checkbox selection
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (categories.includes(value)) {
      setCategories(categories.filter((c) => c !== value)); // remove if already selected
    } else {
      setCategories([...categories, value]); // add if not selected
    }
  };

  return (
    <>
    {showToast && <Toast message={"Saved successfully"} />}
    <div className="flex justify-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 flex-justify-center">
        <legend className="fieldset-legend">Add New Plant</legend>

        <label className="label">Name</label>
        <input
          type="text"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name of the plant"
        />
         {errors.name && <p className="text-red-500">{errors.name}</p>}

        <label className="label">Price</label>
        <input
          type="Number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input"
          placeholder=""
        />
         {errors.price && <p className="text-red-500">{errors.price}</p>}

        {/* Categories with checkboxes */}
        <label className="label">Categories</label>
        <div className="flex flex-col gap-2">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              value="indoor"
              checked={categories.includes("indoor")}
              onChange={handleCategoryChange}
              className="checkbox"
            />
            Indoor
          </label>
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              value="outdoor"
              checked={categories.includes("outdoor")}
              onChange={handleCategoryChange}
              className="checkbox"
            />
            Outdoor
          </label>
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              value="flowering"
              checked={categories.includes("flowering")}
              onChange={handleCategoryChange}
              className="checkbox"
            />
            Flowering
          </label>
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              value="home decor"
              checked={categories.includes("home decor")}
              onChange={handleCategoryChange}
              className="checkbox"
            />
            Home decor
          </label>
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              value="succulent"
              checked={categories.includes("succulent")}
              onChange={handleCategoryChange}
              className="checkbox"
            />
            Succulent
          </label>
        </div>
         {errors.categories && (
          <p className="text-red-500">{errors.categories}</p>
        )}

        <label className="label">Available Status</label>
        <select
          className="select select-bordered w-75"
          value={available}
          onChange={(e) => setAvailable(e.target.value === "true")}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>

        <label className="label">Photo URL</label>
        <input
          type="text"
          className="input"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="only url"
        />
         {errors.image && <p className="text-red-500">{errors.image}</p>}

        <label className="label">About</label>
        <textarea
          className="textarea"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          placeholder="Enter text here"
        ></textarea>
         {errors.about && <p className="text-red-500">{errors.about}</p>}

        <p className="text-red-500">{error}</p>
        <button className="btn btn-neutral mt-4" onClick={handleSave}>
          Save
        </button>
      </fieldset>
    </div>
    </>
  );
};

export default NewPlant;
