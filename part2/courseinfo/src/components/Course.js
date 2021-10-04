import React from "react";

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((p) => {
        return (
          <div>
            <Part part={p} />
          </div>
        );
      })}
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
  );
};

export default Course;
