import React from "react";
import {
  Box,
  Button,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useNetwork, useBalance } from "wagmi";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { ethers } from "ethers";
import {
  usdtContractABI,
  usdtContractAddress,
} from "../constants/usdtContractABI";

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

  const [coin, setCoin] = React.useState<string | number>("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof coin>) => {
    setCoin(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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
      // Connect to the user's wallet
      const signer = await connectWallet();

      let amountToSend;
      let transaction;

      // Check the coin type
      if (coin === "ETH") {
        amountToSend = ethers.utils.parseEther(depositAmount); // Sending ETH

        // Build a transaction object for ETH transfer
        transaction = {
          to: depositAddress,
          value: amountToSend,
        };
        // Send the transaction using the connected wallet
        const tx = await signer.sendTransaction(transaction);
        await tx.wait();
      } else if (coin === "USDT") {
        amountToSend = ethers.utils.parseUnits(depositAmount, 18);

        // Get the USDT contract instance using its address and ABI
        const usdtContract = new ethers.Contract(
          usdtContractAddress,
          usdtContractABI.result,
          signer
        );
        const tx = await usdtContract.transfer(depositAddress, amountToSend);
        await tx.wait();
        console.log("USDT transfer successfully");
      } else if (coin === "USDC") {
        amountToSend = ethers.utils.parseUnits(depositAmount, 6);
      }

      axios
        .post("http://localhost:3130/api/user/deposit", {
          userId,
          from: address,
          amount: depositAmount,
          depositAddress,
          coin,
        })
        .then((res) => {
          console.log(res.data);
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
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Coin
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={coin}
                label="Coin"
                onChange={handleChange}
              >
                <MenuItem value="ETH">ETH</MenuItem>
                <MenuItem value="USDT">USDT</MenuItem>
                <MenuItem value="USDC">USDC</MenuItem>
              </Select>
            </FormControl>
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
    token: "0xD8b1aBE335da70008E9BE01d2fE3f01Cc5808359",
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
