import AddTaskIcon from "@mui/icons-material/AddTask";
import { Divider, IconButton, Tooltip } from "@mui/material";
import { useForm } from "react-hook-form";
import { PRIORITY, Task, TaskSchema } from "../lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { RadioGroupItem, RadioGroup } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export default function Dashboard() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center">
              <p>My Tasks</p>
              <CreateTask className="!ml-4" />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {myTasks.map((task, i: number) => (
            <TaskItem key={i} task={task} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function TaskItem({ task }: { task: Task }) {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div className="flex justify-between">
          <h1>{task.title}</h1>
          <p>{getDueDate(task.due)}</p>
        </div>
        <Divider className="!mt-2" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{task.title}</DialogTitle>
          <DialogDescription>{task.description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function CreateTask({ className }: { className?: string }) {
  const { register, setValue, getValues, handleSubmit, watch } = useForm<Task>({
    defaultValues: {
      title: "",
      description: "",
      due: new Date(),
      priority: PRIORITY.LOW,
      done: false,
    },
    resolver: zodResolver(TaskSchema),
  });

  const dueDate = watch("due");
  const onSubmit = () => {
    console.log(getValues());
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Tooltip title="Create new task" arrow placement="right">
          <IconButton className={className}>
            <AddTaskIcon />
          </IconButton>
        </Tooltip>
      </DialogTrigger>
      <DialogContent
        className="w-[800px]"
        aria-description="Fill in task details"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>
            <input
              {...register("title")}
              className="p-2 w-full outline-none"
              placeholder="Task title"
            />
          </DialogTitle>
          <Divider className="!my-2" />
          <div className="grid task_create_grid gap-y-2 items-center">
            <p>Description</p>
            <textarea
              {...register("description")}
              className="bg-modal-primary w-full outline-none h-full p-2 border resize-none"
              placeholder="Write a description..."
            />
            <p>Due Date</p>
            <div className="flex gap-1 items-center">
              <p>{getDueDate(dueDate)}</p>
              <Popover>
                <PopoverTrigger asChild>
                  <IconButton>
                    <CalendarMonthIcon />
                  </IconButton>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    onSelect={(d) =>
                      setValue("due", d!, {
                        shouldValidate: true,
                        shouldDirty: true,
                        shouldTouch: true,
                      })
                    }
                    className="rounded-md border"
                    mode="single"
                    disabled={(date) => date.getDate() < new Date().getDate()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <p>Priority</p>
            <div className="flex gap-1">
              <RadioGroup
                className="flex"
                defaultValue={getValues("priority")}
                onValueChange={(v) =>
                  setValue("priority", v as PRIORITY, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch: true,
                  })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="low" id="r1" />
                  <Label htmlFor="r1">Low</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="r2" />
                  <Label htmlFor="r2">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="high" id="r3" />
                  <Label htmlFor="r3">High</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <Button className="mt-4 w-full">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

const myTasks: Task[] = [
  {
    title: "learn japanese",
    description:
      "complete 3 duolingo challenges, complete 1 page of japanese reading",
    done: false,
    priority: PRIORITY.LOW,
    due: new Date("2024-01-01"),
  },
  {
    title: "Complete task list",
    description:
      "Show list of tasks, including title, description, due date for each task",
    done: false,
    priority: PRIORITY.HIGH,
    due: new Date("2024-07-15"),
  },
];

const getDueDate = (dateObj: Date) => {
  const monthAbbr = dateObj.toLocaleString("en-US", { month: "short" });
  const date = dateObj.getDate();
  const year = dateObj.getFullYear();

  return `${monthAbbr} ${date}, ${year}`;
};
