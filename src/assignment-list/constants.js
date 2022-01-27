import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  container: {
    backgroundImage: `linear-gradient(135deg, #00BAFF, #007CFF)`,
  },
  containerCircularProgress: {
    color: "#EAEEF4",
  },
  card: {
    borderTopRightRadius: "16px",
    borderTopLeftRadius: "16px",
  },
}));
