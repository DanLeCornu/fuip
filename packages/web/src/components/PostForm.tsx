import * as React from "react"
import { gql } from "@apollo/client"
import { Button, Stack } from "@chakra-ui/react"

import { useSuggestPostMutation } from "lib/graphql"
import { useForm } from "lib/hooks/useForm"
import Yup from "lib/yup"

import { ButtonGroup } from "./ButtonGroup"
import { Form } from "./Form"
import { FormError } from "./FormError"
import { Input } from "./Input"

const _ = gql`
  mutation SuggestPost($title: String!, $deviceId: String!) {
    createPostSuggestion(title: $title, deviceId: $deviceId)
  }
`
interface Props {
  deviceId: string
}

const PostSchema = Yup.object().shape({
  title: Yup.string().required(),
})

export function PostForm(props: Props) {
  const defaultValues = {
    title: "",
  }
  const form = useForm({ defaultValues, schema: PostSchema, shouldResetAfterSubmit: true })

  const [suggest] = useSuggestPostMutation()

  const handleSubmit = (data: typeof defaultValues) => {
    return form.handler(() => suggest({ variables: { title: data.title, deviceId: props.deviceId } }), {
      onSuccess: (_, toast) => {
        toast({ description: "You've successfully submitted your suggestion!" })
      },
      onServerError: (e, toast) => {
        if (e === "Too many suggestions") {
          toast({
            status: "warning",
            description: "You're limited to one suggestion per day - come back tomorrow!",
          })
        } else {
          toast({ status: "error", description: "Server error. We have been notified" })
        }
      },
    })
  }
  return (
    <Form {...form} onSubmit={handleSubmit}>
      <Stack>
        <Input name="title" autoFocus />
        <FormError />
        <ButtonGroup>
          <Button
            colorScheme="green"
            type="submit"
            isLoading={form.formState.isSubmitting}
            isDisabled={!form.formState.isDirty}
          >
            Submit
          </Button>
        </ButtonGroup>
      </Stack>
    </Form>
  )
}
