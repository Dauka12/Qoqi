import React, { useState, useEffect } from "react";
import { useDocumentTitle, useScrollTop } from "@/hooks";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Education = () => {
  useDocumentTitle("Education | Qoqiqaz");
  useScrollTop();

  const [showInfo, setShowInfo] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  const toggleInfo = () => {
    setShowInfo(true);
    setShowContacts(false);
  };

  useEffect(() => {
    // Ensure that the first button is clicked when the page is just opened
    toggleInfo();
  }, []);

  const toggleContacts = () => {
    setShowInfo(false);
    setShowContacts(true);
  };

  return (
    <main
      className="content"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <div>
          <h2 style={{ marginTop: "5rem", marginLeft: "2rem" }}>Обучение</h2>
          <Button
            onClick={toggleInfo}
            style={{
              // marginTop: "2rem",
              marginLeft: "2rem",
              backgroundColor: showInfo ? "#F28290" : "white",
              color: showInfo ? "white" : "black",
              border: showInfo ? "none" : "1px solid black",
              borderRadius: "12px",
              width: "12rem",
              height: "5rem",
            }}
          >
            Обучиться
          </Button>
          <Button
            onClick={toggleContacts}
            style={{
              // marginTop: "2rem",
              marginLeft: "2rem",
              backgroundColor: showContacts ? "#F28290" : "white",
              color: showContacts ? "white" : "black",
              border: showContacts ? "none" : " 1px solid black",
              borderRadius: "12px",
              width: "12rem",
              height: "5rem",
            }}
          >
            Обучать
          </Button>
          <br />
          <br />
        </div>
        {showInfo && (
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
                marginTop:"1rem",
                marginLeft: "2rem",
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
                  Длительность
                </p>
                <p
                  style={{
                    color: "black",
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
                          width: "15rem",
                        }}
                      >
                        Креативный подход в менеджменте
                      </Card.Title>
                      <Card.Title
                        style={{
                          color: "black",
                          fontFamily: "Inter",
                          fontWeight: "500",
                          marginRight: "10rem",
                        }}
                      >
                        2 недели
                      </Card.Title>
                      <Card.Title
                        style={{
                          width: "20rem",
                          color: "black",
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
                        Записаться
                      </Button>
                      <Button
                        style={{
                          marginLeft: "2rem",
                          backgroundColor: "white",
                          color: "#F28290",
                          border: "1px solid #F28290",
                          borderRadius: "12px",
                          width: "12rem",
                          height: "4rem",
                        }}
                      >
                        Подробнее
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
                          width: "15rem",
                        }}
                      >
                        Креативный подход в менеджменте
                      </Card.Title>
                      <Card.Title
                        style={{
                          color: "black",
                          fontFamily: "Inter",
                          fontWeight: "500",
                          marginRight: "10rem",
                        }}
                      >
                        2 недели
                      </Card.Title>
                      <Card.Title
                        style={{
                          width: "20rem",
                          color: "black",
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
                        Записаться
                      </Button>
                      <Button
                        style={{
                          marginLeft: "2rem",
                          backgroundColor: "white",
                          color: "#F28290",
                          border: "1px solid #F28290",
                          borderRadius: "12px",
                          width: "12rem",
                          height: "4rem",
                        }}
                      >
                        Подробнее
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
                          width: "15rem",
                        }}
                      >
                        Креативный подход в менеджменте
                      </Card.Title>
                      <Card.Title
                        style={{
                          color: "black",
                          fontFamily: "Inter",
                          fontWeight: "500",
                          marginRight: "10rem",
                        }}
                      >
                        2 недели
                      </Card.Title>
                      <Card.Title
                        style={{
                          width: "20rem",
                          color: "black",
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
                        Записаться
                      </Button>
                      <Button
                        style={{
                          marginLeft: "2rem",
                          backgroundColor: "white",
                          color: "#F28290",
                          border: "1px solid #F28290",
                          borderRadius: "12px",
                          width: "12rem",
                          height: "4rem",
                        }}
                      >
                        Подробнее
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Card>
          </div>
        )}
        {showContacts && (
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
          marginTop:"1rem",
          marginLeft: "2rem",
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
            Длительность
          </p>
          <p
            style={{
              color: "black",
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
                    width: "15rem",
                  }}
                >
                  Позиция
                </Card.Title>
                <Card.Title
                  style={{
                    color: "black",
                    fontFamily: "Inter",
                    fontWeight: "500",
                    marginRight: "10rem",
                  }}
                >
                  3 недели
                </Card.Title>
                <Card.Title
                  style={{
                    width: "20rem",
                    color: "black",
                    fontFamily: "Inter",
                    fontWeight: "500",
                    marginRight: "7rem",
                  }}
                >
                  Практические технологий для стимулирования творческого
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
                  Создать
                </Button>
                <Button
                  style={{
                    marginLeft: "2rem",
                    backgroundColor: "white",
                    color: "#F28290",
                    border: "1px solid #F28290",
                    borderRadius: "12px",
                    width: "12rem",
                    height: "4rem",
                  }}
                >
                  Доп.
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
                    width: "15rem",
                  }}
                >
                  Позиция
                </Card.Title>
                <Card.Title
                  style={{
                    color: "black",
                    fontFamily: "Inter",
                    fontWeight: "500",
                    marginRight: "10rem",
                  }}
                >
                  3 недели
                </Card.Title>
                <Card.Title
                  style={{
                    width: "20rem",
                    color: "black",
                    fontFamily: "Inter",
                    fontWeight: "500",
                    marginRight: "7rem",
                  }}
                >
                  Практические технологий для стимулирования творческого
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
                  Создать
                </Button>
                <Button
                  style={{
                    marginLeft: "2rem",
                    backgroundColor: "white",
                    color: "#F28290",
                    border: "1px solid #F28290",
                    borderRadius: "12px",
                    width: "12rem",
                    height: "4rem",
                  }}
                >
                  Доп.
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
                    width: "15rem",
                  }}
                >
                  Позиция
                </Card.Title>
                <Card.Title
                  style={{
                    color: "black",
                    fontFamily: "Inter",
                    fontWeight: "500",
                    marginRight: "10rem",
                  }}
                >
                  3 недели
                </Card.Title>
                <Card.Title
                  style={{
                    width: "20rem",
                    color: "black",
                    fontFamily: "Inter",
                    fontWeight: "500",
                    marginRight: "7rem",
                  }}
                >
                  Практические технологий для стимулирования творческого
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
                  Создать
                </Button>
                <Button
                  style={{
                    marginLeft: "2rem",
                    backgroundColor: "white",
                    color: "#F28290",
                    border: "1px solid #F28290",
                    borderRadius: "12px",
                    width: "12rem",
                    height: "4rem",
                  }}
                >
                  Доп.
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Card>
    </div>
        )}
      </div>
    </main>
  );
};

export default Education;
