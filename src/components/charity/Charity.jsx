import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
const Charity = () => {
  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2" height={300}>
      <div className="creators-grid">
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="src/images/1.png"></Image>
            </div>
            <div className="creators-details">
              <h2 className="creators-card-name">
                Рука дающего
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5
                className="creators-card-position"
                style={{ color: "#61788A", fontWeight: "1.5rem" }}
              >
                @ArtBySamantha
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
            </div>
          </div>
        </div>
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="src/images/2.png"></Image>
            </div>

            <div className="creators-details">
              <h2 className="creators-card-name">
                Colorful Dreams
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5
                className="creators-card-position"
                style={{ color: "#61788A", fontWeight: "1.5rem" }}
              >
                @CreativeVisions
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
            </div>
          </div>
        </div>
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="src/images/3.png"></Image>
            </div>

            <div className="creators-details">
              <h2 className="creators-card-name">
                Together We Rise
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5
                className="creators-card-position"
                style={{ color: "#61788A", fontWeight: "1.5rem" }}
              >
                @ArtisticImpact
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
            </div>
          </div>
        </div>
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="src/images/4.png"></Image>
            </div>

            <div className="creators-details">
              <h2 className="creators-card-name">
                Nature's Beauty
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5
                className="creators-card-position"
                style={{ color: "#61788A", fontWeight: "1.5rem" }}
              >
                @VisionaryArtists
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
            </div>
          </div>
        </div>
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="src/images/5.png"></Image>
            </div>

            <div className="creators-details">
              <h2 className="creators-card-name">
                Innovative Minds
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5
                className="creators-card-position"
                style={{ color: "#61788A", fontWeight: "1.5rem" }}
              >
                @GlobalArtMovement
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
            </div>
          </div>
        </div>
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="src/images/6.png"></Image>
            </div>

            <div className="creators-details">
              <h2 className="creators-card-name">
                Vibrant Expressions
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5
                className="creators-card-position"
                style={{ color: "#61788A", fontWeight: "1.5rem" }}
              >
                @ArtistsForChange
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
            </div>
          </div>
        </div>
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="src/images/7.png"></Image>
            </div>

            <div className="creators-details">
              <h2 className="creators-card-name">
                Empowerment
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5
                className="creators-card-position"
                style={{ color: "#61788A", fontWeight: "1.5rem" }}
              >
                @CreativeExpressions
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
            </div>
          </div>
        </div>
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="src/images/8.png"></Image>
            </div>

            <div className="creators-details">
              <h2 className="creators-card-name">
                Unleash Creativity
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5
                className="creators-card-position"
                style={{ color: "#61788A", fontWeight: "1.5rem" }}
              >
                @ArtisticJourneys
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
            </div>
          </div>
        </div>
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="src/images/9.png"></Image>
            </div>

            <div className="creators-details">
              <h2 className="creators-card-name">
                Inspired Imagination
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5
                className="creators-card-position"
                style={{ color: "#61788A", fontWeight: "1.5rem" }}
              >
                @ImaginativeCreations
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
            </div>
          </div>
        </div>
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="src/images/10.png"></Image>
            </div>

            <div className="creators-details">
              <h2 className="creators-card-name">
                Art for Change
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5
                className="creators-card-position"
                style={{ color: "#61788A", fontWeight: "1.5rem" }}
              >
                @InspireArtisticChange
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Card style={{ marginLeft: "2rem", display: "flex", marginTop:"3rem" }}>
        <Image src="src/images/11.png"></Image>
        <div style={{ marginLeft: "2rem", marginTop: "2rem" }}>
          <Card.Title>Art for Ukraine</Card.Title>
          <Card.Title style={{ color: "#61788A" }}>ArtBySamantha</Card.Title>
        </div>
        <FontAwesomeIcon  color="#CCCCCC" icon={faHeart} style ={{position:"absolute", right:"0",marginTop:"2rem"}}/>
      </Card>
      <Card style={{ marginLeft: "2rem", display: "flex" }}>
        <Image src="src/images/13.png"></Image>
        <div style={{ marginLeft: "2rem", marginTop: "2rem" }}>
          <Card.Title>Colorful Dreams Fund</Card.Title>
          <Card.Title style={{ color: "#61788A" }}>ArtisticImpact</Card.Title>
        </div>
        <FontAwesomeIcon  color="#CCCCCC" icon={faHeart} style ={{position:"absolute", right:"0",marginTop:"2rem"}}/>
      </Card>
      <Card style={{ marginLeft: "2rem", display: "flex" }}>
        <Image src="src/images/12.png"></Image>
        <div style={{ marginLeft: "2rem", marginTop: "2rem" }}>
          <Card.Title>Empower Youth Through Art</Card.Title>

          <Card.Title style={{ color: "#61788A" }}>CreativeVisions</Card.Title>
        </div>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ position: "absolute", right: "0", marginTop: "2rem" }}
          color="#CCCCCC"
        />
      </Card>
    </SkeletonTheme>
  );
};
export default Charity;
