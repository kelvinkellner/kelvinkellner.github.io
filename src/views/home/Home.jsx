import { CardStack } from '@components/card';
import AboutMe from '@views/about';
import WorkHistory from '@views/work';
import Projects from '@views/projects';
import Hobbies from '@views/hobbies';
import Conclusion from '@views/conclusion';

const Home = () => {
  return (
    <CardStack>
      <AboutMe />
      <WorkHistory />
      <Projects />
      <Hobbies />
      <Conclusion />
    </CardStack>
  );
};

export default Home;
