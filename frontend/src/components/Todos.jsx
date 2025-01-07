export function Todos({ props }) {
  return (
    <div>
      {props.map(function (todo) {
        return (
          <div>
            <h4>{todo.title}</h4>
            <h5>{todo.description}</h5>
            <button
              onClick={() => {
                fetch("https://localhost:3000/completed");
              }}
            >
              {todo.completed == true ? "completed" : "mark as completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
