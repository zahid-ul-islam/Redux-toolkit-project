import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ihabit } from "../Types/habitsType";

interface IhabitState{
    habits:Ihabit[];
}
const initialState:IhabitState = {
    habits:[]
}
const habitSlice = createSlice({
    name:"habits",
    initialState,
    reducers:{
        addHabit: (state, action:PayloadAction<{name:string, frequency:"daily" | "weekly" | "monthly"}>) => {
            const newHabit:Ihabit = {
                id: new Date().getTime().toString(),
                name: action.payload.name,
                frequency: action.payload.frequency,
                completedDates: [],
                createdAt: new Date().toISOString(),
            }
            state.habits.push(newHabit);

        },
        toggleHabit:(
            state,
            action:PayloadAction<{id:string, date:string}>,
        ) =>{
          const habit = state.habits.find((habit) => habit.id === action.payload.id);
          if(habit){
            const index = habit.completedDates.indexOf(action.payload.date);
            if(index !== -1){
                habit.completedDates.splice(index, 1);
            }else{
                habit.completedDates.push(action.payload.date);
            }
          }
        },
        removeHabit:(state, action:PayloadAction<string>) => {
            const habit = state.habits.filter((habit) => habit.id !== action.payload);
            if(habit.length<state.habits.length){
                state.habits = habit;

            }else{
                console.warn("Habit not found");
            }
        }

    }
})

export const {addHabit, toggleHabit, removeHabit} = habitSlice.actions;
export default habitSlice.reducer;