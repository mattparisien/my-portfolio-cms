import axios from "axios";

const mutate = async (documentId, setter) => {
  const url =
    "https://igfxoph1.api.sanity.io/v2021-06-07/data/mutate/production";

    console.log('the setter', setter);

  const mutation = {
    mutations: [
      {
        patch: {
          id: documentId,
          set: setter,
        },
      },
    ],
  };

  try {
    const resp = await axios.post(url, mutation);
    console.log("Success", resp);
  } catch (err) {
    console.error(err);
  }
};

export default mutate;
