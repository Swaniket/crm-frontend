import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Breadcrumb } from "react-bootstrap";

function PageBreadcrumb({ page }) {
  return (
    <Breadcrumb>
      <LinkContainer to="/">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </LinkContainer>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default PageBreadcrumb;
