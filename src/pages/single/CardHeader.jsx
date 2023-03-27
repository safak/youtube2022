import { Grid, Typography } from "@mui/material";

const CardHeader = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} mb={6}>
        <Typography>Hola</Typography>
      </Grid>
      <Grid item xs={12} mb={6}>
        <Typography>Como estas</Typography>
      </Grid>
    </Grid>
  );
};

export default CardHeader;
