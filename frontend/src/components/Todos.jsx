export function Todos({ props, reloadPage }) {
  return (
    <div>
      {props.map(function (todo) {
        return (
          <div>
            <h4>{todo.title}</h4>
            <h5>{todo.description}</h5>
            <button
              onClick={() => {
                console.log("Todo ID:", todo._id);
                fetch("http://localhost:3000/completed", {
                  method: "POST",
                  body: JSON.stringify({ id: todo._id }),
                  headers: { "Content-type": "application/json" },
                }).then(async function () {
                  reloadPage();
                  console.log("reloaded from todosjsx")
                });
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
