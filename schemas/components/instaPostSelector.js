import axios from "axios";
import React, { useState } from "react";
import SelectedView from "./Views/SelectionView";
import SubmittedView from "./Views/SubmittedView";
import useAxios from "axios-hooks";
import { withDocument } from "part:@sanity/form-builder";
import mutate from "../../config/helpers/mutate";

const InstaPostSelector = React.forwardRef((props, ref) => {
  const getCarouselMedia = async (mediaId) => {
    const baseURL =
      process.env.SANITY_STUDIO_INSTA_API_ROOT + "/" + mediaId + "/children";

    const requestConfig = {
      params: {
        access_token: process.env.SANITY_STUDIO_INSTA_TOKEN,
        fields: "media_url, media_type",
      },
    };

    try {
      const resp = await axios.get(baseURL, requestConfig);

      if (resp.data.data.length >= 1) {
        return resp.data.data.map((slide) => ({
          url: slide.media_url,
          type: slide.media_type.toLowerCase(),
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [postLimit, setPostLimit] = useState(10);
  const [selectedPost, setSelectedPost] = useState(null);

  const url = `${process.env.SANITY_STUDIO_INSTA_API_ROOT}/${process.env.SANITY_STUDIO_INSTA_USER_ID}/media`;
  const params = {
    access_token: process.env.SANITY_STUDIO_INSTA_TOKEN,
    fields:
      "id,media_type,thumbnail_url,media_product_type,video_title,media_url,permalink,username,caption",
    limit: postLimit,
  };

  const [{ data, loading, error }, refetch] = useAxios({
    url,
    params,
  });

  const handleSubmit = React.useCallback(async (e, post) => {
    e.preventDefault();

    if (post) {
      setSelectedPost(post);
    } else {
      return;
    }

    const media = [];

    switch (post.media_type) {
      case "IMAGE":
      case "VIDEO":
        media.push({
          url: post.media_url,
          type: post.media_type.toLowerCase(),
        });
        break;
      default:
        const items = await getCarouselMedia(post.id);
        media.push(...items);
    }

    const mutation = {
      [`'blocks': pageBuilder.blocks[]{
        'blocks': blocks[internal.id == '${props.value.id}']{
           caption: ${post.caption},
           permalink: ${post.permalink},
        }
       }`]: "",
    };

    mutate(props.document._id, mutation);
  });

  return selectedPost ? (
    <SubmittedView post={selectedPost} />
  ) : (
    <SelectedView
      {...props}
      handleSubmit={handleSubmit}
      postLimit={postLimit}
      setPostLimit={setPostLimit}
      data={data}
      loading={loading}
      error={error}
    />
  );
});

export default withDocument(InstaPostSelector);
