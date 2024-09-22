import { userService } from "@/services/users";
import { QueryClient, useQuery } from "@tanstack/react-query";

export default function User() {
  const queryClient = new QueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: userService.users,
  });

  return (
    <div>
      User
      {isLoading && <p>Loading....</p>}
      <h1>
        {data?.map((item) => {
          return <p key={item.name}>{item.name}</p>;
        })}
      </h1>
    </div>
  );
}
