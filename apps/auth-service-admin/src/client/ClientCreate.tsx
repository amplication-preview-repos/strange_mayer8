import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ClientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="clientId" source="clientId" />
        <TextInput label="clientSecret" source="clientSecret" />
      </SimpleForm>
    </Create>
  );
};
