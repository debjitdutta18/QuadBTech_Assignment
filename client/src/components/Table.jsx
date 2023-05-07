import '../index.css';
import { useContext, useState, useEffect } from 'react';
import { Box,Typography,styled,Grid,Button,Switch} from "@mui/material";
import { useTheme } from "@mui/material";
import { ColorModeContext,tokens } from "../theme";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from '@mui/material';
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri';
import binance from '../images/binance.png'
import bitbins from '../images/bitbins.png'
import Bitfinex from '../images/Bitfinex.jpg'
import coinbase from '../images/coinbase.png'
import coindcx from '../images/coindcx.png'
import colodax from '../images/colodax.jpg'
import karen from '../images/karen.png'
import wazirx from '../images/wazirx.png'
import Kucoin from '../images/KuCoin.png'
import zebpay from '../images/zebpay.png'


const ModifiedSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme, isDark }) => ({
  width: 60,
  height: 40,
  padding: 2,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(22px)',
      color: '#3dc5c1',
      '& + .MuiSwitch-track': {
        backgroundColor: isDark ? '#4a4a4a' : '#2f3241',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: isDark ? '#33cf4d' : '#fff',
      border: `6px solid ${isDark ? '#4a4a4a' : '#fff'}`,
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 34,
    height: 34,
    color: "#3dc5c1"
  },
  '& .MuiSwitch-track': {
    borderRadius: 38 / 2,
    backgroundColor: isDark ? '#39393D' : '#e6e8e6',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 1000,
    }),
  },
}));


const platformData =[ { name: 'Binance', image: binance, link: 'https://binance.com' },
  { name: 'Bitfinex ', image: Bitfinex, link: 'https://bitfinex.com' },
  { name: 'Bitbins', image: bitbins, link: 'https://bitbins.com' },
  { name: 'Coinbase', image: coinbase, link: 'https://coinbase.com' },
  { name: 'Colodax', image: colodax, link: 'https://colodax.com' },
  { name: 'Karen ', image: karen, link: 'https://www.kraken.com' },
  { name: 'Kucoin ', image: Kucoin, link: 'https://kucoin.com' },
  { name: 'Zebpay', image: zebpay, link: 'https://zebpay.com' },
  { name: 'Coindcx', image: coindcx, link: 'https://coindcx.com' },
  { name: 'Wazirx', image: wazirx, link: 'https://wazirx.com' },
];



const Table = () => {
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { toggleColorMode } = useContext(ColorModeContext);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [maindata, setMainData] = useState([]);
  const [promptEvent, setPromptEvent] = useState(null);

  theme.breakpoints.values.custom = 950;
  

  const Header = styled(Box)`
    background: ${colors.primary[200]};
    color: ${colors.grey[100]};
    font-size: 30px;
    letter-spacing: 0px;
    font-weight: 600;
    text-align: center;
    padding: 1px;
  `;
  const Item = styled(Box)`
      background: ${colors.primary[100]};   
      borderRight: 2px solid ${colors.primary[100]};
      font-size: 20px;
      letter-spacing: 0px;
      font-weight: 600;
      text-align: center;
  `;
  const OptionButton = styled(Button)`
      color:${colors.grey[200]}; ;
      background: ${colors.primary[100]};
      text-transform: none;
      padding: 10px 10px;
      border-radius: 10px;
      box-shadow: none;
      font-weight: 200;
      height: 32px;
  `;
  const TelegramButton = styled(Button)`
      color:${colors.grey[200]}; ;
      background: ${colors.greenAccent[100]};
      text-transform: none;
      padding: 20px 20px;
      border-radius: 10px;
      box-shadow: none;
      font-weight: 300;
      height: 32px;
  `;
  const Text = styled(Typography)`
      color:${colors.greenAccent[100]}; ;
      text-align: center; 
      font-weight: 300;
      font-size: 35px;
  `;
  const TextMid = styled(Typography)`
      color:${colors.grey[200]}; ;
      text-align: center; 
      font-weight: 300;
      font-size: 80px;
      line-height: 60px;
  `;
  const TextEnd = styled(Typography)`
      color:${colors.grey[100]}; ;
      text-align: center; 
      font-weight: 600;
      font-size: 20px;
  `;
  const buttonStyle = {
    color: `${colors.greenAccent[100]}`,
    border: `1px solid ${colors.greenAccent[100]}`,
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://43.205.27.143/inr');
        const jsonData = await res.json();
        const dataWithIds = jsonData.map((item, index) => ({ ...item, id: index + 1 }));
        setData1(dataWithIds);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://43.205.27.143/btc');
        const jsonData = await res.json();
        const dataWithIds = jsonData.map((item, index) => ({ ...item, id: index + 1 }));
        setData2(dataWithIds);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://43.205.27.143/usdt');
        const jsonData = await res.json();
        const dataWithIds = jsonData.map((item, index) => ({ ...item, id: index + 1 }));
        setData3(dataWithIds);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://43.205.27.143/wrx');
        const jsonData = await res.json();
        const dataWithIds = jsonData.map((item, index) => ({ ...item, id: index + 1 }));
        setData4(dataWithIds);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);



//for dark/light mode  
  const handleToggle = () => {
      toggleColorMode();
  };

///TelegramButton
const handleTelegramClick = () => {
    window.open('https://web.telegram.org/a/', '_blank');
  };


/// switch
  const trackColor = {
    true: "#2f3241",
    false: "#E5E5EA",
  };
  const thumbColor = {
    true: `${colors.greenAccent[100]}`,
    false: `${colors.greenAccent[100]}`,
  };


///for highest profit
  let result;
  if(maindata.length === 0 ){
    result = data1;
  }else{
    result = maindata;
  }
  
  const highestProfit = result.reduce((acc, curr) => {
    if (parseFloat(curr.profit) > parseFloat(acc.profit)) {
      return curr;
    } else {
      return acc;
    }
  }, { profit: "-100%" });

  document.title = `CRYPTO EXCHANGE | ${highestProfit.profit}`;

    
///for the footer button
  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setPromptEvent(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleClick = () => {
    if (promptEvent) {
      // Show the prompt
      promptEvent.prompt();
      // Wait for the user to respond to the prompt
      promptEvent.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        // Reset the prompt event
        setPromptEvent(null);
      });
    }
  };
 


  return (
    
    <>
      <Grid container marginTop={2}>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Grid container marginTop={2} marginLeft={{xs:30,sm:'38vw',md:'38vw',lg:5}} >
            <Grid item lg={12} > 
                <Typography variant='h4' fontWeight={600} fontFamily={'sans-serif'} color={`${colors.greenAccent[100]}`}>CRYPTO EXCHANGE</Typography> 
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} marginLeft={{xs:30,sm:30,md:30,lg:0}}>
          <Grid container marginTop={2} marginLeft={10} >
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <OptionButton onClick={() => setMainData(data1)}>INR</OptionButton>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <OptionButton onClick={() => setMainData(data2)}>BTC</OptionButton>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <OptionButton onClick={() => setMainData(data3)}>USDT</OptionButton>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <OptionButton onClick={() => setMainData(data4)}>WRX</OptionButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} marginLeft={{xs:30,sm:'38vw',md:'34vw',lg:0}} >
          <Grid container marginTop={2}>
            <Grid item lg={4}>
            </Grid>
            <Grid item md={6} lg={5} >
              <TelegramButton onClick={handleTelegramClick}><FontAwesomeIcon icon={faPaperPlane} /> &nbsp; Connect Telegram</TelegramButton>
            </Grid>
            <Grid item md={6} lg={3} >
              <ModifiedSwitch
                  checked={theme.palette.mode === "dark"}
                  onChange={handleToggle}
                  inputProps={{ "aria-label": "toggle dark mode" }}
                  SwitchIOSProps={{
                    style: {
                      trackColor,
                      thumbColor,
                    },
                  }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container marginTop={10} marginLeft={{xs:20,sm:10,md:'auto',lg:0}}>
        <Grid item xs={12} sm={12} md={2} lg={2}><Text sx={{color:"gold"}}><FontAwesomeIcon icon={faDollarSign} /><FontAwesomeIcon icon={faDollarSign} /></Text></Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <Box>
            <Text>{highestProfit.name}</Text>
            <TextEnd>Exchange</TextEnd>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box><TextMid>{highestProfit.profit}</TextMid></Box>
          <Box><TextEnd marginTop={3}>Highest Profit</TextEnd></Box>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <Box>
            <Text>{highestProfit.volume}</Text>
            <TextEnd>Volume</TextEnd>
          </Box>
        </Grid>
        <Grid item  xs={12} sm={12} md={2} lg={2}><Text sx={{color:"gold"}}><FontAwesomeIcon icon={faDollarSign} /><FontAwesomeIcon icon={faDollarSign} /></Text></Grid>
      </Grid>
      <div className="table" m="100px">
        <Box className="row">
          <Header className="cell" >#</Header>
          <Header className="cell" >Platform</Header>
          <Header className="cell" >Name</Header>
          <Header className="cell" >Volume</Header>
          <Header className="cell" >Last Traded Price</Header>
          <Header className="cell" >Buy / Sell Price</Header>
          <Header className="cell" >Profit</Header>
        </Box>
          {maindata.length === 0 ? (
             data1.map((item, index) => (
               <Box className="row" key={item.id}>
                 <Item className="cellstart">{item.id}</Item>
                 <Item className="cell">
                   <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => window.open(platformData[index % platformData.length].link, "_blank")}>
                     <Avatar src={platformData[index % platformData.length].image} alt={item.name} style={{ width: '30px', height: '30px',cursor: 'pointer'  }} />
                     <div style={{ marginLeft: '4px',cursor: 'pointer'  }}>{platformData[index % platformData.length].name}</div>
                   </div>
                 </Item>
                 <Item className="cell">{item.name}</Item>
                 <Item className="cell">{item.volume}</Item>
                 <Item className="cell">{item.last}</Item>
                 <Item className="cell">{item.buysell}</Item>
                 <Item className="cellend">
                   {item.profit.includes('-') ? (
                     <span style={{ color: ` ${colors.redAccent[100]}`, paddingLeft: '1px' }}>
                       <RiArrowDownSFill style={{ verticalAlign: 'middle', marginRight: '1px' }} />
                       {item.profit}
                     </span>             
                   ) : (
                     <span style={{ color: ` ${colors.greenAccent[100]}`, paddingLeft: '1px' }}>
                       <RiArrowUpSFill style={{ verticalAlign: 'middle', marginRight: '1px' }} />
                       {item.profit}
                     </span>
                   )}
                 </Item>
               </Box>
             ))
           ) : (
             maindata.map((item, index) => (
               <Box className="row" key={item.id}>
                 <Item className="cellstart">{item.id}</Item>
                 <Item className="cell">
                   <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => window.open(platformData[index % platformData.length].link, "_blank")}>
                     <Avatar src={platformData[index % platformData.length].image} alt={item.name} style={{ width: '30px', height: '30px',cursor: 'pointer'  }} />
                     <div style={{ marginLeft: '4px',cursor: 'pointer'  }}>{platformData[index % platformData.length].name}</div>
                   </div>
                 </Item>
                 <Item className="cell">{item.name}</Item>
                 <Item className="cell">{item.volume}</Item>
                 <Item className="cell">{item.last}</Item>
                 <Item className="cell">{item.buysell}</Item>
                 <Item className="cellend">
                   {item.profit.includes('-') ? (
                     <span style={{ color: `      `, paddingLeft: '1px' }}>
                       <RiArrowDownSFill style={{ verticalAlign: 'middle', marginRight: '1px' }} />
                       {item.profit}
                     </span>
                   ) : (
                     <span style={{ color: ` ${colors.greenAccent[100]}`, paddingLeft: '1px' }}>
                       <RiArrowUpSFill style={{ verticalAlign: 'middle', marginRight: '1px' }} />
                       {item.profit}
                     </span>
                   )}
                 </Item>
               </Box>
             ))
           )}

      </div>
      <div height="100px">button</div>
      <div height="100px">button</div>
      <div className="footer">
        <Button variant = 'outlined' onClick={handleClick} style={buttonStyle}>Add Crypto Exchange to Home Screen</Button>
      </div>
    </>
  )
}

export default Table
