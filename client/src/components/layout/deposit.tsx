import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useNetwork, useBalance } from "wagmi";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { ethers } from "ethers";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

declare global {
  interface Window {
    ethereum?: any;
  }
}

const Deposit = () => {
  const { address, connector } = useAccount();
  const { chain } = useNetwork();

  const [depositAddress, setDepositAddress] = React.useState("");
  const [depositAmount, setDepositAmount] = React.useState("0");

  React.useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      const user = Object(jwtDecode(String(currentUser)));
      setDepositAddress(user.depositAddress);
    }
  });

  const connectWallet = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    return signer;
  };

  const handleDeposit = async () => {
    try {
      const signer = await connectWallet();

      await signer.sendTransaction({
        to: depositAddress,
        value: ethers.utils.parseEther(depositAmount)
      });

      axios
        .post("http://localhost:3130/api/user/deposit", {
          amount: depositAmount,
          depositAddress,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Depositer sx={{ px: 4 }}>
        <Box sx={{ my: 3 }}>
          <Link to="/">
            <Button variant="outlined">Home</Button>
          </Link>
        </Box>
        <ConnectButton />
        <Box sx={{ color: "white", py: 4 }}>
          <div>{address}</div>
          {chain && <div>Connected to {chain.name}</div>}
          {connector && <div>{connector.name}</div>}
          <Native />
          <USDT />
          <USDC />
          {depositAddress ? (
            <p>Your deposit address: {depositAddress}</p>
          ) : null}
          <Box sx={{ display: "flex", my: 3 }}>
            <TextField
              id="depositAmount"
              label="Deposit Amount"
              variant="outlined"
              focused
              type="number"
              onChange={(e) => setDepositAmount(e.target.value)}
            />
            <Button variant="outlined" onClick={handleDeposit}>
              Submit
            </Button>
          </Box>
        </Box>
      </Depositer>
    </ThemeProvider>
  );
};

export default Deposit;

const Depositer = styled(Box)(({ theme }) => ({
  position: "absolute",
  backgroundColor: "black",
  width: "100%",
  height: "100vh",
}));

const Native = () => {
  const { data, isError, isLoading } = useBalance({
    address: "0xbF9adc33683De9D652031683F265558024380deD",
  });

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;
  return (
    <div>
      Native: {data?.formatted} {data?.symbol}
    </div>
  );
};

const USDT = () => {
  const { data, isError, isLoading } = useBalance({
    address: "0xbF9adc33683De9D652031683F265558024380deD",
    token: "0x94829DD28aE65bF4Ff6Ce3A687B1053eC7229272",
  });

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;
  return (
    <div>
      USDT: {data?.formatted} {data?.symbol}
    </div>
  );
};

const USDC = () => {
  const { data, isError, isLoading } = useBalance({
    address: "0xbF9adc33683De9D652031683F265558024380deD",
    token: "0x179c54e1fEa2Cd75de3Dc5fa61869B93d8C5b317",
  });

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;
  return (
    <div>
      USDC: {data?.formatted} {data?.symbol}
    </div>
  );
};
