"use client";

import { TextField, Button, Callout, TextArea } from "@radix-ui/themes";
import axios from "axios";
import { useForm } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { register, handleSubmit } = useForm<IssueForm>();
  return (
    <div>
      {error && (
        <Callout.Root className="mb-5" color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="max-w-xl space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An unexpected error occurred.");
          }
        })}
      >
        <TextField.Root
          placeholder="Title"
          {...register("title")}
        ></TextField.Root>
        <TextArea placeholder="Description..." {...register("description")} />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
