import { useEffect } from "react";

import { Footer } from "../../layout/Footer";
import { trackerRequest } from "../../utils";

export default function Blog() {
  useEffect(() => {
    trackerRequest("blog");
  }, []);

  return (
    <div>
      <Footer />
    </div>
  );
}
