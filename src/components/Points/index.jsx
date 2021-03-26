import Grid from '@material-ui/core/Grid';
import Layout from '../Layout';
import Input from '../../elements/Input';
import Button1 from '../../elements/Button1';
import cl from './style.module.scss';

export default function Points() {
  return (
    <Layout>
      <div className={cl.container}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <span>List of active poins</span>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <span>Create new point</span>
              </Grid>
              <Grid item xs={6}>
                <Input name="Name" />
              </Grid>
              <Grid item xs={6}>
                <Input name="Country" />
              </Grid>
              <Grid item xs={6}>
                <Input name="City" />
              </Grid>
              <Grid item xs={6}>
                <Input name="Address" />
              </Grid>
              <Grid item xs={12}>
                <Input name="Point owner account address" />
              </Grid>
              <Grid item xs={4}>
                <Button1 name="Create new" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
