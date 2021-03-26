import Layout from 'components/Layout';
import { useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  useEffect(() => {
    console.log('Here');
    axios({
      method: 'get',
      url: 'https://event.meraan.com/api/graphql',
      headers: {
        'Content-Type': 'text/event-stream',
      },
    }).then((res) => {
      console.log(res);
    });
  });

  return (
    <Layout>
      <p>serials</p>
    </Layout>
  );
}
