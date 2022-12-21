import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <div style={{ margin: "0 auto", "margin-left": "300px" }}>
        <ErrorMessage />
      </div>
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          paddingBottom: "25px",
        }}
      >
        Page does not exist
      </p>
      <Link
        style={{
          textAlign: "center",
          display: "block",
          fontWeight: "bold",
          fontSize: "24px",
        }}
        to="/"
      >
        Back to main page
      </Link>
    </div>
  );
};

export default Page404;
