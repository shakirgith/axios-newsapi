import * as React from "react";
import {
  Link,
  Route,
  useParams,
  Routes,
  Outlet
} from "react-router-dom";

import { getTopic, getResource, getTopics } from "./nestedAPI";

function TopicHome() {
  return (
    <React.Fragment>
      <h1>Topic Home </h1>
      <p>
        Welcome to our content index. Head over to{" "}
        <Link to="/topics">/topics</Link> to see our catalog.
      </p>
    </React.Fragment>
  );
}

function Resource() {
  const { topicId, resourceId } = useParams();

  const { name, description, id } = getResource({ topicId, resourceId });

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={`https://ui.dev/${id}`}>Read Post</a>
    </div>
  );
}

function Topic() {
  const { topicId } = useParams();
  const topic = getTopic(topicId);

  return (
    <div>
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>

      <ul>
        {topic.resources.map((sub) => (
          <li key={sub.id}>
            <Link to={sub.id}>{sub.name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Outlet />
    </div>
  );
}

function Topics() {
  const topics = getTopics();

  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={id}>{name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Outlet />
    </div>
  );
}

export default function MyNestedRoute() {
  return (
 
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<TopicHome />} />
          <Route path="/topics" element={<Topics />}>
            <Route path=":topicId" element={<Topic />}>
              <Route path=":resourceId" element={<Resource />} />
            </Route>
          </Route>
        </Routes>
      </div>
  
  );
}
