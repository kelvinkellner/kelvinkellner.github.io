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
  );
};

export default Hobbies;
