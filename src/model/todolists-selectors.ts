import {Todolist} from "../app/App.tsx";
import {RootState} from "../app/store.ts";

export const selectTodolistTasks = (state: RootState): Todolist[] => state.todolists