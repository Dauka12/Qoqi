import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Vacancies = () => {
  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2" height={300}>
      <div>
        <Card
          style={{
            border: "1px solid black",
            backgroundColor: "white",
            height: "100%",
            borderRadius: "20px",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft:"2rem",
            marginTop: "2rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                color: "black",
                fontFamily: "Inter",
                fontWeight: "500",
                marginLeft: "4rem",
              }}
            >
              Название
            </p>
            <p
              style={{
                color: "black",
                fontFamily: "Inter",
                fontWeight: "500",
                marginRight: "2rem",
              }}
            >
              Кандидаты
            </p>
            <p
              style={{
                color: "white",
                fontFamily: "Inter",
                fontWeight: "500",
                marginRight: "20rem",
              }}
            >
              Описание
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Card
              style={{
                flex: 1,
                marginRight: "1rem",
                border: "1px solid black",
                borderRadius: "20px",
                height: "100%",
              }}
            >
              {" "}
              {/* First card */}
              <Card.Body>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "3rem",
                  }}
                >
                  <Card.Title
                    style={{
                      color: "black",
                      fontFamily: "Inter",
                      fontWeight: "500",
                      marginLeft: "4rem",
                      width: "20rem",
                    }}
                  >
                    Видеооператор
                    <Card.Text style={{ fontSize: "2rem" }}>
                      250 000 - 350 000
                    </Card.Text>
                    <Card.Text style={{ fontSize: "1.2rem" }}>
                      Опыт от 1 года до 3 лет | Алматы
                    </Card.Text>
                  </Card.Title>
                  <div style ={{display:'flex', alignItems:"center"}}>
                    <Image
                      src="src/images/Frame 32.png"
                      style={{
                        marginLeft: "10rem",
                        width: "10%",
                        height: "30%",
                      }}
                    />
                    <Image
                      src="src/images/Frame 33.png"
                      style={{
                        marginLeft: "1rem",
                        width: "10%",
                        height: "30%",
                      }}
                    />
                    <Image
                      src="src/images/Frame 34.png"
                      style={{
                        marginLeft: "1rem",
                        width: "10%",
                        height: "30%",
                      }}
                    />
                    <h1 style = {{marginTop:"3rem", marginLeft:"1rem"}}>+3</h1>
        
                  </div>

                  <Card.Title
                    style={{
                      width: "20rem",
                      color: "white",
                      fontFamily: "Inter",
                      fontWeight: "500",
                      marginRight: "7rem",
                    }}
                  >
                    Погружение в мир креативного мышления и инноваций.
                    Практические инструменты для стимулирования творческого
                    потенциала.
                  </Card.Title>
                </div>
                <div style={{ display: "flex", marginBottom: "4rem" }}>
                  <Button
                    style={{
                      backgroundColor: "#F28290",
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      marginLeft: "4rem",
                      width: "12rem",
                      height: "4rem",
                    }}
                  >
                    Откликнуться
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <Card
              style={{
                flex: 1,
                marginRight: "1rem",
                border: "1px solid black",
                borderRadius: "20px",
                height: "100%",
                marginTop: "2rem",
              }}
            >
              {" "}
              {/* First card */}
              <Card.Body>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "3rem",
                  }}
                >
                 <Card.Title
                    style={{
                      color: "black",
                      fontFamily: "Inter",
                      fontWeight: "500",
                      marginLeft: "4rem",
                      width: "20rem",
                    }}
                  >
                    Видеооператор
                    <Card.Text style={{ fontSize: "2rem" }}>
                      250 000 - 350 000
                    </Card.Text>
                    <Card.Text style={{ fontSize: "1.2rem" }}>
                      Опыт от 1 года до 3 лет | Алматы
                    </Card.Text>
                  </Card.Title>
                  <div style ={{display:'flex', alignItems:"center"}}>
                    <Image
                      src="src/images/Frame 32.png"
                      style={{
                        marginLeft: "10rem",
                        width: "10%",
                        height: "30%",
                      }}
                    />
                    <Image
                      src="src/images/Frame 33.png"
                      style={{
                        marginLeft: "1rem",
                        width: "10%",
                        height: "30%",
                      }}
                    />
                    <Image
                      src="src/images/Frame 34.png"
                      style={{
                        marginLeft: "1rem",
                        width: "10%",
                        height: "30%",
                      }}
                    />
                    <h1 style = {{marginTop:"3rem", marginLeft:"1rem"}}>+3</h1>
        
                  </div>
                  <Card.Title
                    style={{
                      width: "20rem",
                      color: "white",
                      fontFamily: "Inter",
                      fontWeight: "500",
                      marginRight: "7rem",
                    }}
                  >
                    Погружение в мир креативного мышления и инноваций.
                    Практические инструменты для стимулирования творческого
                    потенциала.
                  </Card.Title>
                </div>
                <div style={{ display: "flex", marginBottom: "4rem" }}>
                  <Button
                    style={{
                      backgroundColor: "#F28290",
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      marginLeft: "4rem",
                      width: "12rem",
                      height: "4rem",
                    }}
                  >
                    Откликнуться
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <Card
              style={{
                flex: 1,
                marginRight: "1rem",
                border: "1px solid black",
                borderRadius: "20px",
                height: "100%",
                marginTop: "2rem",
              }}
            >
              {" "}
              {/* First card */}
              <Card.Body>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "3rem",
                  }}
                >
                  <Card.Title
                    style={{
                      color: "black",
                      fontFamily: "Inter",
                      fontWeight: "500",
                      marginLeft: "4rem",
                      width: "20rem",
                    }}
                  >
                    Видеооператор
                    <Card.Text style={{ fontSize: "2rem" }}>
                      250 000 - 350 000
                    </Card.Text>
                    <Card.Text style={{ fontSize: "1.2rem" }}>
                      Опыт от 1 года до 3 лет | Алматы
                    </Card.Text>
                  </Card.Title>
                  <div style ={{display:'flex', alignItems:"center"}}>
                    <Image
                      src="src/images/Frame 32.png"
                      style={{
                        marginLeft: "10rem",
                        width: "10%",
                        height: "30%",
                      }}
                    />
                    <Image
                      src="src/images/Frame 33.png"
                      style={{
                        marginLeft: "1rem",
                        width: "10%",
                        height: "30%",
                      }}
                    />
                    <Image
                      src="src/images/Frame 34.png"
                      style={{
                        marginLeft: "1rem",
                        width: "10%",
                        height: "30%",
                      }}
                    />
                    <h1 style = {{marginTop:"3rem", marginLeft:"1rem"}}>+3</h1>
        
                  </div>
                  <Card.Title
                    style={{
                      width: "20rem",
                      color: "white",
                      fontFamily: "Inter",
                      fontWeight: "500",
                      marginRight: "7rem",
                    }}
                  >
                    Погружение в мир креативного мышления и инноваций.
                    Практические инструменты для стимулирования творческого
                    потенциала.
                  </Card.Title>
                </div>
                <div style={{ display: "flex", marginBottom: "4rem" }}>
                  <Button
                    style={{
                      backgroundColor: "#F28290",
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      marginLeft: "4rem",
                      width: "12rem",
                      height: "4rem",
                    }}
                  >
                    Откликнуться
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Card>
      </div>
    </SkeletonTheme>
  );
};

export default Vacancies;
