import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// todo type
type Todo = {
  id: number;
  userId: number;
  todo: string;
};

const Todos = () => {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const { data, isPending, error } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/todos?limit=3");
      return await response.json();
    },
  });

  // Mutations
  const addTodo = useMutation({
    mutationFn: async (data: Todo) =>
      await fetch("https://dummyjson.com/todos/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <ul>
        {data?.todos.map((todo: Todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          addTodo.mutate({
            id: Date.now(),
            userId: 1,
            todo: "Do Laundry",
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default Todos;
