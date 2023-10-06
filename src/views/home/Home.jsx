import AboutMe from '@views/about';
import Heading from '@components/heading';
import { CardStack } from '@components/card';

const Home = () => {
  return (
    <div className="container">
      <Heading>Home</Heading>
      <CardStack>
        <AboutMe />
      </CardStack>
    </div>
  );
};

export default Home;
