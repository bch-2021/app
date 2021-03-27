import Grid from '@material-ui/core/Grid';
import Input from 'elements/Input';
import Button1 from 'elements/Button1';
import Layout from '../Layout';
import Select1 from '../../elements/Select1';

export default function Transfer() {

  const items = [
    {
      id: 1,
      label: 'aaa',
    },
    {
      id: 2,
      label: 'bbb',
    },
  ];

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Input name="Name" />
        </Grid>
        <Grid item xs={4}>
          <Select1 items={items} name="Select point" value={11} />
        </Grid>
        <Grid item xs={4}>
          <Select1 items={items} name="Select transfer type" value={1} />
        </Grid>
        <Grid item xs={12}>
          <Input name="Link" />
        </Grid>
        <Grid item xs={3}>
          <Button1 name="Create transfer" />
        </Grid>
      </Grid>
    </Layout>
  );
}
