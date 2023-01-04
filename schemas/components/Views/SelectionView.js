import { FormField } from "@sanity/base/components";
import { Box, Button, Card, Grid, Spinner, Text } from "@sanity/ui";
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent";
import React from "react";

const SelectedView = React.forwardRef((props, ref) => {
  const {
    type,
    markers,
    presence,
    compareValue,
    value,
    onChange,
    data,
    loading,
    onBlur,
    onFocus,
    error,
    handleSubmit,
    postLimit,
    setPostLimit,
  } = props;

  const loadMorePosts = () => {
    setPostLimit((prevLimit) => (prevLimit += 10));
  };

  if (error)
    return (
      <Card tone="critical" {...cardProps}>
        <Text>There has been an error</Text>
      </Card>
    );

  if (!data) return <Spinner />;

  return (
    <>
      <FormField
        description={type.description}
        title={type.title}
        compareValue={compareValue}
        __unstable_markers={markers}
        __unstable_presence={presence}
      >
        <Grid columns={3} gap={3}>
          {data.data.map((post) => (
            <Card
              radius={2}
              shadow={2}
              tone="primary"
              colSpan={1}
              style={{ height: "200px" }}
              onFocus={onFocus}
              onBlur={onBlur}
            >
              <button
                style={{
                  width: "100%",
                  height: "100%",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
                type="submit"
                onClick={(e) => handleSubmit(e, post)}
              >
                <Box style={{ width: "100%", flex: 1 }}>
                  {post.media_type != "VIDEO" ? (
                    <img
                      src={post.media_url}
                      alt=""
                      width="100%"
                      height="100%"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  ) : (
                    <video
                      src={post.media_url}
                      width="100%"
                      height="100%"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  )}
                </Box>
                <Text
                  size={0}
                  style={{
                    lineHeight: 1,
                    textAlign: "left",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: "1em",
                    backgroundColor: "white",
                  }}
                >
                  {post.caption.slice(0, 50)}...
                </Text>
              </button>
            </Card>
          ))}
        </Grid>
      </FormField>
      {postLimit < 100 && (
        <Box
          style={{
            marginTop: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            text={"Load more posts"}
            mode="ghost"
            padding={[3, 3, 4]}
            onClick={loadMorePosts}
          />
        </Box>
      )}
      ;
    </>
  );
});

export default SelectedView;
