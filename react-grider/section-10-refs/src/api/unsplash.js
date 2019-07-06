import axios from "axios";

// The create method is going to create an instance of the axios client with a couple of defaulted properties
// ^ This allows us to break out configuration from our React components
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 3124347463e8170c03d48c0495349d1a47cf6f919b645f6110c76dc76a941212"
  }
});