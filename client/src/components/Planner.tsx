export default function Planner() {
  return <></>;
}

// const weekFull = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturaday", "Sunday"]
const WeekShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

type DailyProps = {
  whichDay: (typeof WeekShort)[number];
};
function Impromptu() {
  // get current plans from db
  // todos = getTodo(date)
  
  return (
  <div></div>
  )
