import React, { useEffect } from "react";
import { statusPageStyles } from "../styles";
import { css } from "aphrodite";
import { Container, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  NotFoundErrorImg,
  SystemErrorImg,
  RestrictedErrorImg,
} from "../assets/img";
import Paths from "../router/paths";

export default function StatusPage(props) {
  const navigate = useNavigate();
  const isMobile = false;
  const btnActionHandler = async (code) => {
    switch (code) {
      case "404":
        navigate(-1);
        break;
      case "403":
        navigate(Paths.login);
        break;
      default:
        navigate(-1);
    }
  };
  useEffect(() => {
    document.body.style.backgroundColor = "#F7F7FA";
  });
  return (
    <>
      <Container className={css(statusPageStyles.mainContainer)}>
        <Container>
          {props.code === "404" ? (
            <NotFoundErrorImg style={isMobile ? { width: "350px" } : {}} />
          ) : (
            <>
              {props.code === "403" ? (
                <RestrictedErrorImg
                  style={isMobile ? { width: "350px" } : {}}
                />
              ) : (
                <SystemErrorImg style={isMobile ? { width: "350px" } : {}} />
              )}
            </>
          )}
        </Container>
        <Container>
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            className={css(statusPageStyles.title)}
          >
            {props.title}
          </Typography>
        </Container>
        <Container style={{ padding: "20px", paddingTop: "5px" }}>
          <Typography className={css(statusPageStyles.helperText)}>
            {props.helperText}
          </Typography>
        </Container>
        <Container>
          <Button
            className={css(statusPageStyles.btn)}
            onClick={() => btnActionHandler(props.code)}
          >
            {props.btnText}
          </Button>
        </Container>
      </Container>
    </>
  );
}
