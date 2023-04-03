import { useEffect } from "react";

import { Meta } from "../../layout";
import { Footer } from "../../layout/Footer";
import { trackerRequest } from "../../utils";

export default function Blog() {
  useEffect(() => {
    trackerRequest("blog");
  }, []);

  return (
    <>
      <Meta
        title="Wesley Araújo - Blog"
        description="Portfólio de Wesley Araújo, desenvolvedor React, Node e Typescript."
      />
      <div>
        <Footer />
      </div>
    </>
  );
}
