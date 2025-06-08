import PageContainer from './components/layout/PageContainer';
import Heading from './components/atoms/Heading';
import TextField from './components/atoms/TextField';
import TextArea from './components/atoms/TextArea';
import Button from './components/atoms/Button';
import Tag from './components/atoms/Tag';

function App() {
  return (
    <PageContainer>
      <Heading level={1}>Drain & Charge Tracker</Heading>
      <Heading level={2}>Atoms Preview</Heading>

      <div className="my-4 space-y-4">
        <TextField
          label="Activity"
          name="activity"
          value=""
          onChange={() => {}}
          placeholder="e.g. Team meeting with Ashok"
        />

        <TextArea
          label="Notes"
          name="notes"
          value=""
          onChange={() => {}}
          placeholder="Optional details..."
        />

        <div className="flex gap-4">
          <Button variant="primary">Save</Button>
          <Button variant="secondary">Cancel</Button>
          <Button variant="danger">Delete</Button>
        </div>

        <div className="flex gap-4">
          <Tag type="C" />
          <Tag type="D" />
        </div>
      </div>
    </PageContainer>
  );
}

export default App;
