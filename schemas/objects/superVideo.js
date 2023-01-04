// video.js
import { BsCameraVideoFill } from "react-icons/bs";
import styles from "./shared/styles";

export default {
  name: "superVideo",
  type: "object",
  title: "Video",
  icon: BsCameraVideoFill,
  fields: [
    ...styles,
    {
      name: "videoLabel",
      type: "string",
      title: "Video Label",
    },
    {
      name: "video",
      type: "file",
      title: "Upload",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
