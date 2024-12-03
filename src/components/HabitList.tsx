import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStates } from "../app/store";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { CheckCircle, Delete } from "@mui/icons-material";
import { removeHabit, toggleHabit } from "../app/habitSlice";

const HabitList: React.FC = () => {
  const { habits } = useSelector((state: RootStates) => state.habits);
  const today = new Date().toISOString().split("T")[0];
  const dispatch = useDispatch<AppDispatch>()


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: 4,
      }}
    >
      {habits.map((habit) => {
        return (
          <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
            <Grid container alignItems="center">
              <Grid xs={12} sm={6}>
                <Typography variant="h6">{habit.name}</Typography>
                <Typography variant="body2" color="text.secondary">{habit.frequency}</Typography>

              </Grid>
              <Grid xs={12} sm={6}>
                <Box sx={{
                    display:"flex",
                    justifyContent:"flex-end",
                    gap:1,
                }}>
                    <Button variant="outlined"
                    color={
                        habit.completedDates.includes(today)
                        ? "success"
                        : "primary"
                    }
                    startIcon={<CheckCircle/>}
                    onClick={()=>dispatch(toggleHabit({id:habit.id, date:today}))}
                    >
                        {habit.completedDates.includes(today)
                        ? "Completed"
                        : "Mark Completed"}  
                    </Button>
                    <Button 
                    variant="outlined"
                    color="error"
                    startIcon={<Delete/>}
                    onClick={()=>dispatch(removeHabit(habit.id))}
                    >
                        Remove
                    </Button>

                </Box>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </Box>
  );
};

export default HabitList;
