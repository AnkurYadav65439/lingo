import { Datagrid, List, NumberField, ReferenceField, SelectField, TextField } from "react-admin"

export const ChallengeList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <NumberField source="id" />
                <SelectField source="type" choices={[
                    {
                        id: "SELECT",
                        name: "SELECT"
                    },
                    {
                        id: "ASSIST",
                        name: "ASSIST"
                    }
                ]} />
                <TextField source="question" />
                <ReferenceField source="lessonId" reference="lessons" />
                <NumberField source="order" />
            </Datagrid>
        </List>
    )
}