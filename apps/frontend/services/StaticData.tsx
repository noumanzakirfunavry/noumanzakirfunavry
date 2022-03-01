
import axios from 'axios'

export const getStaticProps = async () => {
    try {
      const res = await axios.get('https://www.boredapi.com/api/activity');
      const post = res.data
      
      return {
        props: {
            post
        }
      };
    } catch (error) {
      return {
        props: {
          error: error.toString()
        }
      };
    }
  };

    