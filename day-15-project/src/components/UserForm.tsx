import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { addUser, getUserById, TUser, updatedUser } from "@/apiCalls/userApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema, FormUser } from "@/utils/validationSchema";
import { SheetFooter } from "./ui/sheet";
import Loader from "./Loader/Loader";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function UserForm({
  setLoading,
  setOpenSheet,
  fetchUsers,
  toast,
  loading,
  userId,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSheet: React.Dispatch<React.SetStateAction<boolean>>;
  fetchUsers: Promise<void>;
  toast: ToastOptions<TData>;
  loading: boolean;
  userId: number;
}) {
  const [userDt, setUserDt] = useState<TUser | null>(null);

  const form = useForm<FormUser>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      status: "",
    },
    values: {
      name: userDt?.name,
      email: userDt?.email,
      role: userDt?.role,
      status: userDt?.status,
    },
  });

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        try {
          const data = await getUserById(userId);
          setUserDt(data);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };

    fetchUser();
  }, [userId]);

  // react hook form for handleOnSubmit
  async function onSubmit(values: FormUser) {
    try {
      setLoading(true);
      if (userId) {
        await updatedUser(values, userId);
        setUserDt(values);
        toast.success(`${values.name} has been edited`);
      } else {
        await addUser(values);
        form.reset();
        setOpenSheet(false);
        toast.success(`${values.name} has been created`);
      }
      setLoading(false);
      await fetchUsers();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Fullname" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Input placeholder="Role" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display role.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Input placeholder="status" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <SheetFooter>
          {loading ? (
            <Loader />
          ) : userId ? (
            <Button type="submit">Save</Button>
          ) : (
            <Button type="submit">Add</Button>
          )}
        </SheetFooter>{" "}
      </form>
    </Form>
  );
}
