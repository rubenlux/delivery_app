import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Logo from "../../assets/logos/logo-zeptimo.png";
import shadows from "@mui/material/styles/shadows";

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 10,
  width: 350,
  border: `2px solid ${theme.palette.grey[400]}`,
  boxShadow: shadows[8],
  position: "relative",
  zIndex: 1,
  backgroundColor: "#f3f2ef",

  float: "right",
}));

const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "#f3f2ef",
  "& > img": {
    width: "90%",
  },
});

export default function Audio() {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Widget>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CoverImage>
            <img alt='logo-zeptimo' src={Logo} />
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <Typography
              variant='caption'
              color='text.secondary'
              fontWeight={500}
            >
              RADIO ZEPTIMO EN VIVO!
            </Typography>
            <Typography noWrap>
              <b>Puro ROCK!</b>
            </Typography>
          </Box>
        </Box>
        <audio className='audio' controls preload='preload'>
          <source src='https://tolkien.republicahosting.net:2363/live' />
        </audio>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: -2,
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: -1,
          }}
        ></Box>
        <Stack
          spacing={2}
          direction='row'
          sx={{ mb: 1, px: 1 }}
          alignItems='center'
        ></Stack>
      </Widget>
    </Box>
  );
}
