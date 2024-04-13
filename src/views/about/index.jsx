import React, { useState, useEffect } from "react";
import { useDocumentTitle, useScrollTop } from "@/hooks";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const About = () => {
  useDocumentTitle("AboutUs | Qoqiqaz");
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
        marginLeft: "2rem",
        marginTop: "3rem",
      }}
    >
      <div>
        <div>
          <h2>О нас</h2>
          <button
            onClick={toggleInfo}
            style={{
              // marginTop: "2rem",
              backgroundColor: showInfo ? "#F28290" : "white",
              color: showInfo ? "white" : "black",
              border: showInfo ? "none" : "1px solid black",
              borderRadius: "12px",
            }}
          >
            <p
              style={{
                color: showInfo ? "white" : "black",
                fontFamily: "Inter",
                fontWeight: "500",
              }}
            >
              Информация о компании
            </p>
          </button>
          <button
            onClick={toggleContacts}
            style={{
              // marginTop: "2rem",
              marginLeft: "2rem",
              backgroundColor: showContacts ? "#F28290" : "white",
              color: showContacts ? "white" : "black",
              border: showContacts ? "none" : "1px solid black",
              borderRadius: "12px",
            }}
          >
            <p
              style={{
                color: showContacts ? "white" : "black",
                fontFamily: "Inter",
                fontWeight: "500",
              }}
            >
              Контакты
            </p>
          </button>
          <br />
          <br />
          <br />
        </div>
        {showInfo && (
          <div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  flex: 1,
                  border: "1px solid #F28290",
                  backgroundColor: "#F28290",
                  borderRadius: "20px",
                  // height: "30rem",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#FFFBFB",
                    width: "10rem",
                    borderRadius: "15px",
                    marginLeft: "2rem",
                    height: "3rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      color: "#F28290",
                      marginLeft: "1rem",
                      fontFamily: "Inter",
                      fontWeight: "500",
                    }}
                  >
                    Описание
                  </p>
                  <p
                    style={{
                      color: "white",
                      width: "60rem",
                      marginTop: "13rem",
                      fontFamily: "Inter",
                      fontWeight: "500",
                    }}
                  >
                    ACDSSS (Ассоциация креативного развития социальных и
                    спортивных пространств) – это некоммерческая
                    организация, Целью которой является создание новых точек
                    притяжения в виде креативных арт-пространств и устойчивого
                    образования
                  </p>
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  // border: "1px solid #F28290",
                  // borderRadius: "20px",
                  marginLeft: "2rem",
                }}
              >
                <Image
                  src="src/images/pexels-fauxels-3184418.jpg"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "2rem",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                border: "1px solid #F28290",
                backgroundColor: "#F282904D",
                height: "18rem",
                borderRadius: "20px",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "#F28290",
                  width: "10rem",
                  borderRadius: "15px",
                  marginLeft: "2rem",
                  height: "3rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    color: "#FCD7DB",
                    marginLeft: "3rem",
                    fontFamily: "Inter",
                    fontWeight: "500",
                  }}
                >
                  QOQI
                </p>
                <p
                  style={{
                    color: "#F28290",
                    width: "70rem",
                    marginTop: "3rem",
                    fontFamily: "Inter",
                    fontWeight: "500",
                  }}
                >
                  QOQI Project – это креативный проект в рамках которого
                  работает Арт-пространство на базе Музея энергии будущего NUR
                  ALEM со следующими активностями:
                </p>
              </div>
            </div>
            <div
              style={{ display: "flex", marginTop: "1rem", height: "15rem" }}
            >
              <div
                style={{
                  flex: 1,
                  border: "1px solid #F28290",
                  backgroundColor: "#F282904D",
                  borderRadius: "20px",
                }}
              >
                <p
                  style={{
                    color: "#F28290",
                    width: "20rem",
                    marginTop: "1rem",
                    marginLeft: "2rem",
                    fontFamily: "Inter",
                    fontWeight: "500",
                  }}
                >
                  Events Лекторий, креативный аукцион, зимний каток, летний
                  fashion фестиваль
                </p>
              </div>
              <div
                style={{
                  flex: 1,
                  border: "1px solid #F28290",
                  backgroundColor: "#F282904D",
                  borderRadius: "20px",
                  marginLeft: "2rem",
                }}
              >
                <p
                  style={{
                    color: "#F28290",
                    width: "20rem",
                    marginTop: "1rem",
                    marginLeft: "3rem",
                    fontFamily: "Inter",
                    fontWeight: "500",
                  }}
                >
                  Создание цифрового контента Подкасты, stand up,
                  театр/перформанс, выставки, новая музыка
                </p>
              </div>
              <div
                style={{
                  flex: 1,
                  border: "1px solid #F28290",
                  backgroundColor: "#F282904D",
                  borderRadius: "20px",
                  marginLeft: "2rem",
                }}
              >
                <p
                  style={{
                    color: "#F28290",
                    width: "20rem",
                    marginTop: "1rem",
                    marginLeft: "3rem",
                    fontFamily: "Inter",
                    fontWeight: "500",
                  }}
                >
                  Cyber Sport Проведение соревнований по киберспорту
                </p>
              </div>
            </div>
          </div>
        )}
        {showContacts && (
          // <div>
          <div
            style={{
              flex: 1,
              border: "1px solid #F28290",
              backgroundColor: "#F28290",
              borderRadius: "20px",
            }}
          >
            <Card
              style={{
                backgroundColor: "#F28290",
                width: "10rem",
                borderRadius: "15px",
                marginLeft: "2rem",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginTop:"2rem",
              }}
            >
              <Card.Title
                style={{
                  color: "white",
                  fontWeight:"4rem"
                }}
              >
               Контакты:
              </Card.Title>
              <Card.Body style={{width:"100%"}}>
                <Card.Text
                  style={{
                    color: "white",
                    fontWeight:"bolder",
                    width:"25rem",
                    fontFamily:"sans-serif"
             
                  }}
                >
                  QOQI <br/> <br/>
                  пр. Мангилик Ел, 53/1
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    </main>
  );
};

export default About;
