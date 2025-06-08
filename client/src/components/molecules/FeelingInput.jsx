import TextField from "../atoms/TextField";

const FeelingInput = ({ value, onChange }) => (
  <TextField
    label="Feeling After"
    name="feelingAfter"
    value={value}
    onChange={onChange}
    placeholder="e.g. Calm, smiling"
  />
);

export default FeelingInput;
