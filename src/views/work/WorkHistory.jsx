import { Card, CardEntry, CardText } from '@components/card';

const WorkHistory = () => {
  return (
    <Card title="Work History">
      <CardEntry>
        <CardText>
          <h5>Job Title | Company | Time Frame (presentation TBD)</h5>
          2-3 sentence description of technologies and what I did there
          <br />
          Technology, Technology, Technology
          <br />
          Deliverables
          <br />
          <strong>Takeaways & value pitch</strong>
          <br />
        </CardText>
      </CardEntry>
      <CardEntry>
        <CardText>
          <h5>Job Title | Company | Time Frame (presentation TBD)</h5>
          2-3 sentence description of technologies and what I did there
          <br />
          Technology, Technology, Technology
          <br />
          Deliverables
          <br />
          <strong>Takeaways & value pitch</strong>
          <br />
        </CardText>
      </CardEntry>
    </Card>
  );
};

export default WorkHistory;
