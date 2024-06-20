import axios from "axios";
import { base_url } from "../constants/base_url";

export default axios.create({
  baseURL: `${base_url}`,
});
