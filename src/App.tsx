import { FC } from "react";
import { JobProvider } from "./context/job.context";
import { JobList } from "./components/organisms/JobList";
// TODO: implement firebase API for GET data (instead json file), implement POST funcionality (add new job offers)

export const App: FC = () => {
  return (
    <JobProvider>
      <JobList />
    </JobProvider>
  );
};
