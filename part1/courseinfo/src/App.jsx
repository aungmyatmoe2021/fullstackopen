const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part
        part={props.course_details[0].part}
        exercises={props.course_details[0].exercises}
      />
      <Part
        part={props.course_details[1].part}
        exercises={props.course_details[1].exercises}
      />
      <Part
        part={props.course_details[2].part}
        exercises={props.course_details[2].exercises}
      />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";

  const course_details = [
    { part: "Fundamentals of React", exercises: 10 },
    { part: "Using props to pass data", exercises: 7 },
    { part: "State of a component", exercises: 14 },
  ];
  return (
    <>
      <Header course={course} />
      <Content course_details={course_details} />
      <Total
        exercises1={course_details[0].exercises}
        exercises2={course_details[1].exercises}
        exercises3={course_details[2].exercises}
      />
    </>
  );
};

export default App;
