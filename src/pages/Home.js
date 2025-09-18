import * as React from "react";
import {
  Container,
  Typography,
  Skeleton,
  Card,
  CardContent,
  Stack,
  Button,
  ButtonGroup,
} from "@mui/material";

const Home = ({ setBad, setNice, setExcellent }) => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", marginTop: 5 }}>
      <Card sx={{ padding: 4, borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Welcome to My App
          </Typography>
          <div style={{ display: "flex", gap: "10px" }}>
            <ButtonGroup sx={{ margin: "auto" }}>
              <Button
                sx={{ borderRadius: "40px", fontSize: "40px" }}
                onClick={setBad}
              >
                {"😖"}
              </Button>
              <Button
                sx={{ borderRadius: "40px", fontSize: "40px" }}
                onClick={setNice}
              >
                {"😊"}
              </Button>
              <Button
                sx={{ borderRadius: "40px", fontSize: "40px" }}
                onClick={setExcellent}
              >
                {"🤩"}
              </Button>
            </ButtonGroup>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Stack spacing={1}>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
            <Stack spacing={1}>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
            <Stack spacing={1}>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};
export default Home;
