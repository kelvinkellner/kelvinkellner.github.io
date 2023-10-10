import { Accordion, Card, CardEntry, CardText } from '@components/card';

const ACCORDION_ID = 'home-content';

const Home = () => {
  return (
    <Accordion id={ACCORDION_ID}>
      <Card title="About me" id="about" parentId={ACCORDION_ID}>
        <CardText>
          Simple overview of myself, my schooling, my interests and journey so far.
          <br />
          <strong>Career goals & perspective</strong>
        </CardText>
      </Card>

      <Card title="Work History" id="workHistory" parentId={ACCORDION_ID}>
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

      <Card title="Academic Projects" id="academicProjects" parentId={ACCORDION_ID}>
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

      <Card title="Hobbies & Interests" id="hobbies" parentId={ACCORDION_ID}>
        <CardText>
          Outside of spending time with my many loved ones, I love to learn new skills and explore many relaxing, and
          creative hobbies. Here are a few of my recent obsessions :)
        </CardText>
        <CardEntry>
          <CardText>
            <h5>Sewing</h5>
            [pictures, and written]
          </CardText>
        </CardEntry>
        <CardEntry>
          <CardText>
            <h5>Design</h5>
            [pictures, and written]
          </CardText>
        </CardEntry>
        <CardEntry>
          <CardText>
            <h5>Gardening</h5>
            [pictures, and written]
          </CardText>
        </CardEntry>
        <CardEntry>
          <CardText>
            <h5>Music production</h5>
            [pictures, and written]
          </CardText>
        </CardEntry>
        <CardEntry>
          <CardText>
            <h5>Hiking, cycling, camping, and walks</h5>
            [pictures, and written]
          </CardText>
        </CardEntry>
      </Card>

      <Card title="I would love to hear from you!" id="conclusion" parentId={ACCORDION_ID}>
        <CardText>
          <strong>Social links</strong>
        </CardText>
      </Card>
    </Accordion>
  );
};

export default Home;
