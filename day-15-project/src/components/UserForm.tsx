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
import { addUser } from "@/apiCalls/userApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema, FormUser } from "@/utils/validationSchema";
import { SheetFooter } from "./ui/sheet";
import Loader from "./Loader/Loader";
import { Button } from "./ui/button";

export default function UserForm({
  setLoading,
  setOpenSheet,
  fetchUsers,
  toast,
  loading,
}) {
  const form = useForm<FormUser>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      status: "",
    },
  });
  // react hook form for handleOnSubmit
  async function onSubmit(values: FormUser) {
    try {
      setLoading(true);
      await addUser(values);
      form.reset();
      setLoading(false);
      setOpenSheet(false);
      await fetchUsers();
      toast.success(`${values.name} has been created`);
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
          {loading ? <Loader /> : <Button type="submit">Add</Button>}
        </SheetFooter>{" "}
      </form>
    </Form>
  );
}
