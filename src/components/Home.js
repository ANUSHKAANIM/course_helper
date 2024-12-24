import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

function Home() {
  const courses = [
    { name: "Course 1", description: "Description of Course 1", image: "course1.jpg" },
    { name: "Course 2", description: "Description of Course 2", image: "course2.jpg" },
    { name: "Course 3", description: "Description of Course 3", image: "course3.jpg" },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Our Courses
      </Typography>
      <Grid container spacing={3}>
        {courses.map((course, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.name}
              />
              <CardContent>
                <Typography variant="h6">{course.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
                <Button size="small" color="primary">Learn More</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
