import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { FC, useState } from "react";
import { withUrqlClient } from "next-urql";

import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useForgotPasswordMutation } from "../generated/graphql";

const ForgotPassword: FC = () => {
  const [complete, setComplete] = useState(false);
  const [, forgotPassword] = useForgotPasswordMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values) => {
          await forgotPassword(values);
          setComplete(true);
        }}
      >
        {({ isSubmitting }) =>
          complete ? (
            <Box>
              If an account with that email exists, we sent you an email.
            </Box>
          ) : (
            <Form>
              <InputField
                name="email"
                label="Email"
                placeholder="email"
                type="email"
              />

              <Button
                mt={4}
                type="submit"
                isLoading={isSubmitting}
                backgroundColor="#0891B2"
                color="#fff"
              >
                Forgot password
              </Button>
            </Form>
          )
        }
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(ForgotPassword);
