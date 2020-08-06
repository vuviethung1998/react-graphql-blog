import { model } from "mongoose";
import { IBlogDocument } from "./blogs.types";
import BlogSchema from "./blogs.schema";

export const BlogModel = model<IBlogDocument>("blog", BlogSchema);