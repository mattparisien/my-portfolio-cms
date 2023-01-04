import { Card, Text, Box } from "@sanity/ui";
import React from "react";

const SubmittedView = React.forwardRef(({ post }, ref) => {
  return (
    <Card
      style={{
        display: "flex",
        alignItems: "center",
        justifyConten: "center",
        padding: "1rem",
      }}
      tone="positive"
    >
      <Box style={{ width: "4rem", height: "4rem" }}>
        <img
          src={post.media_url}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
      <p style={{ paddingLeft: "1.5rem", margin: 0 }}>
        {post.caption.slice(0, 100)}...
      </p>
    </Card>
  );
});

export default SubmittedView;
