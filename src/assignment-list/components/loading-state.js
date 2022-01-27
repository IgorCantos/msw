import React from "react";

import { Box, Typography, CircularProgress } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import { useStyles } from "../constants";

import { OverlayingCard, ContainerHeaderInfo } from "./components";

export default function LoadingState() {
  const classes = useStyles();
  return (
    <>
      <ContainerHeaderInfo>
        <Box
          display="flex"
          flexWrap="nowrap"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h4">Carregando suas atividades...</Typography>
          <Box ml={1.5}>
            <CircularProgress
              size="86px"
              thickness={2.0}
              className={classes.containerCircularProgress}
            />
          </Box>
        </Box>
      </ContainerHeaderInfo>

      <OverlayingCard>
        <Box px={3.5}>
          <Skeleton
            component={Box}
            variant="rect"
            borderRadius="8px"
            my={1.5}
            height={64}
          />
          <Skeleton
            component={Box}
            variant="rect"
            borderRadius="8px"
            my={1.5}
            height={32}
            width={85}
          />
          <Skeleton
            component={Box}
            variant="rect"
            borderRadius="8px"
            mt={1.5}
            mb={0.5}
            height={32}
            width={126}
          />
          <Skeleton
            component={Box}
            variant="rect"
            borderRadius="8px"
            my={0.5}
            height={32}
          />
          <Skeleton
            component={Box}
            variant="rect"
            borderRadius="8px"
            mt={0.5}
            mb={1.5}
            height={32}
            width={126}
          />
        </Box>
      </OverlayingCard>
    </>
  );
}
