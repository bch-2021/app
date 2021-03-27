import Grid from '@material-ui/core/Grid';
import Layout from '../Layout';
import Input from '../../elements/Input';
import Button1 from '../../elements/Button1';
import cl from './style.module.scss';
import HistoryItem from './HistoryItem';

export default function Search() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Input name="Serial number" />
        </Grid>
        <Grid item xs={2}>
          <Button1 name="Search" />
        </Grid>
        <Grid item xs={12}>
          <div className={cl.history}>
            <span>Tracking history</span>
            <div>
              <HistoryItem date="21.01.07" type={0} point="Apple Factory. Japain, 〒038-0101 Aomori" />
              <HistoryItem date="21.01.07" type={1} point="Apple Factory. Japain, 〒038-0101 Aomori" />
              <HistoryItem date="21.01.07" type={2} point="Apple Factory. Japain, 〒038-0101 Aomori" />
            </div>
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
}
