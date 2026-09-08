const Header = (props) => {
  console.log(props);
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
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  const course_details = [
    { part: part1.name, exercises: part1.exercises },
    { part: part2.name, exercises: part2.exercises },
    { part: part3.name, exercises: part3.exercises },
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
