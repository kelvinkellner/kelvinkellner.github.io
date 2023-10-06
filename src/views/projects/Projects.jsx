import { Card, CardEntry, CardText } from '@components/card';

const Projects = () => {
  return (
    <Card title="Academic Projects">
      <CardEntry>
        <CardText>
          <h5>Project title</h5>
          2-3 sentence description of the project and my role in the process
          <br />
          Technology, Technology, Technology
          <br />
          Deliverables
          <br />
          Linkout to Prototype
          <br />
          Linkout to Github, and other deliverable
          <br />
          <strong>Takeaways & value pitch</strong>
          <br />
        </CardText>
      </CardEntry>
    </Card>
  );
};

export default Projects;
