import React from "react";
import { Segment, Icon, Grid, Image } from "semantic-ui-react";
import PersonalInfo from "./../../../curriculumVitaeDetailView/components/PersonalInfo";

export default function PhotoAndPersonalInfoSegment({ formik }) {
  return (
    <Segment padded raised>
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Image
              size="medium"
              centered
              src={formik.values.photoLink}
            />
          </Grid.Column>
          <Grid.Column width={10}>
            <PersonalInfo currentjobSeeker={formik.values.jobSeeker} />
            <Icon name="info circle" color="blue" />
            Bu bilgileri güncellemek için profilinizi güncellemeniz yeterlidir.
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
