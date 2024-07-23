export type TodoProps = {
  content: {
    title: string;
    description: string;
    importance: "high" | "medium" | "low";
  };
  schedule: {
    doneBy: Date;
  };
  progress: {
    percentage: number | null;
    done: boolean;
  };
};
export default function TodoItem({ details, schedule, progress }: TodoProps) {
  return <></>;
}
