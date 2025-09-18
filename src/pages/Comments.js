import { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import CommentCard from "../components/CommentCard";

const Comments = ({bad, nice, excellent}) => {

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", marginTop: 5 }}>
      <Card sx={{ padding: 4, borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Comments
          </Typography>

 
          <div style={{ marginTop: "5px", display: "flex", gap: "10px" }}>
            <Stack spacing={1}>
              <CommentCard type={"😖"} count={bad} />
            </Stack>
            <Stack spacing={1}>
              <CommentCard type={"😊"} count={nice} />
            </Stack>
             <Stack spacing={1}>
              <CommentCard type={"🤩"} count={excellent} />
            </Stack>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};
export default Comments;
