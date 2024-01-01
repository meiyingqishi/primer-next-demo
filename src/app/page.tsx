import "@primer/css/index.scss";

import {
  Button
} from "./reactComponents";

export default function Home() {
  return (
    <main className="d-flex flex-justify-center flex-items-center flex-column mt-3">
      <Button>Button demo</Button>
    </main>
  );
}