import React from "react";

import EmployeeForm from "./EmployeeForm";
import PageHeader from "../PageHeader";

import { PeopleOutlineTwoTone } from "@mui/icons-material";
import { Paper, styled } from "@mui/material";

const PaperWrapper = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(5),
  padding: theme.spacing(3),
}));

function Employee() {
  return (
    <>
      <PageHeader
        title="This is page header"
        subtitle="This is page subtitile"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <PaperWrapper>
        <EmployeeForm />
      </PaperWrapper>
    </>
  );
}

export default Employee;
