import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Croud = () => {
  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2" height={300}>
      <Card style={{ marginLeft: "2rem" }}>
        <Image src="src/images/Frame 47.png" />
      </Card>
      <Card style={{ marginLeft: "2rem" }}>
        <Image src="src/images/Frame 48.png" />
      </Card>
    </SkeletonTheme>
  );
};
export default Croud;
