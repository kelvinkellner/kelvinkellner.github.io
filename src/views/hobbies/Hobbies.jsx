import { Card, CardEntry, CardText } from '@components/card';

const Hobbies = () => {
  return (
    <Card title="Hobbies & Interests">
      <CardText>
        Outside of spending time with my many loved ones, I love to learn new skills and explore many relaxing, and
        creative hobbies. Here are a few of my recent obsessions :)
      </CardText>
      <CardEntry>
        <CardText>
          <h6>Sewing</h6>
          [pictures, and written]
        </CardText>
      </CardEntry>
      <br />
      <CardEntry>
        <CardText>
          <h6>Design</h6>
          [pictures, and written]
        </CardText>
      </CardEntry>
      <br />
      <CardEntry>
        <CardText>
          <h6>Gardening</h6>
          [pictures, and written]
        </CardText>
      </CardEntry>
      <br />
      <CardEntry>
        <CardText>
          <h6>Music production</h6>
          [pictures, and written]
        </CardText>
      </CardEntry>
      <br />
      <CardEntry>
        <CardText>
          <h6>Hiking, cycling, camping, and walks</h6>
          [pictures, and written]
        </CardText>
      </CardEntry>
    </Card>
  );
};

export default Hobbies;
