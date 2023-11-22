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

  const [userId, setUserId] = React.useState("");
  const [depositAddress, setDepositAddress] = React.useState("");
  const [depositAmount, setDepositAmount] = React.useState("0");
  const [platformEmail, setPlatformEmail] = React.useState("");
  const [platformAmount, setPlatformAmount] = React.useState("0");
  const [externalAddress, setExternalAddress] = React.useState("");
  const [externalAmount, setExternalAmount] = React.useState("0");

  React.useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      const user = Object(jwtDecode(String(currentUser)));
      setDepositAddress(user.depositAddress);
      setUserId(user.id);
    }
  }, []);

  interface balanceProps {
    address?: `0x${string}`;
    token?: `0x${string}`;
  }

  const GetBalance = (props: balanceProps) => {
    const { address, token } = props;
    const { data } = useBalance({
      address,
      token,
    });
    return (
      <Box>
        {data?.formatted} {data?.symbol}
      </Box>
    );
  };

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
        value: ethers.utils.parseEther(depositAmount),
      });

      axios
        .post("http://localhost:3130/api/user/deposit", {
          user: userId,
          from: address,
          amount: depositAmount,
          depositAddress,
        })
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  };

  const handlePlatform = async () => {
    try {
      await axios
        .post("http://localhost:3130/api/user/platforms", {
          user: userId,
          platformEmail,
          amount: platformAmount,
          depositAddress,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.error(err);
    }
  };

  const handleExternal = async () => {
    try {
      await axios
        .post("http://localhost:3130/api/user/external", {
          user: userId,
          amount: externalAmount,
          externalAddress,
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
            <Button sx={{ mx: 1 }} variant="outlined">
              Home
            </Button>
          </Link>
          <Link to="/history">
            <Button sx={{ mx: 1 }} variant="outlined">
              History
            </Button>
          </Link>
        </Box>
        <ConnectButton />
        <Box sx={{ color: "white", py: 4 }}>
          <div>{address}</div>
          {chain && <div>Connected to {chain.name}</div>}
          {connector && <div>{connector.name}</div>}
          <GetBalance address={address} />
          <USDT />
          <USDC />
          {depositAddress ? (
            <p>Your deposit address: {depositAddress}</p>
          ) : null}
          <h1>Main Wallet</h1>
          <Box sx={{ display: "flex", my: 3 }}>
            <TextField
              id="depositAmount"
              label="Main Amount"
              variant="outlined"
              focused
              type="number"
              onChange={(e) => setDepositAmount(e.target.value)}
            />
            <Button variant="outlined" onClick={handleDeposit}>
              Submit
            </Button>
          </Box>

          <h1>Platforms</h1>
          <Box sx={{ display: "flex", my: 3 }}>
            <TextField
              id="platformEmail"
              label="Platform Email"
              variant="outlined"
              focused
              type="string"
              onChange={(e) => setPlatformEmail(e.target.value)}
            />
            <TextField
              id="platformAmount"
              label="Platform Amount"
              variant="outlined"
              focused
              type="number"
              onChange={(e) => setPlatformAmount(e.target.value)}
            />
            <Button variant="outlined" onClick={handlePlatform}>
              Submit
            </Button>
          </Box>

          <h1>External Wallet</h1>
          <Box sx={{ display: "flex", my: 3 }}>
            <TextField
              id="externalAddress"
              label="External Address"
              variant="outlined"
              focused
              type="string"
              onChange={(e) => setExternalAddress(e.target.value)}
            />
            <TextField
              id="externalAmount"
              label="External Amount"
              variant="outlined"
              focused
              type="number"
              onChange={(e) => setExternalAmount(e.target.value)}
            />
            <Button variant="outlined" onClick={handleExternal}>
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
  backgroundColor: "#0F1924",
  width: "100%",
  height: "100vh",
}));

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
