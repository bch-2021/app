import Grid from '@material-ui/core/Grid';
import Layout from '../Layout';
import Input from '../../elements/Input';
import Button1 from '../../elements/Button1';

export default function Search() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Input name="Batch number" />
        </Grid>
        <Grid item xs={5}>
          <Input name="Serial number" />
        </Grid>
        <Grid item xs={2}>
          <Button1 name="Search" />
        </Grid>
      </Grid>
    </Layout>
  );
}
