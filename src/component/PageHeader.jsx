import React from "react";

import { Card, Paper, Stack, Typography, styled } from "@mui/material";


const PaperWrapper = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fdfdff"
}));

const PageHeaderWrapper = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(4),
    display: "flex",
    marginBottom: theme.spacing(0.75)
}));

const CardWrapper = styled(Card)(({ theme}) => ({
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#084287",
    backgroundColor: "#E8EDF6"
}));

const TypographyWrapper = styled(Stack)(({ theme }) => ({
    paddingLeft: theme.spacing(3),
    '& .css-ati914-MuiTypography-root': {
        opacity: "0.6"
    }
}))


function PageHeader(props) {

  const { title, subtitle, icon } = props;
  
  return (
    <PaperWrapper elevation="0" square>
      <PageHeaderWrapper direction="row">
        <CardWrapper>
        {icon}
        </CardWrapper>
        <TypographyWrapper >
          <Typography 
          component="div" 
          variant="h6">
            {title}
          </Typography>
          <Typography 
          component="div" 
          variant="subtitle2">
            {subtitle}
          </Typography>
        </TypographyWrapper>
      </PageHeaderWrapper>
    </PaperWrapper>
  );
}

export default PageHeader;
