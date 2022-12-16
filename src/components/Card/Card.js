import { Box, Typography } from "@mui/material";

function Card({ properties }) {
  return (
    <Box
      sx={{
        background: "#E7E7E7",
        maxWidth: "200px",
        padding: 2,
        borderRadius: "30px",
        minHeight: "116px",
      }}
    >
      <Typography sx={{ textAlign: "center" }} variant="h6">
        {properties.name}
      </Typography>
      <Box>
        {properties.lists.map((list) => {
          return (
            <>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>{list.key}</Typography>
                <Typography>{list.value}</Typography>
              </Box>
            </>
          );
        })}
      </Box>
    </Box>
  );
}

export default Card;
