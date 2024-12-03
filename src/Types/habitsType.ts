interface Ihabit {
    id:string;
    name:string;
    frequency:"daily" | "weekly" | "monthly";
    completedDates:string[];
    createdAt:string;


}

export type {Ihabit}