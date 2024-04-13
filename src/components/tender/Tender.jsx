import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Tender = () => {
  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2" height={300}>
      <div className="tender-grid">
        <Card><Image src = "src/images/Group 85.png"/></Card>
        <Card><Image src = "src/images/Group 85.png"/></Card>
        <Card><Image src = "src/images/Group 85.png"/></Card>
        <Card><Image src = "src/images/Group 85.png"/></Card>
        <Card><Image src = "src/images/Group 85.png"/></Card>
        <Card><Image src = "src/images/Group 85.png"/></Card>
      </div>
    </SkeletonTheme>
  );
};
export default Tender;
