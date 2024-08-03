import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ClientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="clientId" source="clientId" />
        <TextInput label="clientSecret" source="clientSecret" />
      </SimpleForm>
    </Edit>
  );
};
