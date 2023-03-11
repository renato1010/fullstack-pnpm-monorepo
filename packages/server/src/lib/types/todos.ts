//
// Represents an item in the todo list.
//
export interface TodoItem {
  //
  // The text of the todo item.
  //
  text: string;
}

//
// Payload to the REST API HTTP POST /todo.
//
export interface AddTodoPayload {
  //
  // The todo item to be added to the list.
  //
  todoItem: TodoItem;
}

//
// Response from the REST API GET /todos.
//
export interface GetTodosResponse {
  //
  // The todo list that was retreived.
  //
  todoList: TodoItem[];
}

//
// Validates a todo item and returns an error message if there's a problem.
//
export function validateTodo(todoItem: TodoItem) {
  if (!todoItem) {
    return {
      valid: false,
      message: "Todo item has no data.",
    };
  }

  if (!todoItem.text) {
    return {
      valid: false,
      message: "Todo item has no text.",
    };
  }

  return { valid: true };
}
