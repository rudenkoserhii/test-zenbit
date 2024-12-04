import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { Link } from "./Swagger.styled";
import image from "../../assets/images/swagger-logo.png";

export const ApiDocs = () => {
  return (
    <SwaggerUI url="https://test-zenbit-backend.onrender.com/api/docs-json" />
  );
};

export const Swagger = () => {
  return <Link to="/api/docs" $picture={image} title="Swagger IO Api" />;
};
